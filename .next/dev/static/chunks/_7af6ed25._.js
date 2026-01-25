(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/CloudBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CloudBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// ---------- TUNING PARAMETERS ----------
// Adjust these to control the feel of the clouds
// Parallax: how strongly clouds react to mouse movement (higher = more movement)
// Each cloud gets a unique multiplier from this range
const PARALLAX_MIN = 0.6;
const PARALLAX_MAX = 1.2;
// Max pixel offset from parallax (caps movement so clouds don't fly off-screen)
const MAX_PARALLAX_OFFSET = 20;
// Drift: how far and how fast clouds loop through their path
const DRIFT_DURATION_MIN = 50; // seconds (slowest cloud)
const DRIFT_DURATION_MAX = 80; // seconds (fastest cloud)
// Breathing: subtle scale pulse on each cloud
const BREATH_SCALE_MIN = 1.0;
const BREATH_SCALE_MAX = 1.08;
const BREATH_DURATION_MIN = 7; // seconds
const BREATH_DURATION_MAX = 13; // seconds
// Cloud sizing
const CLOUD_SIZE_MIN = 350; // px diameter (desktop)
const CLOUD_SIZE_MAX = 600; // px diameter (desktop)
const MOBILE_SCALE = 0.6; // scale factor on mobile
const TABLET_SCALE = 0.8; // scale factor on tablet
// Blur
const BLUR_DESKTOP = 60; // px
const BLUR_MOBILE = 40; // px
// 7 clouds: corners + edges, with 1 subtle center cloud
const clouds = [
    {
        id: 0,
        x: "-5%",
        y: "-10%",
        size: 550,
        opacity: 0.4,
        parallaxMultiplier: 0.8,
        driftDuration: 65,
        driftPath: {
            x: [
                0,
                30,
                -10,
                20,
                0
            ],
            y: [
                0,
                -20,
                15,
                -10,
                0
            ]
        },
        breathDuration: 9,
        breathScale: 1.06,
        delay: 0
    },
    {
        id: 1,
        x: "70%",
        y: "-8%",
        size: 480,
        opacity: 0.35,
        parallaxMultiplier: 1.0,
        driftDuration: 72,
        driftPath: {
            x: [
                0,
                -25,
                15,
                -20,
                0
            ],
            y: [
                0,
                15,
                -10,
                20,
                0
            ]
        },
        breathDuration: 11,
        breathScale: 1.05,
        delay: 2
    },
    {
        id: 2,
        x: "-8%",
        y: "55%",
        size: 520,
        opacity: 0.38,
        parallaxMultiplier: 0.7,
        driftDuration: 58,
        driftPath: {
            x: [
                0,
                20,
                -15,
                25,
                0
            ],
            y: [
                0,
                -15,
                20,
                -5,
                0
            ]
        },
        breathDuration: 8,
        breathScale: 1.07,
        delay: 4
    },
    {
        id: 3,
        x: "75%",
        y: "60%",
        size: 500,
        opacity: 0.36,
        parallaxMultiplier: 1.1,
        driftDuration: 68,
        driftPath: {
            x: [
                0,
                -20,
                10,
                -15,
                0
            ],
            y: [
                0,
                20,
                -15,
                10,
                0
            ]
        },
        breathDuration: 10,
        breathScale: 1.06,
        delay: 1
    },
    {
        id: 4,
        x: "80%",
        y: "10%",
        size: 400,
        opacity: 0.32,
        parallaxMultiplier: 1.2,
        driftDuration: 75,
        driftPath: {
            x: [
                0,
                -15,
                20,
                -10,
                0
            ],
            y: [
                0,
                10,
                -20,
                15,
                0
            ]
        },
        breathDuration: 12,
        breathScale: 1.05,
        delay: 3
    },
    {
        id: 5,
        x: "5%",
        y: "75%",
        size: 450,
        opacity: 0.34,
        parallaxMultiplier: 0.9,
        driftDuration: 62,
        driftPath: {
            x: [
                0,
                25,
                -20,
                15,
                0
            ],
            y: [
                0,
                -10,
                15,
                -20,
                0
            ]
        },
        breathDuration: 13,
        breathScale: 1.08,
        delay: 5
    },
    {
        id: 6,
        x: "35%",
        y: "40%",
        size: 380,
        opacity: 0.2,
        parallaxMultiplier: 0.6,
        driftDuration: 80,
        driftPath: {
            x: [
                0,
                10,
                -8,
                5,
                0
            ],
            y: [
                0,
                -8,
                10,
                -5,
                0
            ]
        },
        breathDuration: 7,
        breathScale: 1.04,
        delay: 6
    }
];
function Cloud({ config, mouseX, mouseY, reducedMotion, isMobile, isTablet }) {
    _s();
    const scale = isMobile ? MOBILE_SCALE : isTablet ? TABLET_SCALE : 1;
    const cloudSize = config.size * scale;
    const blur = isMobile ? BLUR_MOBILE : BLUR_DESKTOP;
    // Parallax transform: map mouse spring values to cloud offset
    const parallaxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mouseX, {
        "Cloud.useTransform[parallaxX]": (v)=>reducedMotion ? 0 : Math.max(-MAX_PARALLAX_OFFSET, Math.min(MAX_PARALLAX_OFFSET, v * config.parallaxMultiplier))
    }["Cloud.useTransform[parallaxX]"]);
    const parallaxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mouseY, {
        "Cloud.useTransform[parallaxY]": (v)=>reducedMotion ? 0 : Math.max(-MAX_PARALLAX_OFFSET, Math.min(MAX_PARALLAX_OFFSET, v * config.parallaxMultiplier))
    }["Cloud.useTransform[parallaxY]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            position: "absolute",
            left: config.x,
            top: config.y,
            width: cloudSize,
            height: cloudSize,
            x: parallaxX,
            y: parallaxY
        },
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 1.5,
            delay: config.delay * 0.3
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: reducedMotion ? {} : {
                x: config.driftPath.x,
                y: config.driftPath.y
            },
            transition: {
                duration: config.driftDuration,
                repeat: Infinity,
                ease: "easeInOut"
            },
            style: {
                width: "100%",
                height: "100%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: reducedMotion ? {} : {
                    scale: [
                        BREATH_SCALE_MIN,
                        config.breathScale,
                        BREATH_SCALE_MIN
                    ]
                },
                transition: {
                    duration: config.breathDuration,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                style: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    filter: `blur(${blur}px)`,
                    background: `radial-gradient(circle, rgba(200, 200, 210, ${config.opacity}) 0%, rgba(220, 220, 230, ${config.opacity * 0.5}) 40%, transparent 70%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/CloudBackground.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/CloudBackground.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/CloudBackground.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(Cloud, "asDeiz4V/aVQbTzzVK6tSN35MgQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Cloud;
function CloudBackground() {
    _s1();
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTablet, setIsTablet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Raw mouse position as motion values
    const mouseXRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseYRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    // Spring-smoothed mouse for natural following
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseXRaw, {
        stiffness: 50,
        damping: 30
    });
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseYRaw, {
        stiffness: 50,
        damping: 30
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CloudBackground.useEffect": ()=>{
            // Check prefers-reduced-motion
            const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            setReducedMotion(motionQuery.matches);
            const handleMotionChange = {
                "CloudBackground.useEffect.handleMotionChange": (e)=>setReducedMotion(e.matches)
            }["CloudBackground.useEffect.handleMotionChange"];
            motionQuery.addEventListener("change", handleMotionChange);
            // Responsive breakpoints
            const handleResize = {
                "CloudBackground.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth < 640);
                    setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
                }
            }["CloudBackground.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            // Mouse tracking: normalize to -1..1 range centered on viewport
            const handleMouseMove = {
                "CloudBackground.useEffect.handleMouseMove": (e)=>{
                    const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2 * MAX_PARALLAX_OFFSET;
                    const normalizedY = (e.clientY / window.innerHeight - 0.5) * 2 * MAX_PARALLAX_OFFSET;
                    mouseXRaw.set(normalizedX);
                    mouseYRaw.set(normalizedY);
                }
            }["CloudBackground.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "CloudBackground.useEffect": ()=>{
                    motionQuery.removeEventListener("change", handleMotionChange);
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("mousemove", handleMouseMove);
                }
            })["CloudBackground.useEffect"];
        }
    }["CloudBackground.useEffect"], [
        mouseXRaw,
        mouseYRaw
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-[1] overflow-hidden pointer-events-none",
        "aria-hidden": "true",
        children: clouds.map((cloud)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cloud, {
                config: cloud,
                mouseX: mouseX,
                mouseY: mouseY,
                reducedMotion: reducedMotion,
                isMobile: isMobile,
                isTablet: isTablet
            }, cloud.id, false, {
                fileName: "[project]/components/ui/CloudBackground.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui/CloudBackground.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s1(CloudBackground, "HLJyfHPbFXxAux1tYCTVbhSueVs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c1 = CloudBackground;
var _c, _c1;
__turbopack_context__.k.register(_c, "Cloud");
__turbopack_context__.k.register(_c1, "CloudBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/photos.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"1","src":"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=800&fit=crop","caption":"Fall Retreat 2025","size":"large"},{"id":"2","src":"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop","caption":"Networking Night","size":"small"},{"id":"3","src":"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop","caption":"Annual Formal","size":"medium"},{"id":"4","src":"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop","caption":"AZ Group Meeting","size":"small"},{"id":"5","src":"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop","caption":"Professional Workshop","size":"medium"},{"id":"6","src":"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&fit=crop","caption":"Brotherhood Bonding","size":"large"},{"id":"7","src":"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop","caption":"Coffee Chats","size":"small"},{"id":"8","src":"https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=400&fit=crop","caption":"Guest Speaker Event","size":"small"},{"id":"9","src":"https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop","caption":"Community Service","size":"medium"},{"id":"10","src":"https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop","caption":"New Member Night","size":"small"},{"id":"11","src":"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&h=400&fit=crop","caption":"Case Competition","size":"small"},{"id":"12","src":"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=800&fit=crop","caption":"Spring Rush 2025","size":"large"},{"id":"13","src":"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop","caption":"Alumni Panel","size":"medium"},{"id":"14","src":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop","caption":"Study Session","size":"small"},{"id":"15","src":"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop","caption":"Mentorship Meeting","size":"small"}]);}),
"[project]/components/members/PhotoGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/photos.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const photosData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$json__$28$json$29$__["default"];
function PhotoGallery() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Auto-advance every 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoGallery.useEffect": ()=>{
            const interval = setInterval({
                "PhotoGallery.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "PhotoGallery.useEffect.interval": (prev)=>(prev + 1) % photosData.length
                    }["PhotoGallery.useEffect.interval"]);
                }
            }["PhotoGallery.useEffect.interval"], 3000);
            return ({
                "PhotoGallery.useEffect": ()=>clearInterval(interval)
            })["PhotoGallery.useEffect"];
        }
    }["PhotoGallery.useEffect"], []);
    const goToSlide = (index)=>{
        setCurrentIndex(index);
    };
    const goToPrevious = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + photosData.length) % photosData.length);
    };
    const goToNext = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % photosData.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full aspect-video rounded-2xl overflow-hidden bg-primary-light",
                        children: photosData.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: photo.src,
                                        alt: photo.caption,
                                        fill: true,
                                        className: "object-cover",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/members/PhotoGallery.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white font-medium text-lg",
                                            children: photo.caption
                                        }, void 0, false, {
                                            fileName: "[project]/components/members/PhotoGallery.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/members/PhotoGallery.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, photo.id, true, {
                                fileName: "[project]/components/members/PhotoGallery.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/members/PhotoGallery.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevious,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10",
                        "aria-label": "Previous image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/components/members/PhotoGallery.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/members/PhotoGallery.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/members/PhotoGallery.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNext,
                        className: "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10",
                        "aria-label": "Next image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/components/members/PhotoGallery.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/members/PhotoGallery.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/members/PhotoGallery.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10",
                        children: photosData.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(index),
                                className: `w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`,
                                "aria-label": `Go to slide ${index + 1}`
                            }, photo.id, false, {
                                fileName: "[project]/components/members/PhotoGallery.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/members/PhotoGallery.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/members/PhotoGallery.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/members/PhotoGallery.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/members/PhotoGallery.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(PhotoGallery, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c = PhotoGallery;
var _c;
__turbopack_context__.k.register(_c, "PhotoGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/members.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"1\",\"name\":\"Amelie Nah\",\"major\":\"Biopharmaceutical Sciences\",\"photo\":\"/images/members/amelie.png\",\"linkedin\":\"https://www.linkedin.com/in/amelienah\",\"pledgeClass\":\"Spring 2024\",\"isExec\":true,\"role\":\"President\",\"isAlumni\":false,\"description\":\"Amelie is a Junior majoring in Biopharmaceutical Sciences. She is interested in healthcare consulting and enjoys hiking, swimming, and being active.\"},{\"id\":\"2\",\"name\":\"Isabella Martinez\",\"major\":\"Business Administration\",\"photo\":\"/images/members/bella.png\",\"linkedin\":\"https://www.linkedin.com/in/isabellaamartinez/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":true,\"role\":\"Vice President of Professional Development\",\"isAlumni\":false,\"description\":\"Isabella, or Bella, is a Junior majoring in Business Administration and minoring in Legal Studies. She's passionate about the intersection of business and law. When not studying, she loves exploring LA with friends, skiing back in Colorado, and diving into new cultural experiences.\"},{\"id\":\"3\",\"name\":\"Selina Ho\",\"major\":\"Business Administration\",\"photo\":\"/images/members/selina.png\",\"linkedin\":\"https://www.linkedin.com/in/selina-ho\",\"pledgeClass\":\"Fall 2024\",\"isExec\":true,\"role\":\"Co-Vice President of Public Relations\",\"isAlumni\":false,\"description\":\"Selina is a Junior majoring in Business Administration. She is passionate how innovation thrives as it allows her to craft solutions that enhance human experiences.\"},{\"id\":\"4\",\"name\":\"Vanessa Doan\",\"major\":\"Business Administration\",\"photo\":\"/images/members/vanessa.png\",\"linkedin\":\"https://www.linkedin.com/in/maivan-doan\",\"pledgeClass\":\"Fall 2024\",\"isExec\":true,\"role\":\"Co-Vice President of Public Relations\",\"isAlumni\":false,\"description\":\"Vanessa is a Junior majoring in Business Administration, with an interest in consulting. Aside from school, she enjoys traveling, engaging in new experiences, going to cafes, and binge watching shows.\"},{\"id\":\"5\",\"name\":\"Sahil Harjani\",\"major\":\"Economics & Data Science\",\"photo\":\"/images/members/sahil.png\",\"linkedin\":\"https://www.linkedin.com/in/sahil-harjani-6b1632238\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Vice President of Finance\",\"isAlumni\":false,\"description\":\"Sahil Harjani is a Sophomore studying Economics and Data Science. He's passionate about consulting, social impact, and leveraging data-driven insights to create meaningful, community-centered change.\"},{\"id\":\"6\",\"name\":\"Sunny Wang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/sunny.png\",\"linkedin\":\"https://www.linkedin.com/in/sunny-r-wang\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Secretary\",\"isAlumni\":false,\"description\":\"Sunny is a Junior majoring in Business Administration and minoring in AI Applications. She's interested in tech, consulting, and social impact. In her free time, she enjoys soccer and rock climbing.\"},{\"id\":\"7\",\"name\":\"Jason Liu\",\"major\":\"Business Administration\",\"photo\":\"/images/members/jasonliu.png\",\"linkedin\":\"https://www.linkedin.com/in/jasonpaulliu\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Co-Vice President of Social Affairs\",\"isAlumni\":false,\"description\":\"Jason is majoring in Business Administration and, in his free time, he loves to attend festivals and explore new music, hang out with friends and family, and unwind by spending time outdoors.\"},{\"id\":\"8\",\"name\":\"Jadon Leung\",\"major\":\"Computational and Applied Mathematics\",\"photo\":\"/images/members/jadon.png\",\"linkedin\":\"https://www.linkedin.com/in/jadon-leung/\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Co-Vice President of Social Affairs\",\"isAlumni\":false,\"description\":\"Jadon is a junior majoring in Computational and Applied Mathematics. He is currently pursuing a career in software engineering. In his free time, he enjoys playing volleyball and cooking.\"},{\"id\":\"9\",\"name\":\"Myke Chen\",\"major\":\"Computer Science and Business Administration\",\"photo\":\"/images/members/myke.png\",\"linkedin\":\"https://www.linkedin.com/in/myke-angelo-chen/\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Vice President of Administration\",\"isAlumni\":false,\"description\":\"Myke is a junior majoring in Computer Science and Business Administration. He is currently pursuing a career in tech. In his free time, he enjoys playing golf, basketball, and poker.\"},{\"id\":\"10\",\"name\":\"Kelvin Nguyen\",\"major\":\"Business Administration\",\"photo\":\"/images/members/kelvin.png\",\"linkedin\":\"https://www.linkedin.com/in/kelvindn\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Master of Rituals\",\"isAlumni\":false,\"description\":\"Kelvin is a junior majoring in Business Administration. He is currently pursuing a career in consulting & finance. In his free time, he enjoys golf, volleyball, films, and cafes.\"},{\"id\":\"11\",\"name\":\"Charlie Huang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/charlie.png\",\"linkedin\":\"http://linkedin.com/in/charleshuang2004\",\"pledgeClass\":\"Fall 2022\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Charlie is a Senior majoring in Business Administration with an emphasis on finance. He is pursuing a career in investment banking and enjoys playing basketball, tennis, golf, snowboarding, cooking, and going to the beach in his free time.\"},{\"id\":\"12\",\"name\":\"Anya Yang\",\"major\":\"Business Administration & Artificial Intelligence Applications\",\"photo\":\"/images/members/anya.png\",\"linkedin\":\"https://www.linkedin.com/in/anyayang\",\"pledgeClass\":\"Fall 2022\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Anya is a Senior majoring in Business Administration and AI Applications. In her free time, she enjoys collecting blind boxes, trying new restaurants, and solving crossword puzzles. Her dream is to one day be on Family Feud.\"},{\"id\":\"13\",\"name\":\"Elena Mao\",\"major\":\"Business Administration & Accounting\",\"photo\":\"/images/members/elena.png\",\"linkedin\":\"https://www.linkedin.com/in/elenamao\",\"pledgeClass\":\"Fall 2022\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Elena is a Senior double majoring in Business Administration and Accounting. She enjoys baking, thrifting, and road trips, and is passionate about exploring different artistic pursuits.\"},{\"id\":\"14\",\"name\":\"Julia Purwadi\",\"major\":\"Business Administration & Media Economics and Entrepreneurship\",\"photo\":\"/images/members/julia.png\",\"linkedin\":\"https://www.linkedin.com/in/juliapurwadi/\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Julia is a Senior majoring in Business Administration with a focus on marketing. She has been a dedicated member of Alpha Zeta since her freshman year. She enjoys traveling, snowboarding, attending music festivals, and spending time with her AZ brothers.\"},{\"id\":\"15\",\"name\":\"Anson Chu\",\"major\":\"Political Economy\",\"photo\":\"/images/members/anson.png\",\"linkedin\":\"https://www.linkedin.com/in/ansonsch/\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Anson is a Senior majoring in Political Economy and minoring in Applied Analytics, LawTech, and AI Applications. He enjoys playing volleyball, watching trending shows, and discovering new music in his free time.\"},{\"id\":\"16\",\"name\":\"Yuna Jang\",\"major\":\"B.F.A Design\",\"photo\":\"/images/members/yuna.png\",\"linkedin\":\"https://www.linkedin.com/in/yunajang/\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Yuna is a Senior majoring in B.F.A Design and minoring in Web Development. She is passionate about UI/UX design, with experience in graphic design, 3D modeling, and digital platforms. Yuna is focused on creating impactful visual branding and user experiences.\"},{\"id\":\"17\",\"name\":\"Austin Lin\",\"major\":\"Economics & Data Science\",\"photo\":\"/images/members/austin.png\",\"linkedin\":\"https://www.linkedin.com/in/austin-lin0405/\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Austin is a Senior majoring in Economics and Data Science, with a master's in Applied Data Science. He is interested in machine learning and AI in finance. In his free time, he enjoys music (singing, producing, DJing), basketball, and exploring LA's restaurants.\"},{\"id\":\"18\",\"name\":\"Lilian Nguyen\",\"major\":\"Business Administration\",\"photo\":\"/images/members/lilian.png\",\"linkedin\":\"http://linkedin.com/in/lilian-t-nguyen\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Lilian is a Senior majoring in Business Administration with a minor in Public Relations. She enjoys exploring corporate communications and influencer marketing, and in her free time, she enjoys visiting cafes, playing New York Times games, and watching YouTube.\"},{\"id\":\"19\",\"name\":\"Lorena Liu\",\"major\":\"Business Administration\",\"photo\":\"/images/members/lorena.png\",\"linkedin\":\"http://www.linkedin.com/in/lorenaliu04\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Lorena is a Senior majoring in Business Administration with a minor in Data Science. She enjoys movies, jazz dancing, badminton, and extreme sports for stress relief.\"},{\"id\":\"20\",\"name\":\"Jacob Granados\",\"major\":\"Business Administration\",\"photo\":\"/images/members/jacob.png\",\"linkedin\":\"https://www.linkedin.com/in/jacobgranados/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Jacob is a Senior majoring in Business Administration with a keen interest in investment banking. He is passionate about financial markets and enjoys staying up-to-date with the latest industry trends. In his free time, he loves playing soccer and exploring opportunities to grow both personally and professionally.\"},{\"id\":\"21\",\"name\":\"Aaditya Surya\",\"major\":\"Computer Science and Business Administration\",\"photo\":\"/images/members/aaditya.png\",\"linkedin\":\"https://www.linkedin.com/in/aadityasurya/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Aaditya is a Senior majoring in Computer Science and Business Administration. He enjoys developing innovative tech solutions and collaborating on projects that address real-world challenges.\"},{\"id\":\"22\",\"name\":\"Julie Wan\",\"major\":\"Business Administration\",\"photo\":\"/images/members/julie.png\",\"linkedin\":\"https://www.linkedin.com/in/julie-wan-usc/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Julie is a Senior majoring in Business Administration and minoring in Digital Studies. She is interested in marketing and the beauty industry.\"},{\"id\":\"23\",\"name\":\"Ella Kang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/ella.png\",\"linkedin\":\"https://www.linkedin.com/in/ella-kang/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Ella is a Junior majoring in Business Administration from Redondo Beach. She is involved in Trojan Investing Society and she is looking for stim :)\"},{\"id\":\"24\",\"name\":\"Fiona Ko\",\"major\":\"Business Administration & Human Biology\",\"photo\":\"/images/members/fiona.png\",\"linkedin\":\"https://www.linkedin.com/in/fionako923\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Fiona is a Senior double majoring in Business Administration and Human Biology. She is passionate about finance, biology, fashion, and art history, and enjoys exploring these fields during her free time.\"},{\"id\":\"25\",\"name\":\"Brandon Chung\",\"major\":\"Business Administration\",\"photo\":\"/images/members/brandon.png\",\"linkedin\":\"http://www.linkedin.com/in/-brandon-chung-\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Brandon is a Senior majoring in Business Administration. He is passionate about finance and enjoys playing basketball and poker in his free time.\"},{\"id\":\"26\",\"name\":\"Justin Xiang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/justin.png\",\"linkedin\":\"https://www.linkedin.com/in/justin-xiang12/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Justin is a Senior majoring in Business Administration. He is from New Zealand and enjoys snowboarding in his spare time. Justin joined Alpha Zeta in his sophomore year and is interested in Investment Banking.\"},{\"id\":\"27\",\"name\":\"Eddie Wang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/eddie.png\",\"linkedin\":\"https://www.linkedin.com/in/edwardwngg\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Eddie is a Senior majoring in Business Administration. He is interested in a career in consulting and enjoys spending his free time outdoors, playing pickleball, and hiking.\"},{\"id\":\"28\",\"name\":\"Jocelyn Tang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/jocelyn.png\",\"linkedin\":\"https://www.linkedin.com/in/jocelyntang45\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Jocelyn is a Senior majoring in Business Administration with an emphasis in finance. She has been an active member of Alpha Zeta since her sophomore year and enjoys traveling, kickboxing, and watching F1 in her free time.\"},{\"id\":\"29\",\"name\":\"Walker Blackwell\",\"major\":\"Business Administration and Theatre\",\"photo\":\"/images/members/walker.png\",\"linkedin\":\"https://www.linkedin.com/in/walker-blackwell/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Walker is a Junior majoring in Business Administration and Theatre. He is passionate about investment banking, acting, and public speaking. He co-founded the Prison Mathematics Project, combining his interests to create meaningful impact.\"},{\"id\":\"30\",\"name\":\"Aidan Han\",\"major\":\"Music Industry\",\"photo\":\"/images/members/aidan.png\",\"linkedin\":\"https://www.linkedin.com/in/aidanhan123\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Aidan is a Senior majoring in Music Industry. He has produced Billboard hits for artists like Polo G and enjoys playing billiards, exploring the city, and DJing in his free time.\"},{\"id\":\"31\",\"name\":\"Esther Ji\",\"major\":\"Business Administration\",\"photo\":\"/images/members/esther.png\",\"linkedin\":\"https://www.linkedin.com/in/estherxrji/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Esther is a Senior majoring in Business Administration with a minor in Health Innovation. She is pursuing a career in healthcare strategy and enjoys trying new restaurants, film photography, and gymnastics.\"},{\"id\":\"32\",\"name\":\"Jason Zhang\",\"major\":\"Economics\",\"photo\":\"/images/members/jason.png\",\"linkedin\":\"https://www.linkedin.com/in/jczhang05/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Jason is a Junior majoring in Economics with a minor in Musical Studies. He enjoys practicing piano and guitar, hiking, reading, and attending concerts.\"},{\"id\":\"33\",\"name\":\"Nayeon Koo\",\"major\":\"Sociology & Data Science\",\"photo\":\"/images/members/nayeon.png\",\"linkedin\":\"www.linkedin.com/in/Nayeon-Koo\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Nayeon is a Senior double majoring in Sociology and Data Science. She spends her free time building model kits, going on road trips, and hiking with friends. Nayeon is always on the lookout for new places to explore and enjoys the challenge of discovering remote hiking trails.\"},{\"id\":\"34\",\"name\":\"Claire Yang\",\"major\":\"Applied Mathematics\",\"photo\":\"/images/members/claire.png\",\"linkedin\":\"https://www.linkedin.com/in/claire-y-yang\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Claire is a Junior majoring in Applied Mathematics. She is passionate about the intersection of business and quantitative problem-solving and enjoys exploring new cafes, nail art, and spending quality time with family and friends.\"},{\"id\":\"35\",\"name\":\"Gloria Pan\",\"major\":\"Business Administration\",\"photo\":\"/images/members/gloria.png\",\"linkedin\":\"https://www.linkedin.com/in/gloriaapan/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Gloria is a Junior majoring in Business Administration with interests in marketing and design. She enjoys film, photography, visiting art museums, and spending time with family and friends.\"},{\"id\":\"36\",\"name\":\"Evan Zhang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/evan.png\",\"linkedin\":\"https://www.linkedin.com/in/evanzhang7\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Evan is a Senior majoring in Business Administration with a minor in AI Applications. He is passionate about product management and enjoys hiking, traveling, and discovering new cafes.\"},{\"id\":\"37\",\"name\":\"Daniel Yang\",\"major\":\"Artificial Intelligence for Business\",\"photo\":\"/images/members/daniel.png\",\"linkedin\":\"https://www.linkedin.com/in/danielyangdev/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Daniel is a Junior majoring in Artificial Intelligence for Business with a minor in Philosophy. He enjoys technology and business for social impact, along with gardening, camping, and cooking.\"},{\"id\":\"38\",\"name\":\"Shania Tang\",\"major\":\"Business Administration & Accounting\",\"photo\":\"/images/members/shania.png\",\"linkedin\":\"https://www.linkedin.com/in/shania-tang\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Shania is a Junior double-majoring in Business Administration and Accounting. She loves to bake and play water polo in her free time.\"},{\"id\":\"39\",\"name\":\"Chris Feng\",\"major\":\"Business Administration\",\"photo\":\"/images/members/chris.png\",\"linkedin\":\"http://linkedin.com/in/christopher-feng0\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Chris is a Junior majoring in Business Administration. He loves playing volleyball, exploring new places, and going to raves. In his free time, he stays active by joining friends for weekend adventures, whether it's discovering new cafes or hiking nearby trails.\"},{\"id\":\"40\",\"name\":\"Jason Byun\",\"major\":\"Physics & Computer Science\",\"photo\":\"/images/members/jasonb.png\",\"linkedin\":\"https://www.linkedin.com/in/jason-byun/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Jason is a Junior majoring in Physics and Computer Science. After crossing last semester, he has been eager to apply his new skills in various areas. He enjoys thrifting, singing, watching TV shows, and experimenting with different activities to stay creative.\"},{\"id\":\"41\",\"name\":\"Leena Van\",\"major\":\"Business Administration\",\"photo\":\"/images/members/leena.png\",\"linkedin\":\"https://www.linkedin.com/in/leena-van-03113225a/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Leena is a Junior majoring in Business Administration with a minor in Artificial Intelligence Applications. She hails from Dallas, TX, and loves listening to jazz and RnB, reading webtoons, and cooking for friends and family. A fun fact about Leena is that she has a dorm cat named Soju, who keeps her company.\"},{\"id\":\"42\",\"name\":\"Leia Fisher\",\"major\":\"Economics\",\"photo\":\"/images/members/leia.png\",\"linkedin\":\"www.linkedin.com/in/leiafish/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Leia is a Junior majoring in Economics and minoring in AI Applications. She is passionate about innovation and the intersection of business, tech, and design.\"},{\"id\":\"43\",\"name\":\"Bea Tan\",\"major\":\"Business Administration\",\"photo\":\"/images/members/bea.png\",\"linkedin\":\"https://www.linkedin.com/in/beaashleytan/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Bea is a Sophomore majoring in Business Administration. She was born and raised in the Philippines and enjoys painting, photography and playing badminton in her free time.\"},{\"id\":\"44\",\"name\":\"Joshua Lomboy\",\"major\":\"Accounting and Finance\",\"photo\":\"/images/members/joshua.png\",\"linkedin\":\"www.LinkedIn.com/in/joshualomboy\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Josh is a Junior studying accounting and finance. He is originally from Irvine, California and enjoys playing basketball, going to the beach, and exploring new musical artists.\"},{\"id\":\"45\",\"name\":\"Beomsoo Park\",\"major\":\"Business Administration\",\"photo\":\"/images/members/beomsoo.png\",\"linkedin\":\"https://www.linkedin.com/in/beomsoo-park/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Beomsoo is a Junior majoring in Business Administration with a strong interest in consulting, particularly at the intersection of technology and AI. Outside academics, he enjoys snowboarding, exploring new restaurants, and traveling.\"},{\"id\":\"46\",\"name\":\"Andy Kim\",\"major\":\"Mathematics/Economics\",\"photo\":\"/images/members/andy.png\",\"linkedin\":\"www.linkedin.com/in/andyakim\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Andy is a Sophomore majoring in mathematics/economics. Professionally, he is interested in pursuing a career in investment banking. He enjoys attending sports games, trying out new restaurants, and thrifting in his free time.\"},{\"id\":\"47\",\"name\":\"Spencer Sun\",\"major\":\"Business Administration\",\"photo\":\"/images/members/spencer.png\",\"linkedin\":\"https://www.linkedin.com/in/spencersun15/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Spencer is a Junior majoring in Business Administration. He is interested in the intersection between finance and technology, bouldering, and films.\"},{\"id\":\"48\",\"name\":\"Angela Ren\",\"major\":\"Business Administration\",\"photo\":\"/images/members/angela.png\",\"linkedin\":\"https://www.linkedin.com/in/angela-ren/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Angela is a Junior studying Business Administration. In her free time, she loves trying new cuisines, skiing, and going to the beach with friends.\"},{\"id\":\"49\",\"name\":\"Joaquin Posada\",\"major\":\"Business Administration\",\"photo\":\"/images/members/joaquin.png\",\"linkedin\":\"www.linkedin.com/in/joaquin-posada-c\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Joaquin is a Junior majoring in Business Administration and minoring in Artificial Intelligence Applications. He is passionate about combining his interests in consulting and technology to develop solutions that drive business growth.\"},{\"id\":\"50\",\"name\":\"Jeffery Chae\",\"major\":\"Political Economy\",\"photo\":\"/images/members/jeffery.png\",\"linkedin\":\"www.linkedin.com/in/jefferychae\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Jeffery is a Junior majoring in Political Economy with a minor in AI Applications. In his free time, he enjoys outdoor activities such as going to the beach, running, or golfing.\"},{\"id\":\"51\",\"name\":\"Lance Lai\",\"major\":\"Business Administration\",\"photo\":\"/images/members/lance.png\",\"linkedin\":\"https://www.linkedin.com/in/lance-laI-1428a8277\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Lance is a Junior majoring in Business Administration with an interest in consulting. He was born and raised in Chicago and in his free time he likes to play volleyball, golf and poker.\"},{\"id\":\"52\",\"name\":\"Ronan Donohue\",\"major\":\"AI for Business\",\"photo\":\"/images/members/ronan.png\",\"linkedin\":\"https://www.linkedin.com/in/ronandon\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Ronan is a Sophomore majoring in AI for Business. Passionate about climate change and finance, he enjoys building and creating products that address issues in these fields.\"},{\"id\":\"53\",\"name\":\"Hannah Lee\",\"major\":\"Business Administration\",\"photo\":\"/images/members/hannahe.png\",\"linkedin\":\"https://www.linkedin.com/in/hannah-lee-095192257/\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Hannah is a Sophomore majoring in Business Administration with a minor in Applied Analytics with an interest in finance. From Michigan, she enjoys playing tennis, pilates, and hanging with friends.\"},{\"id\":\"54\",\"name\":\"Charles Tam\",\"major\":\"Business Administration\",\"photo\":\"/images/members/charles.png\",\"linkedin\":\"https://www.linkedin.com/in/charlestam35\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Charles is a Junior majoring in Business Administration with passions for health, fitness, and investing. He enjoys attending music festivals and playing poker.\"},{\"id\":\"55\",\"name\":\"Anita Cao\",\"major\":\"Business Administration\",\"photo\":\"/images/members/anita.png\",\"linkedin\":\"https://www.linkedin.com/in/anitacao/\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Anita is a Junior at USC majoring in Business Administration with minors in Sports Media Industries and Legal Studies. She enjoys tennis, hiking, and spending time with friends and family.\"},{\"id\":\"56\",\"name\":\"Hannah Lee\",\"major\":\"Artificial Intelligence for Business\",\"photo\":\"/images/members/hannahy.png\",\"linkedin\":\"https://www.linkedin.com/in/hannahyujinlee\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Hannah is a Sophomore majoring in Business Administration with a minor in Applied Analytics with an interest in finance. From Michigan, she enjoys playing tennis, pilates, and hanging with friends.\"},{\"id\":\"57\",\"name\":\"Mia Lee\",\"major\":\"Business Administration\",\"photo\":\"/images/members/mia.png\",\"linkedin\":\"https://www.linkedin.com/in/mialee787\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Mia is a Freshman majoring in Business Administration with interests in finance and fashion. In her free time, she enjoys photography, arts and crafts, and exploring LA.\"},{\"id\":\"58\",\"name\":\"Dilen Kakar\",\"major\":\"Business Administration\",\"photo\":\"/images/members/dilen.png\",\"linkedin\":\"https://www.linkedin.com/in/dilenkakar\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Dilen is a freshman majoring in Business Administration with an emphasis in finance. He is pursuing a career in investment banking and enjoys playing tennis, running, hiking, eating sushi, and giving back to the community.\"},{\"id\":\"59\",\"name\":\"Andre Anggala\",\"major\":\"Business Administration\",\"photo\":\"/images/members/andre.png\",\"linkedin\":\"https://www.linkedin.com/in/andre-anggala/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Andre is a freshman majoring in Business Administration and pursuing an emphasis in finance. From Manila, he enjoys golf, basketball, poker, and spending time with family and friends.\"},{\"id\":\"60\",\"name\":\"Iren Han\",\"major\":\"Business Administration\",\"photo\":\"/images/members/iren.png\",\"linkedin\":\"https://www.linkedin.com/in/irenhan/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Iren is a sophomore majoring in Business Administration. She is currently pursuing a career in consulting. In her free time, she enjoys side questing with friends and running spontaneous plots.\"},{\"id\":\"61\",\"name\":\"Jenny Jiang\",\"major\":\"Film and Television Production\",\"photo\":\"/images/members/jenny.png\",\"linkedin\":\"https://www.linkedin.com/in/jenny-jiang2/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Jenny is a Sophomore majoring in Film and Television Production with a marketing minor. She enjoys traveling, skiing, playing field hockey, badminton, going to the beach.\"},{\"id\":\"62\",\"name\":\"Pavan Nandhakumar\",\"major\":\"Economics and Data Science\",\"photo\":\"/images/members/pavan.png\",\"linkedin\":\"https://www.linkedin.com/in/pavannandhakumar\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Pavan is a Sophomore majoring in Economics & Data Science and minoring in AI Applications. He's passionate about tech and consulting. In his free time, he enjoys playing basketball, going on drives, and going to the beach.\"},{\"id\":\"63\",\"name\":\"Puffo Danchaivijitr\",\"major\":\"Biochemistry\",\"photo\":\"/images/members/puffo.png\",\"linkedin\":\"https://www.linkedin.com/in/danchaivijitr-piyaluk\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Puffo is a Sophomore majoring in Biochemistry with a minor in Business Finance. In her free time, she enjoys traveling, exploring new restaurants, playing squash, and karaoke nights with friends.\"},{\"id\":\"64\",\"name\":\"Ryan Anderson\",\"major\":\"Accounting\",\"photo\":\"/images/members/ryan.png\",\"linkedin\":\"https://www.linkedin.com/in/ryanaanderson\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Ryan is a Freshman majoring in Accounting. He is pursuing a career in investment banking. He likes to be active, read, and be in nature.\"},{\"id\":\"65\",\"name\":\"Joey Chen\",\"major\":\"Business Administration\",\"photo\":\"/images/members/joeychen.png\",\"linkedin\":\"https://www.linkedin.com/in/joey-leonardo-chen\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Joey is a freshman majoring in Business Administration. He is interested in pursuing a career in finance and enjoys playing basketball, golf, volleyball, and lifting.\"},{\"id\":\"66\",\"name\":\"Tommy Wickersham\",\"major\":\"Computer Science and Business Administration\",\"photo\":\"/images/members/tommy.png\",\"linkedin\":\"https://www.linkedin.com/in/tommy-wickersham/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Tommy is a sophomore majoring in Computer Science and Business Administration. He's interested in technology and consulting with a long-term interest in venture capital. He enjoys watching soccer, staying active, and learning new languages.\"},{\"id\":\"67\",\"name\":\"Rosabel Tan\",\"major\":\"Cognitive Science\",\"photo\":\"/images/members/rosabel.png\",\"linkedin\":\"https://www.linkedin.com/in/rosabeltan\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Rosabel is a Freshman majoring in Cognitive Science, with an emphasis in Computer Science. She is currently pursuing a career in SWE. In her free time, she enjoys baking, pottery, and trying new cosmetics.\"},{\"id\":\"68\",\"name\":\"Rohan Krishnan\",\"major\":\"Physics and Computer Science\",\"photo\":\"/images/members/rohan.png\",\"linkedin\":\"https://www.linkedin.com/in/rohan-krishnan-436076209/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Rohan is a Sophomore majoring in Physics and Computer Science. He is currently pursuing a career in machine learning, and in his free time he enjoys lifting, hiking and thrifting.\"},{\"id\":\"69\",\"name\":\"Winnie Gandawidjaja\",\"major\":\"Business Administration\",\"photo\":\"/images/members/winnie.png\",\"linkedin\":\"https://www.linkedin.com/in/winniegandawidjaja\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false,\"description\":\"Winnie is a sophomore majoring in Business Administration. She is currently pursuing a career in marketing and entrepreneurship. In her free time, she enjoys trying new restaurants, spending time with friends and family, and traveling.\"}]"));}),
"[project]/components/ui/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeader({ title, subtitle, centered = true, light = false, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${centered ? 'text-center' : ''} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide ${light ? 'text-white' : 'text-secondary-light'}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeader.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-secondary/60'}`,
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeader.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/SectionHeader.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/members/MemberModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemberModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MemberModal({ member, isOpen, onClose }) {
    _s();
    // Close on Escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemberModal.useEffect": ()=>{
            const handleEscape = {
                "MemberModal.useEffect.handleEscape": (e)=>{
                    if (e.key === "Escape") {
                        onClose();
                    }
                }
            }["MemberModal.useEffect.handleEscape"];
            if (isOpen) {
                document.addEventListener("keydown", handleEscape);
                document.body.style.overflow = "hidden";
            }
            return ({
                "MemberModal.useEffect": ()=>{
                    document.removeEventListener("keydown", handleEscape);
                    document.body.style.overflow = "unset";
                }
            })["MemberModal.useEffect"];
        }
    }["MemberModal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen || !member) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
        onClick: onClose,
        onKeyDown: (e)=>e.key === "Escape" && onClose(),
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "member-modal-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-primary rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            onClick: (e)=>e.stopPropagation(),
            onKeyDown: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-secondary/10 hover:bg-secondary/20 rounded-full text-secondary-light transition-colors z-10",
                    "aria-label": "Close modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/components/members/MemberModal.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/members/MemberModal.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/members/MemberModal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-xl overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: member.photo,
                                        alt: member.name,
                                        fill: true,
                                        className: "object-cover",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/members/MemberModal.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/members/MemberModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "member-modal-title",
                                            className: "font-display text-2xl md:text-3xl font-bold text-secondary-light mb-2",
                                            children: member.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/members/MemberModal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        member.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-accent font-medium mb-2",
                                            children: member.role
                                        }, void 0, false, {
                                            fileName: "[project]/components/members/MemberModal.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        member.major && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-secondary/70 text-sm mb-1",
                                            children: member.major
                                        }, void 0, false, {
                                            fileName: "[project]/components/members/MemberModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        member.pledgeClass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-secondary/60 text-sm",
                                            children: member.pledgeClass
                                        }, void 0, false, {
                                            fileName: "[project]/components/members/MemberModal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        member.linkedin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: member.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 mt-4 text-accent hover:text-accent-light transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/members/MemberModal.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/members/MemberModal.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "LinkedIn"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/members/MemberModal.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/members/MemberModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/members/MemberModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/members/MemberModal.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        member.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-6 border-t border-secondary/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-secondary/80 leading-relaxed",
                                children: member.description
                            }, void 0, false, {
                                fileName: "[project]/components/members/MemberModal.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/members/MemberModal.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/members/MemberModal.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/members/MemberModal.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/members/MemberModal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(MemberModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = MemberModal;
var _c;
__turbopack_context__.k.register(_c, "MemberModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/members/ActiveMembers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActiveMembers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$members$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/members.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$members$2f$MemberModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/members/MemberModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const membersData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$members$2e$json__$28$json$29$__["default"];
const activeMembers = membersData.filter((member)=>!member.isAlumni);
// Function to sort pledge classes (Fall 2022, Spring 2023, Fall 2023, Spring 2024, etc.)
// Spring comes after Fall of the previous year chronologically
function sortPledgeClasses(classes) {
    return classes.sort((a, b)=>{
        const parsePledgeClass = (pc)=>{
            const regex = /(Fall|Spring)\s+(\d{4})/;
            const match = regex.exec(pc);
            if (!match) return {
                sortValue: 0
            };
            const season = match[1];
            const year = Number.parseInt(match[2], 10);
            // Convert to sortable value:
            // Fall 2022 = 2022 * 2 = 4044
            // Spring 2023 = 2023 * 2 - 1 = 4045 (comes after Fall 2022)
            // Fall 2023 = 2023 * 2 = 4046 (comes after Spring 2023)
            // Spring 2024 = 2024 * 2 - 1 = 4047 (comes after Fall 2023)
            const sortValue = season === "Fall" ? year * 2 : year * 2 - 1;
            return {
                sortValue
            };
        };
        const aParsed = parsePledgeClass(a);
        const bParsed = parsePledgeClass(b);
        return aParsed.sortValue - bParsed.sortValue;
    });
}
// Group members by pledge class
const membersByPledgeClass = activeMembers.reduce((acc, member)=>{
    if (!member.pledgeClass) return acc;
    if (!acc[member.pledgeClass]) {
        acc[member.pledgeClass] = [];
    }
    acc[member.pledgeClass].push(member);
    return acc;
}, {});
// Get sorted pledge classes
const sortedPledgeClasses = sortPledgeClasses(Object.keys(membersByPledgeClass));
function ActiveMembers() {
    _s();
    const [selectedMember, setSelectedMember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMemberClick = (member)=>{
        setSelectedMember(member);
        setIsModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
        setSelectedMember(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 md:py-24 bg-primary-light/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "ACTIVE MEMBERS",
                            subtitle: "The brothers who embody our values every day"
                        }, void 0, false, {
                            fileName: "[project]/components/members/ActiveMembers.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        sortedPledgeClasses.map((pledgeClass)=>{
                            const membersInClass = membersByPledgeClass[pledgeClass];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: pledgeClass
                                    }, void 0, false, {
                                        fileName: "[project]/components/members/ActiveMembers.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4",
                                        children: membersInClass.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-left cursor-pointer w-full",
                                                onClick: ()=>handleMemberClick(member),
                                                "aria-label": `View ${member.name}'s profile`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative aspect-square overflow-hidden rounded-xl bg-primary-light border border-secondary/10 transition-all duration-300 hover:border-accent/30",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: member.photo,
                                                            alt: member.name,
                                                            fill: true,
                                                            className: "object-cover",
                                                            unoptimized: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/members/ActiveMembers.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/members/ActiveMembers.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-secondary/70 text-xs text-center truncate",
                                                        children: member.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/members/ActiveMembers.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, member.id, true, {
                                                fileName: "[project]/components/members/ActiveMembers.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/members/ActiveMembers.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, pledgeClass, true, {
                                fileName: "[project]/components/members/ActiveMembers.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/members/ActiveMembers.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/members/ActiveMembers.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$members$2f$MemberModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                member: selectedMember,
                isOpen: isModalOpen,
                onClose: handleCloseModal
            }, void 0, false, {
                fileName: "[project]/components/members/ActiveMembers.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ActiveMembers, "84wmQFynSRYgnjLOF8/UeD1da3c=");
_c = ActiveMembers;
var _c;
__turbopack_context__.k.register(_c, "ActiveMembers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7af6ed25._.js.map