"use client";

import {
  Camera,
  Mesh,
  Plane,
  Program,
  Renderer,
  Texture,
  Transform,
} from "ogl";
import { useCallback, useEffect, useRef } from "react";

type GL = Renderer["gl"];

interface ScreenSize {
  width: number;
  height: number;
}

interface Viewport {
  width: number;
  height: number;
}

interface ScrollState {
  ease: number;
  current: number;
  target: number;
  last: number;
  position?: number;
}

interface MediaState {
  extra: number;
  speed: number;
  isBefore: boolean;
  isAfter: boolean;
  scale: number;
  padding: number;
  width: number;
  widthTotal: number;
  x: number;
  screen: ScreenSize;
  viewport: Viewport;
}

interface MediaInstance {
  plane: Mesh;
  program: Program;
  state: MediaState;
  update: (scroll: ScrollState, direction: "right" | "left") => void;
  onResize: (params?: { screen?: ScreenSize; viewport?: Viewport }) => void;
}

const lerp = (p1: number, p2: number, t: number): number => p1 + (p2 - p1) * t;

const getFontSize = (font: string): number => {
  const match = font.match(/(\d+)px/);
  return match ? parseInt(match[1], 10) : 30;
};

const createTextTexture = (
  gl: GL,
  text: string,
  font = "bold 30px monospace",
  color = "black",
): { texture: Texture; width: number; height: number } => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not get 2d context");

  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const fontSize = getFontSize(font);
  const textHeight = Math.ceil(fontSize * 1.2);

  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;

  context.font = font;
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
};

const createTitle = (
  gl: GL,
  plane: Mesh,
  text: string,
  textColor = "#545050",
  font = "30px sans-serif",
): Mesh => {
  const { texture, width, height } = createTextTexture(
    gl,
    text,
    font,
    textColor,
  );
  const geometry = new Plane(gl);
  const program = new Program(gl, {
    vertex: `
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragment: `
      precision highp float;
      uniform sampler2D tMap;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(tMap, vUv);
        if (color.a < 0.1) discard;
        gl_FragColor = color;
      }
    `,
    uniforms: { tMap: { value: texture } },
    transparent: true,
  });

  const mesh = new Mesh(gl, { geometry, program });
  const aspect = width / height;
  const textHeightScaled = plane.scale.y * 0.15;
  const textWidthScaled = textHeightScaled * aspect;
  mesh.scale.set(textWidthScaled, textHeightScaled, 1);
  mesh.position.y = -plane.scale.y * 0.5 - textHeightScaled * 0.5 - 0.05;
  mesh.setParent(plane);

  return mesh;
};

const createMediaShader = (
  gl: GL,
  imageSrc: string,
  borderRadius: number,
): Program => {
  const texture = new Texture(gl, { generateMipmaps: true });
  const program = new Program(gl, {
    depthTest: false,
    depthWrite: false,
    vertex: `
      precision highp float;
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      uniform float uTime;
      uniform float uSpeed;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragment: `
      precision highp float;
      uniform vec2 uImageSizes;
      uniform vec2 uPlaneSizes;
      uniform sampler2D tMap;
      uniform float uBorderRadius;
      varying vec2 vUv;

      float roundedBoxSDF(vec2 p, vec2 b, float r) {
        vec2 d = abs(p) - b;
        return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
      }

      void main() {
        vec2 ratio = vec2(
          min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
          min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
        );
        vec2 uv = vec2(
          vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
          vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );
        vec4 color = texture2D(tMap, uv);

        float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
        float edgeSmooth = 0.002;
        float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);

        gl_FragColor = vec4(color.rgb, alpha);
      }
    `,
    uniforms: {
      tMap: { value: texture },
      uPlaneSizes: { value: [0, 0] },
      uImageSizes: { value: [0, 0] },
      uSpeed: { value: 0 },
      uTime: { value: 100 * Math.random() },
      uBorderRadius: { value: borderRadius },
    },
    transparent: true,
  });

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = imageSrc;
  img.onload = () => {
    texture.image = img;
    program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
  };

  return program;
};

