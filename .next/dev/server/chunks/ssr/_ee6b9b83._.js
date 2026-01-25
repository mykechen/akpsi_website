module.exports = [
"[project]/components/ui/CloudBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CloudBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
"use client";
;
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
    const scale = isMobile ? MOBILE_SCALE : isTablet ? TABLET_SCALE : 1;
    const cloudSize = config.size * scale;
    const blur = isMobile ? BLUR_MOBILE : BLUR_DESKTOP;
    // Parallax transform: map mouse spring values to cloud offset
    const parallaxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(mouseX, (v)=>reducedMotion ? 0 : Math.max(-MAX_PARALLAX_OFFSET, Math.min(MAX_PARALLAX_OFFSET, v * config.parallaxMultiplier)));
    const parallaxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(mouseY, (v)=>reducedMotion ? 0 : Math.max(-MAX_PARALLAX_OFFSET, Math.min(MAX_PARALLAX_OFFSET, v * config.parallaxMultiplier)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
function CloudBackground() {
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTablet, setIsTablet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Raw mouse position as motion values
    const mouseXRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseYRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    // Spring-smoothed mouse for natural following
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseXRaw, {
        stiffness: 50,
        damping: 30
    });
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseYRaw, {
        stiffness: 50,
        damping: 30
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check prefers-reduced-motion
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(motionQuery.matches);
        const handleMotionChange = (e)=>setReducedMotion(e.matches);
        motionQuery.addEventListener("change", handleMotionChange);
        // Responsive breakpoints
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 640);
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        // Mouse tracking: normalize to -1..1 range centered on viewport
        const handleMouseMove = (e)=>{
            const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2 * MAX_PARALLAX_OFFSET;
            const normalizedY = (e.clientY / window.innerHeight - 0.5) * 2 * MAX_PARALLAX_OFFSET;
            mouseXRaw.set(normalizedX);
            mouseYRaw.set(normalizedY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            motionQuery.removeEventListener("change", handleMotionChange);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [
        mouseXRaw,
        mouseYRaw
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-[1] overflow-hidden pointer-events-none",
        "aria-hidden": "true",
        children: clouds.map((cloud)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cloud, {
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
}),
"[project]/data/photos.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"1","src":"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=800&fit=crop","caption":"Fall Retreat 2025","size":"large"},{"id":"2","src":"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop","caption":"Networking Night","size":"small"},{"id":"3","src":"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop","caption":"Annual Formal","size":"medium"},{"id":"4","src":"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop","caption":"AZ Group Meeting","size":"small"},{"id":"5","src":"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop","caption":"Professional Workshop","size":"medium"},{"id":"6","src":"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&fit=crop","caption":"Brotherhood Bonding","size":"large"},{"id":"7","src":"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop","caption":"Coffee Chats","size":"small"},{"id":"8","src":"https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=400&fit=crop","caption":"Guest Speaker Event","size":"small"},{"id":"9","src":"https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop","caption":"Community Service","size":"medium"},{"id":"10","src":"https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop","caption":"New Member Night","size":"small"},{"id":"11","src":"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&h=400&fit=crop","caption":"Case Competition","size":"small"},{"id":"12","src":"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=800&fit=crop","caption":"Spring Rush 2025","size":"large"},{"id":"13","src":"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop","caption":"Alumni Panel","size":"medium"},{"id":"14","src":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop","caption":"Study Session","size":"small"},{"id":"15","src":"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop","caption":"Mentorship Meeting","size":"small"}]);}),
"[project]/components/home/BentoPhotoGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BentoPhotoGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/photos.json (json)");
"use client";
;
;
;
const photosData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$json__$28$json$29$__["default"];
function BentoPhotoGrid() {
    // Split photos into two rows
    const topRowPhotos = photosData.slice(0, Math.ceil(photosData.length / 2));
    const bottomRowPhotos = photosData.slice(Math.ceil(photosData.length / 2));
    // Duplicate photos for seamless infinite scroll
    const topRowDuplicated = [
        ...topRowPhotos,
        ...topRowPhotos
    ];
    const bottomRowDuplicated = [
        ...bottomRowPhotos,
        ...bottomRowPhotos
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-primary-light/30 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-hidden mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex animate-scroll-right",
                    children: topRowDuplicated.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-64 h-48 shrink-0 mx-2 rounded-xl overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: photo.src,
                                alt: photo.caption,
                                fill: true,
                                className: "object-cover",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this)
                        }, `top-${photo.id}-${index}`, false, {
                            fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex animate-scroll-left",
                    children: bottomRowDuplicated.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-64 h-48 shrink-0 mx-2 rounded-xl overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: photo.src,
                                alt: photo.caption,
                                fill: true,
                                className: "object-cover",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this)
                        }, `bottom-${photo.id}-${index}`, false, {
                            fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/BentoPhotoGrid.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_ee6b9b83._.js.map