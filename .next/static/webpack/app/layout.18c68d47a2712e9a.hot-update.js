"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0d6747125e14\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/ZDcyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjBkNjc0NzEyNWUxNFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"(app-pages-browser)/./src/styles/globals.css\");\n/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar/Navbar */ \"(app-pages-browser)/./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var _components_Theme_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Theme-provider */ \"(app-pages-browser)/./src/components/Theme-provider.tsx\");\n/* harmony import */ var _barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/squircle.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const isHomepage = router.pathName === \"/\";\n    const premadeTemplates = [\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                radius: \"14\",\n                stroke: \"none\",\n                fill: \"#7AFF11\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            text: \"Login Form\",\n            href: \"/project1\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                stroke: \"none\",\n                fill: \"#8E55EA\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            text: \"Signup Form\",\n            href: \"/project2\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                stroke: \"none\",\n                fill: \"#3E90F0\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            text: \"To-Do List App\",\n            href: \"/project3\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                stroke: \"none\",\n                fill: \"#D84C10\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            text: \"TicTacToe Game\",\n            href: \"/project3\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Theme_provider__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                attribute: \"class\",\n                defaultTheme: \"dark\",\n                enableSystem: true,\n                disableTransitionOnChange: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-screen flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full relative ml-[-0.5rem] z-auto\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"gA9e4WsoP6a20xDgQgrFkfMP8lc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUEyQk1BO0FBekJtRDtBQUMxQjtBQUNpQjtBQUdZO0FBbUJ0QztBQUdQLFNBQVNNLFdBQVcsS0FJakM7UUFKaUMsRUFDakNDLFFBQVEsRUFHUixHQUppQzs7SUFLakMsTUFBTUMsU0FBU1AsMERBQVNBO0lBQ3hCLE1BQU1RLFdBQVdQLDREQUFXQTtJQUM1QixNQUFNUSxhQUFhRixPQUFPRyxRQUFRLEtBQUs7SUFFdkMsTUFBTUMsbUJBQW1CO1FBQ3ZCO1lBQUVDLG9CQUFNLDhEQUFDUixvRkFBUUE7Z0JBQUNTLFFBQU87Z0JBQUtDLFFBQU87Z0JBQU9DLE1BQUs7Z0JBQVVDLE1BQU07Ozs7OztZQUFRQyxNQUFNO1lBQWNDLE1BQU07UUFBWTtRQUMvRztZQUFFTixvQkFBTSw4REFBQ1Isb0ZBQVFBO2dCQUFDVSxRQUFPO2dCQUFPQyxNQUFLO2dCQUFVQyxNQUFNOzs7Ozs7WUFBUUMsTUFBTTtZQUFlQyxNQUFNO1FBQVk7UUFDcEc7WUFBRU4sb0JBQU0sOERBQUNSLG9GQUFRQTtnQkFBQ1UsUUFBTztnQkFBT0MsTUFBSztnQkFBVUMsTUFBTTs7Ozs7O1lBQVFDLE1BQU07WUFBa0JDLE1BQU07UUFBWTtRQUN2RztZQUFFTixvQkFBTSw4REFBQ1Isb0ZBQVFBO2dCQUFDVSxRQUFPO2dCQUFPQyxNQUFLO2dCQUFVQyxNQUFNOzs7Ozs7WUFBUUMsTUFBTTtZQUFrQkMsTUFBTTtRQUFZO0tBQ3hHO0lBRUQscUJBQ0UsOERBQUNDO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUNDO3NCQUNDLDRFQUFDbEIscUVBQWFBO2dCQUNabUIsV0FBVTtnQkFDVkMsY0FBYTtnQkFDYkMsWUFBWTtnQkFDWkMseUJBQXlCOztrQ0FFekIsOERBQUN2QixpRUFBTUE7Ozs7O2tDQUNQLDhEQUFDd0I7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNWckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQjtHQW5Dd0JEOztRQUtQTCxzREFBU0E7UUFDUEMsd0RBQVdBOzs7S0FOTkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sYXlvdXQudHN4PzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9jb21wb25lbnRzL25hdmJhci9OYXZiYXJcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJAL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IHtTaWRlYmFySXRlbX0gZnJvbSBcIkAvY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9UaGVtZS1wcm92aWRlclwiO1xuaW1wb3J0IHtcbiAgSG9tZSxcbiAgVXNlcnMyLFxuICBNZXNzYWdlc1NxdWFyZSxcbiAgTGF5b3V0RGFzaGJvYXJkLFxuICBCYXJDaGFydDMsXG4gIFNldHRpbmdzLFxuICBGaWxlLFxuICBGaWxlVGV4dCxcbiAgTGlmZUJ1b3ksXG4gIENvbXBhc3MsXG4gIEhlbHBDaXJjbGUsXG4gIEJvdCxcbiAgQ29kZTIsXG4gIExhbmd1YWdlcyxcbiAgU2VhcmNoQ29kZSxcbiAgU3F1aXJjbGUsXG4gIFNwYXJrbGVzLFxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoe1xuICBjaGlsZHJlbixcbn06IFJlYWRvbmx5PHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0+KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IGlzSG9tZXBhZ2UgPSByb3V0ZXIucGF0aE5hbWUgPT09IFwiL1wiO1xuICBcbiAgY29uc3QgcHJlbWFkZVRlbXBsYXRlcyA9IFtcbiAgICB7IGljb246IDxTcXVpcmNsZSByYWRpdXM9XCIxNFwiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwiIzdBRkYxMVwiIHNpemU9ezEyfSAvPiwgdGV4dDogXCJMb2dpbiBGb3JtXCIsIGhyZWY6IFwiL3Byb2plY3QxXCIgfSxcbiAgICB7IGljb246IDxTcXVpcmNsZSBzdHJva2U9XCJub25lXCIgZmlsbD1cIiM4RTU1RUFcIiBzaXplPXsxMn0gLz4sIHRleHQ6IFwiU2lnbnVwIEZvcm1cIiwgaHJlZjogXCIvcHJvamVjdDJcIiB9LFxuICAgIHsgaWNvbjogPFNxdWlyY2xlIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwiIzNFOTBGMFwiIHNpemU9ezEyfSAvPiwgdGV4dDogXCJUby1EbyBMaXN0IEFwcFwiLCBocmVmOiBcIi9wcm9qZWN0M1wiIH0sXG4gICAgeyBpY29uOiA8U3F1aXJjbGUgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCIjRDg0QzEwXCIgc2l6ZT17MTJ9IC8+LCB0ZXh0OiBcIlRpY1RhY1RvZSBHYW1lXCIsIGhyZWY6IFwiL3Byb2plY3QzXCIgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyXG4gICAgICAgICAgYXR0cmlidXRlPVwiY2xhc3NcIlxuICAgICAgICAgIGRlZmF1bHRUaGVtZT1cImRhcmtcIlxuICAgICAgICAgIGVuYWJsZVN5c3RlbVxuICAgICAgICAgIGRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2VcbiAgICAgICAgPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgcmVsYXRpdmUgbWwtWy0wLjVyZW1dIHotYXV0b1wiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwidXNlUm91dGVyIiwidXNlUGF0aG5hbWUiLCJOYXZiYXIiLCJUaGVtZVByb3ZpZGVyIiwiU3F1aXJjbGUiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJwYXRobmFtZSIsImlzSG9tZXBhZ2UiLCJwYXRoTmFtZSIsInByZW1hZGVUZW1wbGF0ZXMiLCJpY29uIiwicmFkaXVzIiwic3Ryb2tlIiwiZmlsbCIsInNpemUiLCJ0ZXh0IiwiaHJlZiIsImh0bWwiLCJsYW5nIiwiYm9keSIsImF0dHJpYnV0ZSIsImRlZmF1bHRUaGVtZSIsImVuYWJsZVN5c3RlbSIsImRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});