const createMedia = (
  gl: GL,
  geometry: Plane,
  scene: Transform,
  screen: ScreenSize,
  viewport: Viewport,
  imageSrc: string,
  text: string,
  index: number,
  length: number,
  bend: number,
  textColor: string,
  borderRadius: number,
  font?: string,
): MediaInstance => {
  const program = createMediaShader(gl, imageSrc, borderRadius);
  const plane = new Mesh(gl, { geometry, program });
  plane.setParent(scene);

  const state: MediaState = {
    extra: 0,
    speed: 0,
    isBefore: false,
    isAfter: false,
    scale: 0,
    padding: 0,
    width: 0,
    widthTotal: 0,
    x: 0,
    screen,
    viewport,
  };

  const onResize = (
    params: { screen?: ScreenSize; viewport?: Viewport } = {},
  ) => {
    if (params.screen) state.screen = params.screen;
    if (params.viewport) {
      state.viewport = params.viewport;
      if (plane.program.uniforms.uViewportSizes) {
        plane.program.uniforms.uViewportSizes.value = [
          state.viewport.width,
          state.viewport.height,
        ];
      }
    }
    state.scale = state.screen.height / 1200;
    plane.scale.y =
      (state.viewport.height * (600 * state.scale)) / state.screen.height;
    plane.scale.x =
      (state.viewport.width * (850 * state.scale)) / state.screen.width;
    plane.program.uniforms.uPlaneSizes.value = [plane.scale.x, plane.scale.y];
    state.padding = 0.8;
    state.width = plane.scale.x + state.padding;
    state.widthTotal = state.width * length;
    state.x = state.width * index;
  };

  onResize();

  const update = (scroll: ScrollState, direction: "right" | "left") => {
    plane.position.x = state.x - scroll.current - state.extra;

    const x = plane.position.x;
    const H = state.viewport.width / 2;

    if (bend === 0) {
      plane.position.y = 0;
      plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);
      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);

      if (bend > 0) {
        plane.position.y = -arc;
        plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        plane.position.y = arc;
        plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    state.speed = scroll.current - scroll.last;
    program.uniforms.uTime.value += 0.04;
    program.uniforms.uSpeed.value = state.speed;

    const planeOffset = plane.scale.x / 2;
    const viewportOffset = state.viewport.width / 2;
    state.isBefore = plane.position.x + planeOffset < -viewportOffset;
    state.isAfter = plane.position.x - planeOffset > viewportOffset;

    if (direction === "right" && state.isBefore) {
      state.extra -= state.widthTotal;
      state.isBefore = state.isAfter = false;
    }
    if (direction === "left" && state.isAfter) {
      state.extra += state.widthTotal;
      state.isBefore = state.isAfter = false;
    }
  };

  return { plane, program, state, update, onResize };
};

const DEFAULT_ITEMS = [
  { image: "https://picsum.photos/seed/1/800/600?grayscale", text: "Bridge" },
  {
    image: "https://picsum.photos/seed/2/800/600?grayscale",
    text: "Desk Setup",
  },
  {
    image: "https://picsum.photos/seed/3/800/600?grayscale",
    text: "Waterfall",
  },
  {
    image: "https://picsum.photos/seed/4/800/600?grayscale",
    text: "Strawberries",
  },
  {
    image: "https://picsum.photos/seed/5/800/600?grayscale",
    text: "Deep Diving",
  },
  {
    image: "https://picsum.photos/seed/16/800/600?grayscale",
    text: "Train Track",
  },
  {
    image: "https://picsum.photos/seed/17/800/600?grayscale",
    text: "Santorini",
  },
  {
    image: "https://picsum.photos/seed/8/800/600?grayscale",
    text: "Blurry Lights",
  },
  { image: "https://picsum.photos/seed/9/800/600?grayscale", text: "New York" },
  {
    image: "https://picsum.photos/seed/10/800/600?grayscale",
    text: "Good Boy",
  },
  {
    image: "https://picsum.photos/seed/21/800/600?grayscale",
    text: "Coastline",
  },
  {
    image: "https://picsum.photos/seed/12/800/600?grayscale",
    text: "Palm Trees",
  },
];

