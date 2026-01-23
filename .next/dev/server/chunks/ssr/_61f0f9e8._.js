module.exports = [
"[project]/data/photos.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"1","src":"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=800&fit=crop","caption":"Fall Retreat 2025","size":"large"},{"id":"2","src":"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop","caption":"Networking Night","size":"small"},{"id":"3","src":"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop","caption":"Annual Formal","size":"medium"},{"id":"4","src":"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop","caption":"AZ Group Meeting","size":"small"},{"id":"5","src":"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop","caption":"Professional Workshop","size":"medium"},{"id":"6","src":"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&fit=crop","caption":"Brotherhood Bonding","size":"large"},{"id":"7","src":"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop","caption":"Coffee Chats","size":"small"},{"id":"8","src":"https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=400&fit=crop","caption":"Guest Speaker Event","size":"small"},{"id":"9","src":"https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop","caption":"Community Service","size":"medium"},{"id":"10","src":"https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop","caption":"New Member Night","size":"small"},{"id":"11","src":"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&h=400&fit=crop","caption":"Case Competition","size":"small"},{"id":"12","src":"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=800&fit=crop","caption":"Spring Rush 2025","size":"large"},{"id":"13","src":"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop","caption":"Alumni Panel","size":"medium"},{"id":"14","src":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop","caption":"Study Session","size":"small"},{"id":"15","src":"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop","caption":"Mentorship Meeting","size":"small"}]);}),
"[project]/components/members/PhotoGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/photos.json (json)");
'use client';
;
;
;
;
const photosData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$json__$28$json$29$__["default"];
function PhotoGallery() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Auto-advance every 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>(prev + 1) % photosData.length);
        }, 3000);
        return ()=>clearInterval(interval);
    }, []);
    const goToSlide = (index)=>{
        setCurrentIndex(index);
    };
    const goToPrevious = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + photosData.length) % photosData.length);
    };
    const goToNext = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % photosData.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full aspect-video rounded-2xl overflow-hidden bg-primary-light",
                        children: photosData.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: photo.src,
                                        alt: photo.caption,
                                        fill: true,
                                        className: "object-cover",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/members/PhotoGallery.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white font-medium text-lg",
                                            children: photo.caption
                                        }, void 0, false, {
                                            fileName: "[project]/components/members/PhotoGallery.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/members/PhotoGallery.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, photo.id, true, {
                                fileName: "[project]/components/members/PhotoGallery.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/members/PhotoGallery.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevious,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10",
                        "aria-label": "Previous image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/components/members/PhotoGallery.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/members/PhotoGallery.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/members/PhotoGallery.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNext,
                        className: "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10",
                        "aria-label": "Next image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/components/members/PhotoGallery.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/members/PhotoGallery.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/members/PhotoGallery.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10",
                        children: photosData.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(index),
                                className: `w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`,
                                "aria-label": `Go to slide ${index + 1}`
                            }, photo.id, false, {
                                fileName: "[project]/components/members/PhotoGallery.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/members/PhotoGallery.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/members/PhotoGallery.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/members/PhotoGallery.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/members/PhotoGallery.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_61f0f9e8._.js.map