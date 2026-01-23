module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/ui/Button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function Button({ children, href, variant = 'primary', size = 'md', className = '', onClick, type = 'button' }) {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full';
    const variants = {
        primary: 'bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5',
        secondary: 'bg-secondary-light text-primary hover:bg-secondary hover:-translate-y-0.5',
        outline: 'border-2 border-secondary/30 text-secondary hover:border-accent hover:text-accent'
    };
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base'
    };
    const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: styles,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: styles,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-rsc] (ecmascript)");
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"
            }, void 0, false, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-[6rem] sm:text-[7.5rem] md:text-[9rem] lg:text-[12rem] font-bold tracking-wide text-secondary-light mb-6",
                        children: "ALPHA ZETA"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl md:text-3xl font-semibold text-secondary/70 max-w-2xl mx-auto mb-4",
                        children: "USC's Premier Business Society"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/recruitment",
                            variant: "primary",
                            size: "lg",
                            children: "Apply for Spring 2026"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm uppercase tracking-widest",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-12 bg-gradient-to-b from-secondary/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Hero.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/About.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-3xl md:text-4xl font-bold tracking-wide text-secondary-light mb-6",
                        children: "WHO WE ARE"
                    }, void 0, false, {
                        fileName: "[project]/components/home/About.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-xl text-secondary/70 leading-relaxed",
                        children: "Alpha Zeta is USC’s premier co-ed business society. Since our founding in 1922, we’ve built a thriving community of students across 15+ different majors and established an extensive alumni network, paving the way for future leaders."
                    }, void 0, false, {
                        fileName: "[project]/components/home/About.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/home/About.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-xl text-secondary/70 leading-relaxed",
                        children: "At Alpha Zeta, we believe in the power of collective growth. We strive to empower our brothers to excel in their careers, foster lifelong friendships, and advance in every aspect of their lives."
                    }, void 0, false, {
                        fileName: "[project]/components/home/About.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/About.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/About.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/About.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/companies.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"1","name":"Goldman Sachs","logo":"/images/landing/companies/goldman.png"},{"id":"2","name":"McKinsey & Company","logo":"/images/landing/companies/mckinsey.png"},{"id":"3","name":"Google","logo":"/images/landing/companies/google.png"},{"id":"4","name":"Bank of America","logo":"/images/landing/companies/bofa.png"},{"id":"5","name":"Boston Consulting Group","logo":"/images/landing/companies/bcg.png"},{"id":"6","name":"JPMorgan Chase","logo":"/images/landing/companies/jpm.png"},{"id":"7","name":"Deloitte","logo":"/images/landing/companies/deloitte.png"},{"id":"8","name":"Bloomberg","logo":"/images/landing/companies/bloomberg.png"},{"id":"9","name":"Amazon","logo":"/images/landing/companies/amazon.png"},{"id":"10","name":"Bain & Company","logo":"/images/landing/companies/bain.png"},{"id":"11","name":"Apple","logo":"/images/landing/companies/apple.png"},{"id":"12","name":"SpaceX","logo":"/images/landing/companies/spacex.png"},{"id":"13","name":"KPMG","logo":"/images/landing/companies/kpmg.png"},{"id":"14","name":"EY","logo":"/images/landing/companies/ey.png"},{"id":"15","name":"Evercore","logo":"/images/landing/companies/evercore.png"},{"id":"16","name":"Lazard","logo":"/images/landing/companies/lazard.png"},{"id":"17","name":"Meta","logo":"/images/landing/companies/meta.png"},{"id":"18","name":"PwC","logo":"/images/landing/companies/pwc.png"},{"id":"19","name":"Roblox","logo":"/images/landing/companies/roblox.png"},{"id":"20","name":"Spotify","logo":"/images/landing/companies/spotify.png"},{"id":"21","name":"Warner Bros","logo":"/images/landing/companies/warnerbros.svg"}]);}),
"[project]/components/home/CompanyCarousel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$companies$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/companies.json (json)");
;
;
;
const companyData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$companies$2e$json__$28$json$29$__["default"];
function CompanyCarousel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 border-y border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-secondary/50 text-sm uppercase tracking-widest",
                    children: "WHERE WE ARE NOW"
                }, void 0, false, {
                    fileName: "[project]/components/home/CompanyCarousel.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/CompanyCarousel.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                        children: companyData.map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center h-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: company.logo,
                                    alt: company.name,
                                    width: 120,
                                    height: 40,
                                    className: "h-10 w-auto object-contain object-center",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/components/home/CompanyCarousel.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this)
                            }, company.id, false, {
                                fileName: "[project]/components/home/CompanyCarousel.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/CompanyCarousel.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-secondary/50 text-sm mt-8",
                        children: "And more..."
                    }, void 0, false, {
                        fileName: "[project]/components/home/CompanyCarousel.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/CompanyCarousel.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/CompanyCarousel.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/values.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"1","title":"Brotherhood","description":"Fostering lifelong connections and support among members.","icon":"users"},{"id":"2","title":"Integrity","description":"Upholding the highest ethical standards in all endeavors.","icon":"shield"},{"id":"3","title":"Knowledge","description":"Cultivating intellectual growth and professional development.","icon":"star"},{"id":"4","title":"Unity","description":"Promoting collaboration and a shared sense of purpose.","icon":"handshake"},{"id":"5","title":"Service","description":"Dedicating time and resources to positively impact the community.","icon":"heart"}]);}),
"[project]/components/ui/SectionHeader.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SectionHeader({ title, subtitle, centered = true, light = false, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${centered ? 'text-center' : ''} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide ${light ? 'text-white' : 'text-secondary-light'}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeader.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/components/home/MissionValues.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MissionValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$values$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/values.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader.tsx [app-rsc] (ecmascript)");
;
;
;
const valuesData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$values$2e$json__$28$json$29$__["default"];
const iconMap = {
    users: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-8 h-8",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        }, void 0, false, {
            fileName: "[project]/components/home/MissionValues.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/MissionValues.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    shield: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-8 h-8",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        }, void 0, false, {
            fileName: "[project]/components/home/MissionValues.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/MissionValues.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    star: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-8 h-8",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        }, void 0, false, {
            fileName: "[project]/components/home/MissionValues.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/MissionValues.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    handshake: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-8 h-8",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        }, void 0, false, {
            fileName: "[project]/components/home/MissionValues.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/MissionValues.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    heart: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-8 h-8",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }, void 0, false, {
            fileName: "[project]/components/home/MissionValues.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/MissionValues.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
function MissionValues() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: "Our Values",
                    subtitle: "The principles that guide everything we do at Alpha Zeta"
                }, void 0, false, {
                    fileName: "[project]/components/home/MissionValues.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6",
                    children: valuesData.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group p-6 bg-primary-light border border-secondary/10 rounded-2xl transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
                            style: {
                                animationDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 flex items-center justify-center bg-accent/10 rounded-xl text-accent mb-4 group-hover:bg-accent/20 transition-colors",
                                    children: iconMap[value.icon] || iconMap.star
                                }, void 0, false, {
                                    fileName: "[project]/components/home/MissionValues.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl font-semibold text-secondary-light mb-2",
                                    children: value.title
                                }, void 0, false, {
                                    fileName: "[project]/components/home/MissionValues.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-secondary/60 text-sm leading-relaxed",
                                    children: value.description
                                }, void 0, false, {
                                    fileName: "[project]/components/home/MissionValues.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, value.id, true, {
                            fileName: "[project]/components/home/MissionValues.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/MissionValues.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/MissionValues.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/MissionValues.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/members.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"1\",\"name\":\"Amelie Nah\",\"major\":\"Biopharmaceutical Sciences\",\"photo\":\"/images/members/amelie.png\",\"linkedin\":\"https://www.linkedin.com/in/amelienah\",\"pledgeClass\":\"Spring 2024\",\"isExec\":true,\"role\":\"President\",\"isAlumni\":false},{\"id\":\"2\",\"name\":\"Isabella Martinez\",\"major\":\"Business Administration\",\"photo\":\"/images/members/bella.png\",\"linkedin\":\"https://www.linkedin.com/in/isabellaamartinez/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":true,\"role\":\"Vice President of Professional Development\",\"isAlumni\":false},{\"id\":\"3\",\"name\":\"Selina Ho\",\"major\":\"Business Administration\",\"photo\":\"/images/members/selina.png\",\"linkedin\":\"https://www.linkedin.com/in/selina-ho\",\"pledgeClass\":\"Fall 2024\",\"isExec\":true,\"role\":\"Co-Vice President of Public Relations\",\"isAlumni\":false},{\"id\":\"4\",\"name\":\"Vanessa Doan\",\"major\":\"Business Administration\",\"photo\":\"/images/members/vanessa.png\",\"linkedin\":\"https://www.linkedin.com/in/maivan-doan\",\"pledgeClass\":\"Fall 2024\",\"isExec\":true,\"role\":\"Co-Vice President of Public Relations\",\"isAlumni\":false},{\"id\":\"5\",\"name\":\"Sahil Harjani\",\"major\":\"Economics & Data Science\",\"photo\":\"/images/members/sahil.png\",\"linkedin\":\"https://www.linkedin.com/in/sahil-harjani-6b1632238\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Vice President of Finance\",\"isAlumni\":false},{\"id\":\"6\",\"name\":\"Sunny Wang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/sunny.png\",\"linkedin\":\"https://www.linkedin.com/in/sunny-r-wang\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Secretary\",\"isAlumni\":false},{\"id\":\"7\",\"name\":\"Jason Liu\",\"major\":\"Business Administration\",\"photo\":\"/images/members/jasonliu.png\",\"linkedin\":\"https://www.linkedin.com/in/jasonpaulliu\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Co-Vice President of Social Affairs\",\"isAlumni\":false},{\"id\":\"8\",\"name\":\"Jadon Leung\",\"major\":\"Computational and Applied Mathematics\",\"photo\":\"/images/members/jadon.png\",\"linkedin\":\"https://www.linkedin.com/in/jadon-leung/\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Co-Vice President of Social Affairs\",\"isAlumni\":false},{\"id\":\"9\",\"name\":\"Myke Chen\",\"major\":\"Computer Science and Business Administration\",\"photo\":\"/images/members/myke.png\",\"linkedin\":\"https://www.linkedin.com/in/myke-angelo-chen/\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Vice President of Administration\",\"isAlumni\":false},{\"id\":\"10\",\"name\":\"Kelvin Nguyen\",\"major\":\"Business Administration\",\"photo\":\"/images/members/kelvin.png\",\"linkedin\":\"https://www.linkedin.com/in/kelvindn\",\"pledgeClass\":\"Spring 2025\",\"isExec\":true,\"role\":\"Master of Rituals\",\"isAlumni\":false},{\"id\":\"11\",\"name\":\"Charlie Huang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/charlie.png\",\"linkedin\":\"http://linkedin.com/in/charleshuang2004\",\"pledgeClass\":\"Fall 2022\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"12\",\"name\":\"Anya Yang\",\"major\":\"Business Administration & Artificial Intelligence Applications\",\"photo\":\"/images/members/anya.png\",\"linkedin\":\"https://www.linkedin.com/in/anyayang\",\"pledgeClass\":\"Fall 2022\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"13\",\"name\":\"Elena Mao\",\"major\":\"Business Administration & Accounting\",\"photo\":\"/images/members/elena.png\",\"linkedin\":\"https://www.linkedin.com/in/elenamao\",\"pledgeClass\":\"Fall 2022\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"14\",\"name\":\"Julia Purwadi\",\"major\":\"Business Administration & Media Economics and Entrepreneurship\",\"photo\":\"/images/members/julia.png\",\"linkedin\":\"https://www.linkedin.com/in/juliapurwadi/\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"15\",\"name\":\"Anson Chu\",\"major\":\"Political Economy\",\"photo\":\"/images/members/anson.png\",\"linkedin\":\"https://www.linkedin.com/in/ansonsch/\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"16\",\"name\":\"Yuna Jang\",\"major\":\"B.F.A Design\",\"photo\":\"/images/members/yuna.png\",\"linkedin\":\"https://www.linkedin.com/in/yunajang/\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"17\",\"name\":\"Austin Lin\",\"major\":\"Economics & Data Science\",\"photo\":\"/images/members/austin.png\",\"linkedin\":\"https://www.linkedin.com/in/austin-lin0405/\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"18\",\"name\":\"Lilian Nguyen\",\"major\":\"Business Administration\",\"photo\":\"/images/members/lilian.png\",\"linkedin\":\"http://linkedin.com/in/lilian-t-nguyen\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"19\",\"name\":\"Lorena Liu\",\"major\":\"Business Administration\",\"photo\":\"/images/members/lorena.png\",\"linkedin\":\"http://www.linkedin.com/in/lorenaliu04\",\"pledgeClass\":\"Spring 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"20\",\"name\":\"Jacob Granados\",\"major\":\"Business Administration\",\"photo\":\"/images/members/jacob.png\",\"linkedin\":\"https://www.linkedin.com/in/jacobgranados/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"21\",\"name\":\"Aaditya Surya\",\"major\":\"Computer Science and Business Administration\",\"photo\":\"/images/members/aaditya.png\",\"linkedin\":\"https://www.linkedin.com/in/aadityasurya/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"22\",\"name\":\"Julie Wan\",\"major\":\"Business Administration\",\"photo\":\"/images/members/julie.png\",\"linkedin\":\"https://www.linkedin.com/in/julie-wan-usc/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"23\",\"name\":\"Ella Kang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/ella.png\",\"linkedin\":\"https://www.linkedin.com/in/ella-kang/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"24\",\"name\":\"Fiona Ko\",\"major\":\"Business Administration & Human Biology\",\"photo\":\"/images/members/fiona.png\",\"linkedin\":\"https://www.linkedin.com/in/fionako923\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"25\",\"name\":\"Brandon Chung\",\"major\":\"Business Administration\",\"photo\":\"/images/members/brandon.png\",\"linkedin\":\"http://www.linkedin.com/in/-brandon-chung-\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"26\",\"name\":\"Justin Xiang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/justin.png\",\"linkedin\":\"https://www.linkedin.com/in/justin-xiang12/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"27\",\"name\":\"Eddie Wang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/eddie.png\",\"linkedin\":\"https://www.linkedin.com/in/edwardwngg\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"28\",\"name\":\"Jocelyn Tang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/jocelyn.png\",\"linkedin\":\"https://www.linkedin.com/in/jocelyntang45\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"29\",\"name\":\"Walker Blackwell\",\"major\":\"Business Administration and Theatre\",\"photo\":\"/images/members/walker.png\",\"linkedin\":\"https://www.linkedin.com/in/walker-blackwell/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"30\",\"name\":\"Aidan Han\",\"major\":\"Music Industry\",\"photo\":\"/images/members/aidan.png\",\"linkedin\":\"https://www.linkedin.com/in/aidanhan123\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"31\",\"name\":\"Esther Ji\",\"major\":\"Business Administration\",\"photo\":\"/images/members/esther.png\",\"linkedin\":\"https://www.linkedin.com/in/estherxrji/\",\"pledgeClass\":\"Fall 2023\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"32\",\"name\":\"Jason Zhang\",\"major\":\"Economics\",\"photo\":\"/images/members/jason.png\",\"linkedin\":\"https://www.linkedin.com/in/jczhang05/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"33\",\"name\":\"Nayeon Koo\",\"major\":\"Sociology & Data Science\",\"photo\":\"/images/members/nayeon.png\",\"linkedin\":\"www.linkedin.com/in/Nayeon-Koo\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"34\",\"name\":\"Claire Yang\",\"major\":\"Applied Mathematics\",\"photo\":\"/images/members/claire.png\",\"linkedin\":\"https://www.linkedin.com/in/claire-y-yang\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"35\",\"name\":\"Gloria Pan\",\"major\":\"Business Administration\",\"photo\":\"/images/members/gloria.png\",\"linkedin\":\"https://www.linkedin.com/in/gloriaapan/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"36\",\"name\":\"Evan Zhang\",\"major\":\"Business Administration\",\"photo\":\"/images/members/evan.png\",\"linkedin\":\"https://www.linkedin.com/in/evanzhang7\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"37\",\"name\":\"Daniel Yang\",\"major\":\"Artificial Intelligence for Business\",\"photo\":\"/images/members/daniel.png\",\"linkedin\":\"https://www.linkedin.com/in/danielyangdev/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"38\",\"name\":\"Shania Tang\",\"major\":\"Business Administration & Accounting\",\"photo\":\"/images/members/shania.png\",\"linkedin\":\"https://www.linkedin.com/in/shania-tang\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"39\",\"name\":\"Chris Feng\",\"major\":\"Business Administration\",\"photo\":\"/images/members/chris.png\",\"linkedin\":\"http://linkedin.com/in/christopher-feng0\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"40\",\"name\":\"Jason Byun\",\"major\":\"Physics & Computer Science\",\"photo\":\"/images/members/jasonb.png\",\"linkedin\":\"https://www.linkedin.com/in/jason-byun/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"41\",\"name\":\"Leena Van\",\"major\":\"Business Administration\",\"photo\":\"/images/members/leena.png\",\"linkedin\":\"https://www.linkedin.com/in/leena-van-03113225a/\",\"pledgeClass\":\"Spring 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"42\",\"name\":\"Leia Fisher\",\"major\":\"Economics\",\"photo\":\"/images/members/leia.png\",\"linkedin\":\"www.linkedin.com/in/leiafish/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"43\",\"name\":\"Bea Tan\",\"major\":\"Business Administration\",\"photo\":\"/images/members/bea.png\",\"linkedin\":\"https://www.linkedin.com/in/beaashleytan/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"44\",\"name\":\"Joshua Lomboy\",\"major\":\"Accounting and Finance\",\"photo\":\"/images/members/joshua.png\",\"linkedin\":\"www.LinkedIn.com/in/joshualomboy\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"45\",\"name\":\"Beomsoo Park\",\"major\":\"Business Administration\",\"photo\":\"/images/members/beomsoo.png\",\"linkedin\":\"https://www.linkedin.com/in/beomsoo-park/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"46\",\"name\":\"Andy Kim\",\"major\":\"Mathematics/Economics\",\"photo\":\"/images/members/andy.png\",\"linkedin\":\"www.linkedin.com/in/andyakim\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"47\",\"name\":\"Spencer Sun\",\"major\":\"Business Administration\",\"photo\":\"/images/members/spencer.png\",\"linkedin\":\"https://www.linkedin.com/in/spencersun15/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"48\",\"name\":\"Angela Ren\",\"major\":\"Business Administration\",\"photo\":\"/images/members/angela.png\",\"linkedin\":\"https://www.linkedin.com/in/angela-ren/\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"49\",\"name\":\"Joaquin Posada\",\"major\":\"Business Administration\",\"photo\":\"/images/members/joaquin.png\",\"linkedin\":\"www.linkedin.com/in/joaquin-posada-c\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"50\",\"name\":\"Jeffery Chae\",\"major\":\"Political Economy\",\"photo\":\"/images/members/jeffery.png\",\"linkedin\":\"www.linkedin.com/in/jefferychae\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"51\",\"name\":\"Lance Lai\",\"major\":\"Business Administration\",\"photo\":\"/images/members/lance.png\",\"linkedin\":\"https://www.linkedin.com/in/lance-laI-1428a8277\",\"pledgeClass\":\"Fall 2024\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"52\",\"name\":\"Ronan Donohue\",\"major\":\"AI for Business\",\"photo\":\"/images/members/ronan.png\",\"linkedin\":\"https://www.linkedin.com/in/ronandon\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"53\",\"name\":\"Hannah Lee\",\"major\":\"Business Administration\",\"photo\":\"/images/members/hannahe.png\",\"linkedin\":\"https://www.linkedin.com/in/hannah-lee-095192257/\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"54\",\"name\":\"Charles Tam\",\"major\":\"Business Administration\",\"photo\":\"/images/members/charles.png\",\"linkedin\":\"https://www.linkedin.com/in/charlestam35\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"55\",\"name\":\"Anita Cao\",\"major\":\"Business Administration\",\"photo\":\"/images/members/anita.png\",\"linkedin\":\"https://www.linkedin.com/in/anitacao/\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"56\",\"name\":\"Hannah Lee\",\"major\":\"Artificial Intelligence for Business\",\"photo\":\"/images/members/hannahy.png\",\"linkedin\":\"https://www.linkedin.com/in/hannahyujinlee\",\"pledgeClass\":\"Spring 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"57\",\"name\":\"Mia Lee\",\"major\":\"Business Administration\",\"photo\":\"/images/members/mia.png\",\"linkedin\":\"https://www.linkedin.com/in/mialee787\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"58\",\"name\":\"Dilen Kakar\",\"major\":\"Business Administration\",\"photo\":\"/images/members/dilen.png\",\"linkedin\":\"https://www.linkedin.com/in/dilenkakar\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"59\",\"name\":\"Andre Anggala\",\"major\":\"Business Administration\",\"photo\":\"/images/members/andre.png\",\"linkedin\":\"https://www.linkedin.com/in/andre-anggala/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"60\",\"name\":\"Iren Han\",\"major\":\"Business Administration\",\"photo\":\"/images/members/iren.png\",\"linkedin\":\"https://www.linkedin.com/in/irenhan/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"61\",\"name\":\"Jenny Jiang\",\"major\":\"Film and Television Production\",\"photo\":\"/images/members/jenny.png\",\"linkedin\":\"https://www.linkedin.com/in/jenny-jiang2/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"62\",\"name\":\"Pavan Nandhakumar\",\"major\":\"Economics and Data Science\",\"photo\":\"/images/members/pavan.png\",\"linkedin\":\"https://www.linkedin.com/in/pavannandhakumar\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"63\",\"name\":\"Puffo Danchaivijitr\",\"major\":\"Biochemistry\",\"photo\":\"/images/members/puffo.png\",\"linkedin\":\"https://www.linkedin.com/in/danchaivijitr-piyaluk\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"64\",\"name\":\"Ryan Anderson\",\"major\":\"Accounting\",\"photo\":\"/images/members/ryan.png\",\"linkedin\":\"https://www.linkedin.com/in/ryanaanderson\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"65\",\"name\":\"Joey Chen\",\"major\":\"Business Administration\",\"photo\":\"/images/members/joeychen.png\",\"linkedin\":\"https://www.linkedin.com/in/joey-leonardo-chen\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"66\",\"name\":\"Tommy Wickersham\",\"major\":\"Computer Science and Business Administration\",\"photo\":\"/images/members/tommy.png\",\"linkedin\":\"https://www.linkedin.com/in/tommy-wickersham/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"67\",\"name\":\"Rosabel Tan\",\"major\":\"Cognitive Science\",\"photo\":\"/images/members/rosabel.png\",\"linkedin\":\"https://www.linkedin.com/in/rosabeltan\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"68\",\"name\":\"Rohan Krishnan\",\"major\":\"Physics and Computer Science\",\"photo\":\"/images/members/rohan.png\",\"linkedin\":\"https://www.linkedin.com/in/rohan-krishnan-436076209/\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false},{\"id\":\"69\",\"name\":\"Winnie Gandawidjaja\",\"major\":\"Business Administration\",\"photo\":\"/images/members/winnie.png\",\"linkedin\":\"https://www.linkedin.com/in/winniegandawidjaja\",\"pledgeClass\":\"Fall 2025\",\"isExec\":false,\"isAlumni\":false}]"));}),
