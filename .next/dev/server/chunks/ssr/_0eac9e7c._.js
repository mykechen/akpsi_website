module.exports = [
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

//# sourceMappingURL=_0eac9e7c._.js.map