interface CircularGalleryProps {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  autoRotateSpeed?: number;
}

export default function CircularGallery({
  items,
  bend = -2,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 30px Figtree",
  autoRotateSpeed = 0.5,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const cameraRef = useRef<Camera | null>(null);
  const sceneRef = useRef<Transform | null>(null);
  const mediasRef = useRef<MediaInstance[]>([]);
  const scrollRef = useRef<ScrollState>({
    ease: 0.05,
    current: 0,
    target: 0,
    last: 0,
  });
  const rafRef = useRef<number>(0);
  const screenRef = useRef<ScreenSize>({ width: 0, height: 0 });
  const viewportRef = useRef<Viewport>({ width: 0, height: 0 });

  const handleResize = useCallback(() => {
    const container = containerRef.current;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    if (!container || !renderer || !camera) return;

    screenRef.current = {
      width: container.clientWidth,
      height: container.clientHeight,
    };

    renderer.setSize(screenRef.current.width, screenRef.current.height);
    camera.perspective({
      aspect: screenRef.current.width / screenRef.current.height,
    });

    const fov = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * camera.position.z;
    const width = height * camera.aspect;
    viewportRef.current = { width, height };

    mediasRef.current.forEach((media) =>
      media.onResize({
        screen: screenRef.current,
        viewport: viewportRef.current,
      }),
    );
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    document.documentElement.classList.remove("no-js");

    // Create renderer
    const renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    });
    rendererRef.current = renderer;
    renderer.gl.clearColor(0, 0, 0, 0);
    container.appendChild(renderer.gl.canvas as HTMLCanvasElement);

    // Create camera
    const camera = new Camera(renderer.gl);
    camera.fov = 45;
    camera.position.z = 20;
    camera.position.y = -2;
    cameraRef.current = camera;

    // Create scene
    const scene = new Transform();
    sceneRef.current = scene;

    // Initial resize
    screenRef.current = {
      width: container.clientWidth,
      height: container.clientHeight,
    };
    renderer.setSize(screenRef.current.width, screenRef.current.height);
    camera.perspective({
      aspect: screenRef.current.width / screenRef.current.height,
    });

    const fov = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * camera.position.z;
    const width = height * camera.aspect;
    viewportRef.current = { width, height };

    // Create geometry
    const geometry = new Plane(renderer.gl, {
      heightSegments: 50,
      widthSegments: 100,
    });

    // Create medias
    const galleryItems = items?.length ? items : DEFAULT_ITEMS;
    const duplicatedItems = [...galleryItems, ...galleryItems];

    mediasRef.current = duplicatedItems.map((data, index) =>
      createMedia(
        renderer.gl,
        geometry,
        scene,
        screenRef.current,
        viewportRef.current,
        data.image,
        data.text,
        index,
        duplicatedItems.length,
        bend,
        textColor,
        borderRadius,
        font,
      ),
    );

    // Animation loop with auto-rotate
    const update = () => {
      // Auto-rotate: continuously increment target
      scrollRef.current.target += autoRotateSpeed * 0.02;

      scrollRef.current.current = lerp(
        scrollRef.current.current,
        scrollRef.current.target,
        scrollRef.current.ease,
      );

      const direction =
        scrollRef.current.current > scrollRef.current.last ? "right" : "left";
      mediasRef.current.forEach((media) =>
        media.update(scrollRef.current, direction),
      );

      renderer.render({ scene, camera });
      scrollRef.current.last = scrollRef.current.current;
      rafRef.current = window.requestAnimationFrame(update);
    };

    update();

    // Event listeners
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);

      if (renderer.gl.canvas.parentNode) {
        (renderer.gl.canvas as HTMLCanvasElement).remove();
      }
    };
  }, [
    items,
    bend,
    textColor,
    borderRadius,
    font,
    autoRotateSpeed,
    handleResize,
  ]);

  return (
    <div
      className="w-full h-full overflow-visible relative z-40"
      ref={containerRef}
    />
  );
}