"[project]/components/home/ExecutiveBoard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExecutiveBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$members$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/members.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const membersData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$members$2e$json__$28$json$29$__["default"];
const execMembers = membersData.filter((member)=>member.isExec);
// Helper function to format pledge class (e.g., "Spring 2024" -> "S24", "Fall 2024" -> "F24")
function formatPledgeClass(pledgeClass) {
    const regex = /(Spring|Fall)\s+(\d{4})/;
    const match = regex.exec(pledgeClass);
    if (match) {
        const season = match[1].charAt(0) // S or F
        ;
        const year = match[2].slice(-2) // Last 2 digits
        ;
        return `${season}${year}`;
    }
    return pledgeClass;
}
function ExecutiveBoard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: "Executive Board",
                    subtitle: "Meet the leaders driving Alpha Zeta forward"
                }, void 0, false, {
                    fileName: "[project]/components/home/ExecutiveBoard.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: execMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 p-4 bg-primary-light rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-24 h-24 shrink-0 overflow-hidden rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: member.photo,
                                        alt: member.name,
                                        fill: true,
                                        className: "object-cover",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ExecutiveBoard.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ExecutiveBoard.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-center flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-xl font-bold text-secondary-light mb-1",
                                            children: member.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ExecutiveBoard.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-secondary/70 text-sm",
                                            children: [
                                                member.role,
                                                member.pledgeClass && `, ${formatPledgeClass(member.pledgeClass)}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/ExecutiveBoard.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/ExecutiveBoard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, member.id, true, {
                            fileName: "[project]/components/home/ExecutiveBoard.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/ExecutiveBoard.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/members",
                        variant: "outline",
                        children: "View All Members"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ExecutiveBoard.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/ExecutiveBoard.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/ExecutiveBoard.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/ExecutiveBoard.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/BentoPhotoGrid.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/home/BentoPhotoGrid.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/BentoPhotoGrid.tsx <module evaluation>", "default");
}),
"[project]/components/home/BentoPhotoGrid.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/home/BentoPhotoGrid.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/BentoPhotoGrid.tsx", "default");
}),
"[project]/components/home/BentoPhotoGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$BentoPhotoGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/home/BentoPhotoGrid.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$BentoPhotoGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/home/BentoPhotoGrid.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$BentoPhotoGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/home/FinalCTA.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-rsc] (ecmascript)");
;
;
function FinalCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 md:py-32 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-accent-dark via-accent to-accent-light opacity-90"
            }, void 0, false, {
                fileName: "[project]/components/home/FinalCTA.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinalCTA.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinalCTA.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FinalCTA.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white mb-6",
                        children: "Ready to Join Our Brotherhood?"
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinalCTA.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-white/80 mb-10 max-w-2xl mx-auto",
                        children: "Spring 2026 Rush begins January 15th. Take the first step toward a transformative college experience."
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinalCTA.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/recruitment",
                                variant: "secondary",
                                size: "lg",
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinalCTA.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "mailto:contact@alphazeta-sc.com",
                                variant: "outline",
                                size: "lg",
                                className: "border-white/30 text-white hover:border-white hover:text-white",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinalCTA.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinalCTA.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FinalCTA.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/FinalCTA.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$About$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/About.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CompanyCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/CompanyCarousel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$MissionValues$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/MissionValues.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ExecutiveBoard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/ExecutiveBoard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$BentoPhotoGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/BentoPhotoGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinalCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/FinalCTA.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$About$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CompanyCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$MissionValues$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ExecutiveBoard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$BentoPhotoGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinalCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__61143263._.js.map