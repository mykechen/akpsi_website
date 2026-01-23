(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/companies.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"1","name":"Goldman Sachs","logo":"/images/landing/companies/goldman.png"},{"id":"2","name":"McKinsey & Company","logo":"/images/landing/companies/mckinsey.png"},{"id":"3","name":"Google","logo":"/images/landing/companies/google.png"},{"id":"4","name":"Bank of America","logo":"/images/landing/companies/bofa.png"},{"id":"5","name":"Boston Consulting Group","logo":"/images/landing/companies/bcg.png"},{"id":"6","name":"JPMorgan Chase","logo":"/images/landing/companies/jpm.png"},{"id":"7","name":"Deloitte","logo":"/images/landing/companies/deloitte.png"},{"id":"8","name":"Bloomberg","logo":"/images/landing/companies/bloomberg.png"},{"id":"9","name":"Amazon","logo":"/images/landing/companies/amazon.png"},{"id":"10","name":"Bain & Company","logo":"/images/landing/companies/bain.png"},{"id":"11","name":"Apple","logo":"/images/landing/companies/apple.png"},{"id":"12","name":"SpaceX","logo":"/images/landing/companies/spacex.png"},{"id":"13","name":"KPMG","logo":"/images/landing/companies/kpmg.png"},{"id":"14","name":"EY","logo":"/images/landing/companies/ey.png"},{"id":"15","name":"Citibank","logo":"/images/landing/companies/citibank.png"},{"id":"16","name":"Evercore","logo":"/images/landing/companies/evercore.png"},{"id":"17","name":"Lazard","logo":"/images/landing/companies/lazard.png"}]);}),
"[project]/components/home/CompanyCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$companies$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/companies.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const companyData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$companies$2e$json__$28$json$29$__["default"];
function CompanyCarousel() {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompanyCarousel.useEffect": ()=>{
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return;
            let animationId;
            let scrollPosition = 0;
            const scrollSpeed = 0.5;
            const scroll = {
                "CompanyCarousel.useEffect.scroll": ()=>{
                    if (!isPaused && scrollContainer) {
                        scrollPosition += scrollSpeed;
                        // Reset position when we've scrolled halfway (since we duplicate the content)
                        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                            scrollPosition = 0;
                        }
                        scrollContainer.scrollLeft = scrollPosition;
                    }
                    animationId = requestAnimationFrame(scroll);
                }
            }["CompanyCarousel.useEffect.scroll"];
            animationId = requestAnimationFrame(scroll);
            return ({
                "CompanyCarousel.useEffect": ()=>cancelAnimationFrame(animationId)
            })["CompanyCarousel.useEffect"];
        }
    }["CompanyCarousel.useEffect"], [
        isPaused
    ]);
    // Duplicate companies for infinite scroll effect
    const duplicatedCompanies = [
        ...companyData,
        ...companyData
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 border-y border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-secondary/50 text-sm uppercase tracking-widest",
                    children: "Where Our Members Work"
                }, void 0, false, {
                    fileName: "[project]/components/home/CompanyCarousel.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/CompanyCarousel.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "overflow-hidden cursor-pointer",
                onMouseEnter: ()=>setIsPaused(true),
                onMouseLeave: ()=>setIsPaused(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-12 items-center",
                    children: duplicatedCompanies.map((company, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 w-40 h-16 flex items-center justify-center opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: company.logo,
                                alt: company.name,
                                width: 160,
                                height: 64,
                                className: "max-w-full max-h-full object-contain",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/components/home/CompanyCarousel.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        }, `${company.id}-${index}`, false, {
                            fileName: "[project]/components/home/CompanyCarousel.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/CompanyCarousel.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/CompanyCarousel.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/CompanyCarousel.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(CompanyCarousel, "DvHvR8Nu4H3FGZIGLs6spxLGWKY=");
_c = CompanyCarousel;
var _c;
__turbopack_context__.k.register(_c, "CompanyCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/photos.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"1","src":"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=800&fit=crop","caption":"Fall Retreat 2025","size":"large"},{"id":"2","src":"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop","caption":"Networking Night","size":"small"},{"id":"3","src":"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop","caption":"Annual Formal","size":"medium"},{"id":"4","src":"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop","caption":"AZ Group Meeting","size":"small"},{"id":"5","src":"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop","caption":"Professional Workshop","size":"medium"},{"id":"6","src":"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&fit=crop","caption":"Brotherhood Bonding","size":"large"},{"id":"7","src":"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop","caption":"Coffee Chats","size":"small"},{"id":"8","src":"https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=400&fit=crop","caption":"Guest Speaker Event","size":"small"},{"id":"9","src":"https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop","caption":"Community Service","size":"medium"},{"id":"10","src":"https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop","caption":"New Member Night","size":"small"},{"id":"11","src":"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&h=400&fit=crop","caption":"Case Competition","size":"small"},{"id":"12","src":"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=800&fit=crop","caption":"Spring Rush 2025","size":"large"},{"id":"13","src":"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop","caption":"Alumni Panel","size":"medium"},{"id":"14","src":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop","caption":"Study Session","size":"small"},{"id":"15","src":"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop","caption":"Mentorship Meeting","size":"small"}]);}),
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
"[project]/components/home/BentoPhotoGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BentoPhotoGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/photos.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const photosData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$json__$28$json$29$__["default"];
// Function to determine grid classes based on size
const getGridClasses = (size, index)=>{
    if (size === 'large') {
        return 'col-span-2 row-span-2';
    }
    if (size === 'medium') {
        return index % 3 === 0 ? 'col-span-2 row-span-1' : 'col-span-1 row-span-2';
    }
    return 'col-span-1 row-span-1';
};
function BentoPhotoGrid() {
    // Use first 9 photos for the grid
    const gridPhotos = photosData.slice(0, 9);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-primary-light/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Life at Alpha Zeta",
                    subtitle: "A glimpse into our brotherhood, events, and memories"
                }, void 0, false, {
                    fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4",
                    children: gridPhotos.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `group relative overflow-hidden rounded-2xl cursor-pointer ${getGridClasses(photo.size, index)}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: photo.src,
                                    alt: photo.caption,
                                    fill: true,
                                    className: "object-cover transition-transform duration-500 group-hover:scale-110",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-medium text-sm",
                                        children: photo.caption
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, photo.id, true, {
                            fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/BentoPhotoGrid.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/BentoPhotoGrid.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/BentoPhotoGrid.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = BentoPhotoGrid;
var _c;
__turbopack_context__.k.register(_c, "BentoPhotoGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a88b52e8._.js.map