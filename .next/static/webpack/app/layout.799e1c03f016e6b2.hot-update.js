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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a38bc1141b83\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/ZDcyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImEzOGJjMTE0MWI4M1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(app-pages-browser)/./src/styles/globals.css\");\n/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/navbar/Navbar */ \"(app-pages-browser)/./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Sidebar */ \"(app-pages-browser)/./src/components/Sidebar.tsx\");\n/* harmony import */ var _components_Theme_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Theme-provider */ \"(app-pages-browser)/./src/components/Theme-provider.tsx\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/code-2.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search-code.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/languages.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sparkles.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/bot.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file-text.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Theme_provider__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                attribute: \"class\",\n                defaultTheme: \"dark\",\n                enableSystem: true,\n                disableTransitionOnChange: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-screen flex\",\n                        children: [\n                            !isHomepage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                upperItems: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Code Generation\",\n                                        href: \"/generate-code\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Code Review\",\n                                        href: \"/review-code\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Code Translation\",\n                                        href: \"/translate-code\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"AI Wizard\",\n                                        href: \"/ai-wizard\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 11\n                                    }, void 0)\n                                ],\n                                projects: premadeTemplates,\n                                lowerItems: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"AI Model Setting\",\n                                        href: \"/help\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Documentation\",\n                                        href: \"/documentation\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Settings\",\n                                        href: \"/settings\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 11\n                                    }, void 0)\n                                ]\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 27\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full relative ml-[-0.5rem] z-auto\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQTBCTUE7QUF4QnlCO0FBQ2lCO0FBQ0w7QUFDTTtBQUNXO0FBbUJ0QztBQUdQLFNBQVNZLFdBQVcsS0FJakM7UUFKaUMsRUFDakNDLFFBQVEsRUFHUixHQUppQztJQU1qQyxxQkFDRSw4REFBQ0M7UUFBS0MsTUFBSztrQkFDVCw0RUFBQ0M7c0JBQ0MsNEVBQUNaLHFFQUFhQTtnQkFDWmEsV0FBVTtnQkFDVkMsY0FBYTtnQkFDYkMsWUFBWTtnQkFDWkMseUJBQXlCOztrQ0FFekIsOERBQUNuQixpRUFBTUE7Ozs7O2tDQUNQLDhEQUFDb0I7d0JBQUlDLFdBQVU7OzRCQUNkLENBQUNDLDRCQUFjLDhEQUFDckIsMkRBQU9BO2dDQUMxQnNCLFlBQVk7a0RBRVYsOERBQUNyQiw0REFBV0E7d0NBQ1ZzQixvQkFBTSw4REFBQ2pCLHFJQUFLQTs0Q0FBQ2tCLE1BQU07Ozs7Ozt3Q0FDbkJDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xDLE9BQU87Ozs7OztrREFFVCw4REFBQzFCLDREQUFXQTt3Q0FDVnNCLG9CQUFNLDhEQUFDZixxSUFBVUE7NENBQUNnQixNQUFNOzs7Ozs7d0NBQ3hCQyxNQUFLO3dDQUNMQyxNQUFLO3dDQUNMQyxPQUFPOzs7Ozs7a0RBRVQsOERBQUMxQiw0REFBV0E7d0NBQ1ZzQixvQkFBTSw4REFBQ2hCLHFJQUFTQTs0Q0FBQ2lCLE1BQU07Ozs7Ozt3Q0FDdkJDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xDLE9BQU87Ozs7OztrREFFVCw4REFBQzFCLDREQUFXQTt3Q0FDVnNCLG9CQUFNLDhEQUFDZCxxSUFBUUE7NENBQUNlLE1BQU07Ozs7Ozt3Q0FDdEJDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xDLE9BQU87Ozs7OztpQ0FFVjtnQ0FDREMsVUFBVUM7Z0NBQ1ZDLFlBQVk7a0RBQ1YsOERBQUM3Qiw0REFBV0E7d0NBQ1ZzQixvQkFBTSw4REFBQ2xCLHFJQUFHQTs0Q0FBQ21CLE1BQU07Ozs7Ozt3Q0FDakJDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xDLE9BQU87Ozs7OztrREFFVCw4REFBQzFCLDREQUFXQTt3Q0FDVnNCLG9CQUFNLDhEQUFDbkIsc0lBQVFBOzRDQUFDb0IsTUFBTTs7Ozs7O3dDQUN0QkMsTUFBSzt3Q0FDTEMsTUFBSzt3Q0FDTEMsT0FBTzs7Ozs7O2tEQUVULDhEQUFDMUIsNERBQVdBO3dDQUNWc0Isb0JBQU0sOERBQUNwQixzSUFBUUE7NENBQUNxQixNQUFNOzs7Ozs7d0NBQ3RCQyxNQUFLO3dDQUNMQyxNQUFLO3dDQUNMQyxPQUFPOzs7Ozs7aUNBRVY7Ozs7OzswQ0FFRyw4REFBQ1I7Z0NBQUlDLFdBQVU7MENBQ1ZUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pCO0tBM0V3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sYXlvdXQudHN4PzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiQC9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7U2lkZWJhckl0ZW19IGZyb20gXCJAL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvVGhlbWUtcHJvdmlkZXJcIjtcbmltcG9ydCB7XG4gIEhvbWUsXG4gIFVzZXJzMixcbiAgTWVzc2FnZXNTcXVhcmUsXG4gIExheW91dERhc2hib2FyZCxcbiAgQmFyQ2hhcnQzLFxuICBTZXR0aW5ncyxcbiAgRmlsZSxcbiAgRmlsZVRleHQsXG4gIExpZmVCdW95LFxuICBDb21wYXNzLFxuICBIZWxwQ2lyY2xlLFxuICBCb3QsXG4gIENvZGUyLFxuICBMYW5ndWFnZXMsXG4gIFNlYXJjaENvZGUsXG4gIFNxdWlyY2xlLFxuICBTcGFya2xlcyxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcbiAgY2hpbGRyZW4sXG59OiBSZWFkb25seTx7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59Pikge1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXJcbiAgICAgICAgICBhdHRyaWJ1dGU9XCJjbGFzc1wiXG4gICAgICAgICAgZGVmYXVsdFRoZW1lPVwiZGFya1wiXG4gICAgICAgICAgZW5hYmxlU3lzdGVtXG4gICAgICAgICAgZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZVxuICAgICAgICA+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleFwiPlxuICAgICAgICAgIHshaXNIb21lcGFnZSAmJiA8U2lkZWJhclxuICAgICAgICB1cHBlckl0ZW1zPXtbXG5cbiAgICAgICAgICA8U2lkZWJhckl0ZW1cbiAgICAgICAgICAgIGljb249ezxDb2RlMiBzaXplPXsxOH0gLz59XG4gICAgICAgICAgICB0ZXh0PVwiQ29kZSBHZW5lcmF0aW9uXCJcbiAgICAgICAgICAgIGhyZWY9XCIvZ2VuZXJhdGUtY29kZVwiXG4gICAgICAgICAgICBhbGVydD17ZmFsc2V9XG4gICAgICAgICAgLz4sXG4gICAgICAgICAgPFNpZGViYXJJdGVtXG4gICAgICAgICAgICBpY29uPXs8U2VhcmNoQ29kZSBzaXplPXsxOH0gLz59XG4gICAgICAgICAgICB0ZXh0PVwiQ29kZSBSZXZpZXdcIlxuICAgICAgICAgICAgaHJlZj1cIi9yZXZpZXctY29kZVwiXG4gICAgICAgICAgICBhbGVydD17ZmFsc2V9XG4gICAgICAgICAgLz4sXG4gICAgICAgICAgPFNpZGViYXJJdGVtXG4gICAgICAgICAgICBpY29uPXs8TGFuZ3VhZ2VzIHNpemU9ezE4fSAvPn1cbiAgICAgICAgICAgIHRleHQ9XCJDb2RlIFRyYW5zbGF0aW9uXCJcbiAgICAgICAgICAgIGhyZWY9XCIvdHJhbnNsYXRlLWNvZGVcIlxuICAgICAgICAgICAgYWxlcnQ9e2ZhbHNlfVxuICAgICAgICAgIC8+LFxuICAgICAgICAgIDxTaWRlYmFySXRlbVxuICAgICAgICAgICAgaWNvbj17PFNwYXJrbGVzIHNpemU9ezE4fSAvPn1cbiAgICAgICAgICAgIHRleHQ9XCJBSSBXaXphcmRcIlxuICAgICAgICAgICAgaHJlZj1cIi9haS13aXphcmRcIlxuICAgICAgICAgICAgYWxlcnQ9e2ZhbHNlfVxuICAgICAgICAgIC8+LFxuICAgICAgICBdfVxuICAgICAgICBwcm9qZWN0cz17cHJlbWFkZVRlbXBsYXRlc30gLy8gUGFzcyBwcmVtYWRlIHRlbXBsYXRlcyBwcm9qZWN0cyBhcyBwcm9wXG4gICAgICAgIGxvd2VySXRlbXM9e1sgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICA8U2lkZWJhckl0ZW1cbiAgICAgICAgICAgIGljb249ezxCb3Qgc2l6ZT17MTh9IC8+fVxuICAgICAgICAgICAgdGV4dD1cIkFJIE1vZGVsIFNldHRpbmdcIlxuICAgICAgICAgICAgaHJlZj1cIi9oZWxwXCJcbiAgICAgICAgICAgIGFsZXJ0PXtmYWxzZX1cbiAgICAgICAgICAvPixcbiAgICAgICAgICA8U2lkZWJhckl0ZW1cbiAgICAgICAgICAgIGljb249ezxGaWxlVGV4dCBzaXplPXsxOH0gLz59XG4gICAgICAgICAgICB0ZXh0PVwiRG9jdW1lbnRhdGlvblwiXG4gICAgICAgICAgICBocmVmPVwiL2RvY3VtZW50YXRpb25cIlxuICAgICAgICAgICAgYWxlcnQ9e2ZhbHNlfVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgPFNpZGViYXJJdGVtXG4gICAgICAgICAgICBpY29uPXs8U2V0dGluZ3Mgc2l6ZT17MTh9IC8+fVxuICAgICAgICAgICAgdGV4dD1cIlNldHRpbmdzXCJcbiAgICAgICAgICAgIGhyZWY9XCIvc2V0dGluZ3NcIlxuICAgICAgICAgICAgYWxlcnQ9e2ZhbHNlfVxuICAgICAgICAgIC8+LFxuICAgICAgICBdfVxuICAgICAgLz59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHJlbGF0aXZlIG1sLVstMC41cmVtXSB6LWF1dG9cIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIk5hdmJhciIsIlNpZGViYXIiLCJTaWRlYmFySXRlbSIsIlRoZW1lUHJvdmlkZXIiLCJTZXR0aW5ncyIsIkZpbGVUZXh0IiwiQm90IiwiQ29kZTIiLCJMYW5ndWFnZXMiLCJTZWFyY2hDb2RlIiwiU3BhcmtsZXMiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJodG1sIiwibGFuZyIsImJvZHkiLCJhdHRyaWJ1dGUiLCJkZWZhdWx0VGhlbWUiLCJlbmFibGVTeXN0ZW0iLCJkaXNhYmxlVHJhbnNpdGlvbk9uQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNIb21lcGFnZSIsInVwcGVySXRlbXMiLCJpY29uIiwic2l6ZSIsInRleHQiLCJocmVmIiwiYWxlcnQiLCJwcm9qZWN0cyIsInByZW1hZGVUZW1wbGF0ZXMiLCJsb3dlckl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});