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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"49d16bfe2416\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/ZDcyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQ5ZDE2YmZlMjQxNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"(app-pages-browser)/./src/styles/globals.css\");\n/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar/Navbar */ \"(app-pages-browser)/./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var _components_Theme_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Theme-provider */ \"(app-pages-browser)/./src/components/Theme-provider.tsx\");\n/* harmony import */ var _barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/squircle.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const isHomepage = router.asPath === \"/\";\n    const premadeTemplates = [\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                radius: \"14\",\n                stroke: \"none\",\n                fill: \"#7AFF11\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            text: \"Login Form\",\n            href: \"/project1\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                stroke: \"none\",\n                fill: \"#8E55EA\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            text: \"Signup Form\",\n            href: \"/project2\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                stroke: \"none\",\n                fill: \"#3E90F0\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            text: \"To-Do List App\",\n            href: \"/project3\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                stroke: \"none\",\n                fill: \"#D84C10\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            text: \"TicTacToe Game\",\n            href: \"/project3\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Theme_provider__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                attribute: \"class\",\n                defaultTheme: \"dark\",\n                enableSystem: true,\n                disableTransitionOnChange: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-screen flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-full relative ml-[-0.5rem] z-auto\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUEyQk1BO0FBekJzQztBQUNiO0FBQ2lCO0FBR1k7QUFtQnRDO0FBR1AsU0FBU0ssV0FBVyxLQUlqQztRQUppQyxFQUNqQ0MsUUFBUSxFQUdSLEdBSmlDOztJQUtqQyxNQUFNQyxTQUFTTiwwREFBU0E7SUFDeEIsTUFBTU8sYUFBYUQsT0FBT0UsTUFBTSxLQUFLO0lBRXJDLE1BQU1DLG1CQUFtQjtRQUN2QjtZQUFFQyxvQkFBTSw4REFBQ1Asb0ZBQVFBO2dCQUFDUSxRQUFPO2dCQUFLQyxRQUFPO2dCQUFPQyxNQUFLO2dCQUFVQyxNQUFNOzs7Ozs7WUFBUUMsTUFBTTtZQUFjQyxNQUFNO1FBQVk7UUFDL0c7WUFBRU4sb0JBQU0sOERBQUNQLG9GQUFRQTtnQkFBQ1MsUUFBTztnQkFBT0MsTUFBSztnQkFBVUMsTUFBTTs7Ozs7O1lBQVFDLE1BQU07WUFBZUMsTUFBTTtRQUFZO1FBQ3BHO1lBQUVOLG9CQUFNLDhEQUFDUCxvRkFBUUE7Z0JBQUNTLFFBQU87Z0JBQU9DLE1BQUs7Z0JBQVVDLE1BQU07Ozs7OztZQUFRQyxNQUFNO1lBQWtCQyxNQUFNO1FBQVk7UUFDdkc7WUFBRU4sb0JBQU0sOERBQUNQLG9GQUFRQTtnQkFBQ1MsUUFBTztnQkFBT0MsTUFBSztnQkFBVUMsTUFBTTs7Ozs7O1lBQVFDLE1BQU07WUFBa0JDLE1BQU07UUFBWTtLQUN4RztJQUVELHFCQUNFLDhEQUFDQztRQUFLQyxNQUFLO2tCQUNULDRFQUFDQztzQkFDQyw0RUFBQ2pCLHFFQUFhQTtnQkFDWmtCLFdBQVU7Z0JBQ1ZDLGNBQWE7Z0JBQ2JDLFlBQVk7Z0JBQ1pDLHlCQUF5Qjs7a0NBRXpCLDhEQUFDdEIsaUVBQU1BOzs7OztrQ0FDUCw4REFBQ3VCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDVnBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakI7R0FsQ3dCRDs7UUFLUEosc0RBQVNBOzs7S0FMRkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sYXlvdXQudHN4PzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhclwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIkAvY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQge1NpZGViYXJJdGVtfSBmcm9tIFwiQC9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1RoZW1lLXByb3ZpZGVyXCI7XG5pbXBvcnQge1xuICBIb21lLFxuICBVc2VyczIsXG4gIE1lc3NhZ2VzU3F1YXJlLFxuICBMYXlvdXREYXNoYm9hcmQsXG4gIEJhckNoYXJ0MyxcbiAgU2V0dGluZ3MsXG4gIEZpbGUsXG4gIEZpbGVUZXh0LFxuICBMaWZlQnVveSxcbiAgQ29tcGFzcyxcbiAgSGVscENpcmNsZSxcbiAgQm90LFxuICBDb2RlMixcbiAgTGFuZ3VhZ2VzLFxuICBTZWFyY2hDb2RlLFxuICBTcXVpcmNsZSxcbiAgU3BhcmtsZXMsXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLFxufTogUmVhZG9ubHk8e1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufT4pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGlzSG9tZXBhZ2UgPSByb3V0ZXIuYXNQYXRoID09PSBcIi9cIjtcbiAgXG4gIGNvbnN0IHByZW1hZGVUZW1wbGF0ZXMgPSBbXG4gICAgeyBpY29uOiA8U3F1aXJjbGUgcmFkaXVzPVwiMTRcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIiM3QUZGMTFcIiBzaXplPXsxMn0gLz4sIHRleHQ6IFwiTG9naW4gRm9ybVwiLCBocmVmOiBcIi9wcm9qZWN0MVwiIH0sXG4gICAgeyBpY29uOiA8U3F1aXJjbGUgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCIjOEU1NUVBXCIgc2l6ZT17MTJ9IC8+LCB0ZXh0OiBcIlNpZ251cCBGb3JtXCIsIGhyZWY6IFwiL3Byb2plY3QyXCIgfSxcbiAgICB7IGljb246IDxTcXVpcmNsZSBzdHJva2U9XCJub25lXCIgZmlsbD1cIiMzRTkwRjBcIiBzaXplPXsxMn0gLz4sIHRleHQ6IFwiVG8tRG8gTGlzdCBBcHBcIiwgaHJlZjogXCIvcHJvamVjdDNcIiB9LFxuICAgIHsgaWNvbjogPFNxdWlyY2xlIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwiI0Q4NEMxMFwiIHNpemU9ezEyfSAvPiwgdGV4dDogXCJUaWNUYWNUb2UgR2FtZVwiLCBocmVmOiBcIi9wcm9qZWN0M1wiIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxib2R5PlxuICAgICAgICA8VGhlbWVQcm92aWRlclxuICAgICAgICAgIGF0dHJpYnV0ZT1cImNsYXNzXCJcbiAgICAgICAgICBkZWZhdWx0VGhlbWU9XCJkYXJrXCJcbiAgICAgICAgICBlbmFibGVTeXN0ZW1cbiAgICAgICAgICBkaXNhYmxlVHJhbnNpdGlvbk9uQ2hhbmdlXG4gICAgICAgID5cbiAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHJlbGF0aXZlIG1sLVstMC41cmVtXSB6LWF1dG9cIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZVJvdXRlciIsIk5hdmJhciIsIlRoZW1lUHJvdmlkZXIiLCJTcXVpcmNsZSIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsImlzSG9tZXBhZ2UiLCJhc1BhdGgiLCJwcmVtYWRlVGVtcGxhdGVzIiwiaWNvbiIsInJhZGl1cyIsInN0cm9rZSIsImZpbGwiLCJzaXplIiwidGV4dCIsImhyZWYiLCJodG1sIiwibGFuZyIsImJvZHkiLCJhdHRyaWJ1dGUiLCJkZWZhdWx0VGhlbWUiLCJlbmFibGVTeXN0ZW0iLCJkaXNhYmxlVHJhbnNpdGlvbk9uQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});