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
"[project]/components/careers/Testimonials.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const testimonials = [
    {
        id: "1",
        name: "John Smith",
        picture: "/images/placeholder.jpg",
        company: "Goldman Sachs",
        review: "AZ13 gave me the technical foundation and network I needed to land my dream IB role. The mock interviews were invaluable."
    },
    {
        id: "2",
        name: "Sarah Johnson",
        picture: "/images/placeholder.jpg",
        company: "McKinsey & Company",
        review: "The consulting track pushed me to think critically and structure my approach. I felt fully prepared walking into my case interviews."
    },
    {
        id: "3",
        name: "Michael Chen",
        picture: "/images/placeholder.jpg",
        company: "Google",
        review: "AZCS helped me go from struggling with Leetcode to confidently solving problems in interviews. The mentorship was top-notch."
    },
    {
        id: "4",
        name: "Emily Davis",
        picture: "/images/placeholder.jpg",
        company: "Meta",
        review: "The PM track taught me how to think about products holistically. The mock PM interviews and case studies were incredibly helpful."
    },
    {
        id: "5",
        name: "David Kim",
        picture: "/images/placeholder.jpg",
        company: "Nike",
        review: "AZ Marketing gave me real portfolio pieces and the creative confidence to pursue brand strategy at a top company."
    },
    {
        id: "6",
        name: "Jessica Lee",
        picture: "/images/placeholder.jpg",
        company: "JP Morgan",
        review: "The alumni network alone is worth it. I got connected with brothers at every bank on the street who helped me through recruiting."
    }
];
function Testimonials() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const totalSlides = testimonials.length;
    const nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev)=>(prev + 1) % totalSlides);
        setTimeout(()=>setIsTransitioning(false), 500);
    }, [
        isTransitioning,
        totalSlides
    ]);
    const prevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev)=>(prev - 1 + totalSlides) % totalSlides);
        setTimeout(()=>setIsTransitioning(false), 500);
    }, [
        isTransitioning,
        totalSlides
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(nextSlide, 5000);
        return ()=>clearInterval(interval);
    }, [
        nextSlide
    ]);
    const getVisibleTestimonials = ()=>{
        const visible = [];
        for(let i = 0; i < 3; i++){
            visible.push(testimonials[(currentIndex + i) % totalSlides]);
        }
        return visible;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-primary-light/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-3xl md:text-4xl font-bold tracking-wide text-secondary-light mb-4",
                            children: "WHAT OUR MEMBERS SAY"
                        }, void 0, false, {
                            fileName: "[project]/components/careers/Testimonials.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-secondary/60 max-w-2xl mx-auto",
                            children: "Hear from brothers who've leveraged AZ Groups to launch their careers"
                        }, void 0, false, {
                            fileName: "[project]/components/careers/Testimonials.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/careers/Testimonials.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prevSlide,
                            className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-primary-light border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent/30 transition-all",
                            "aria-label": "Previous testimonial",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/careers/Testimonials.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/careers/Testimonials.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/careers/Testimonials.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: nextSlide,
                            className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-primary-light border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent/30 transition-all",
                            "aria-label": "Next testimonial",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/components/careers/Testimonials.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/careers/Testimonials.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/careers/Testimonials.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 px-8",
                            children: getVisibleTestimonials().map((testimonial)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-primary-light border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-accent/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-14 h-14 shrink-0 rounded-full overflow-hidden bg-accent/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: testimonial.picture,
                                                        alt: testimonial.name,
                                                        fill: true,
                                                        className: "object-cover",
                                                        unoptimized: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/careers/Testimonials.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/careers/Testimonials.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-display text-base font-semibold text-secondary-light",
                                                            children: testimonial.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/careers/Testimonials.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-accent text-sm",
                                                            children: testimonial.company
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/careers/Testimonials.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/careers/Testimonials.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/careers/Testimonials.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-secondary/60 text-sm leading-relaxed",
                                            children: [
                                                "“",
                                                testimonial.review,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/careers/Testimonials.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, testimonial.id, true, {
                                    fileName: "[project]/components/careers/Testimonials.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/careers/Testimonials.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-2 mt-8",
                            children: testimonials.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!isTransitioning) {
                                            setIsTransitioning(true);
                                            setCurrentIndex(index);
                                            setTimeout(()=>setIsTransitioning(false), 500);
                                        }
                                    },
                                    className: `w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-accent w-6" : "bg-secondary/30 hover:bg-secondary/50"}`,
                                    "aria-label": `Go to testimonial ${index + 1}`
                                }, index, false, {
                                    fileName: "[project]/components/careers/Testimonials.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/careers/Testimonials.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/careers/Testimonials.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/careers/Testimonials.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/careers/Testimonials.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_9de4548b._.js.map