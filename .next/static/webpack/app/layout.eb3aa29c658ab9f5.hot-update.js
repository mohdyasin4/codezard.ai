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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"082f7a3cb098\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/ZDcyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjA4MmY3YTNjYjA5OFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(app-pages-browser)/./src/styles/globals.css\");\n/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/navbar/Navbar */ \"(app-pages-browser)/./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Sidebar */ \"(app-pages-browser)/./src/components/Sidebar.tsx\");\n/* harmony import */ var _components_Theme_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Theme-provider */ \"(app-pages-browser)/./src/components/Theme-provider.tsx\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles,Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/squircle.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles,Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/code-2.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles,Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search-code.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles,Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/languages.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles,Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sparkles.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles,Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/bot.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles,Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file-text.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Code2,FileText,Languages,SearchCode,Settings,Sparkles,Squircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    const premadeTemplates = [\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                radius: \"14\",\n                stroke: \"none\",\n                fill: \"#7AFF11\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            text: \"Login Form\",\n            href: \"/project1\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                stroke: \"none\",\n                fill: \"#8E55EA\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            text: \"Signup Form\",\n            href: \"/project2\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                stroke: \"none\",\n                fill: \"#3E90F0\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            text: \"To-Do List App\",\n            href: \"/project3\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                stroke: \"none\",\n                fill: \"#D84C10\",\n                size: 12\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            text: \"TicTacToe Game\",\n            href: \"/project3\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Theme_provider__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                attribute: \"class\",\n                defaultTheme: \"dark\",\n                enableSystem: true,\n                disableTransitionOnChange: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-screen flex\",\n                        children: [\n                            !isHomepage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                upperItems: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Code Generation\",\n                                        href: \"/generate-code\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Code Review\",\n                                        href: \"/review-code\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Code Translation\",\n                                        href: \"/translate-code\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"AI Wizard\",\n                                        href: \"/ai-wizard\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 11\n                                    }, void 0)\n                                ],\n                                projects: premadeTemplates,\n                                lowerItems: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"AI Model Setting\",\n                                        href: \"/help\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Documentation\",\n                                        href: \"/documentation\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 11\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarItem, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Code2_FileText_Languages_SearchCode_Settings_Sparkles_Squircle_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                            size: 18\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        text: \"Settings\",\n                                        href: \"/settings\",\n                                        alert: false\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 11\n                                    }, void 0)\n                                ]\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 27\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full relative ml-[-0.5rem] z-auto\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding\\\\Mini Project\\\\codezard\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQk1BO0FBeEJ5QjtBQUNpQjtBQUNMO0FBQ007QUFDVztBQW1CdEM7QUFHUCxTQUFTYSxXQUFXLEtBSWpDO1FBSmlDLEVBQ2pDQyxRQUFRLEVBR1IsR0FKaUM7SUFNakMsTUFBTUMsbUJBQW1CO1FBQ3ZCO1lBQUVDLG9CQUFNLDhEQUFDTCw4SUFBUUE7Z0JBQUNNLFFBQU87Z0JBQUtDLFFBQU87Z0JBQU9DLE1BQUs7Z0JBQVVDLE1BQU07Ozs7OztZQUFRQyxNQUFNO1lBQWNDLE1BQU07UUFBWTtRQUMvRztZQUFFTixvQkFBTSw4REFBQ0wsOElBQVFBO2dCQUFDTyxRQUFPO2dCQUFPQyxNQUFLO2dCQUFVQyxNQUFNOzs7Ozs7WUFBUUMsTUFBTTtZQUFlQyxNQUFNO1FBQVk7UUFDcEc7WUFBRU4sb0JBQU0sOERBQUNMLDhJQUFRQTtnQkFBQ08sUUFBTztnQkFBT0MsTUFBSztnQkFBVUMsTUFBTTs7Ozs7O1lBQVFDLE1BQU07WUFBa0JDLE1BQU07UUFBWTtRQUN2RztZQUFFTixvQkFBTSw4REFBQ0wsOElBQVFBO2dCQUFDTyxRQUFPO2dCQUFPQyxNQUFLO2dCQUFVQyxNQUFNOzs7Ozs7WUFBUUMsTUFBTTtZQUFrQkMsTUFBTTtRQUFZO0tBQ3hHO0lBRUQscUJBQ0UsOERBQUNDO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUNDO3NCQUNDLDRFQUFDckIscUVBQWFBO2dCQUNac0IsV0FBVTtnQkFDVkMsY0FBYTtnQkFDYkMsWUFBWTtnQkFDWkMseUJBQXlCOztrQ0FFekIsOERBQUM1QixpRUFBTUE7Ozs7O2tDQUNQLDhEQUFDNkI7d0JBQUlDLFdBQVU7OzRCQUNkLENBQUNDLDRCQUFjLDhEQUFDOUIsMkRBQU9BO2dDQUMxQitCLFlBQVk7a0RBRVYsOERBQUM5Qiw0REFBV0E7d0NBQ1ZhLG9CQUFNLDhEQUFDUiw4SUFBS0E7NENBQUNZLE1BQU07Ozs7Ozt3Q0FDbkJDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xZLE9BQU87Ozs7OztrREFFVCw4REFBQy9CLDREQUFXQTt3Q0FDVmEsb0JBQU0sOERBQUNOLDhJQUFVQTs0Q0FBQ1UsTUFBTTs7Ozs7O3dDQUN4QkMsTUFBSzt3Q0FDTEMsTUFBSzt3Q0FDTFksT0FBTzs7Ozs7O2tEQUVULDhEQUFDL0IsNERBQVdBO3dDQUNWYSxvQkFBTSw4REFBQ1AsOElBQVNBOzRDQUFDVyxNQUFNOzs7Ozs7d0NBQ3ZCQyxNQUFLO3dDQUNMQyxNQUFLO3dDQUNMWSxPQUFPOzs7Ozs7a0RBRVQsOERBQUMvQiw0REFBV0E7d0NBQ1ZhLG9CQUFNLDhEQUFDSiw4SUFBUUE7NENBQUNRLE1BQU07Ozs7Ozt3Q0FDdEJDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xZLE9BQU87Ozs7OztpQ0FFVjtnQ0FDREMsVUFBVXBCO2dDQUNWcUIsWUFBWTtrREFDViw4REFBQ2pDLDREQUFXQTt3Q0FDVmEsb0JBQU0sOERBQUNULCtJQUFHQTs0Q0FBQ2EsTUFBTTs7Ozs7O3dDQUNqQkMsTUFBSzt3Q0FDTEMsTUFBSzt3Q0FDTFksT0FBTzs7Ozs7O2tEQUVULDhEQUFDL0IsNERBQVdBO3dDQUNWYSxvQkFBTSw4REFBQ1YsK0lBQVFBOzRDQUFDYyxNQUFNOzs7Ozs7d0NBQ3RCQyxNQUFLO3dDQUNMQyxNQUFLO3dDQUNMWSxPQUFPOzs7Ozs7a0RBRVQsOERBQUMvQiw0REFBV0E7d0NBQ1ZhLG9CQUFNLDhEQUFDWCwrSUFBUUE7NENBQUNlLE1BQU07Ozs7Ozt3Q0FDdEJDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xZLE9BQU87Ozs7OztpQ0FFVjs7Ozs7OzBDQUVHLDhEQUFDSjtnQ0FBSUMsV0FBVTswQ0FDVmpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pCO0tBbEZ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sYXlvdXQudHN4PzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiQC9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7U2lkZWJhckl0ZW19IGZyb20gXCJAL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvVGhlbWUtcHJvdmlkZXJcIjtcbmltcG9ydCB7XG4gIEhvbWUsXG4gIFVzZXJzMixcbiAgTWVzc2FnZXNTcXVhcmUsXG4gIExheW91dERhc2hib2FyZCxcbiAgQmFyQ2hhcnQzLFxuICBTZXR0aW5ncyxcbiAgRmlsZSxcbiAgRmlsZVRleHQsXG4gIExpZmVCdW95LFxuICBDb21wYXNzLFxuICBIZWxwQ2lyY2xlLFxuICBCb3QsXG4gIENvZGUyLFxuICBMYW5ndWFnZXMsXG4gIFNlYXJjaENvZGUsXG4gIFNxdWlyY2xlLFxuICBTcGFya2xlcyxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcbiAgY2hpbGRyZW4sXG59OiBSZWFkb25seTx7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59Pikge1xuICBcbiAgY29uc3QgcHJlbWFkZVRlbXBsYXRlcyA9IFtcbiAgICB7IGljb246IDxTcXVpcmNsZSByYWRpdXM9XCIxNFwiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwiIzdBRkYxMVwiIHNpemU9ezEyfSAvPiwgdGV4dDogXCJMb2dpbiBGb3JtXCIsIGhyZWY6IFwiL3Byb2plY3QxXCIgfSxcbiAgICB7IGljb246IDxTcXVpcmNsZSBzdHJva2U9XCJub25lXCIgZmlsbD1cIiM4RTU1RUFcIiBzaXplPXsxMn0gLz4sIHRleHQ6IFwiU2lnbnVwIEZvcm1cIiwgaHJlZjogXCIvcHJvamVjdDJcIiB9LFxuICAgIHsgaWNvbjogPFNxdWlyY2xlIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwiIzNFOTBGMFwiIHNpemU9ezEyfSAvPiwgdGV4dDogXCJUby1EbyBMaXN0IEFwcFwiLCBocmVmOiBcIi9wcm9qZWN0M1wiIH0sXG4gICAgeyBpY29uOiA8U3F1aXJjbGUgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCIjRDg0QzEwXCIgc2l6ZT17MTJ9IC8+LCB0ZXh0OiBcIlRpY1RhY1RvZSBHYW1lXCIsIGhyZWY6IFwiL3Byb2plY3QzXCIgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyXG4gICAgICAgICAgYXR0cmlidXRlPVwiY2xhc3NcIlxuICAgICAgICAgIGRlZmF1bHRUaGVtZT1cImRhcmtcIlxuICAgICAgICAgIGVuYWJsZVN5c3RlbVxuICAgICAgICAgIGRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2VcbiAgICAgICAgPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cbiAgICAgICAgICB7IWlzSG9tZXBhZ2UgJiYgPFNpZGViYXJcbiAgICAgICAgdXBwZXJJdGVtcz17W1xuXG4gICAgICAgICAgPFNpZGViYXJJdGVtXG4gICAgICAgICAgICBpY29uPXs8Q29kZTIgc2l6ZT17MTh9IC8+fVxuICAgICAgICAgICAgdGV4dD1cIkNvZGUgR2VuZXJhdGlvblwiXG4gICAgICAgICAgICBocmVmPVwiL2dlbmVyYXRlLWNvZGVcIlxuICAgICAgICAgICAgYWxlcnQ9e2ZhbHNlfVxuICAgICAgICAgIC8+LFxuICAgICAgICAgIDxTaWRlYmFySXRlbVxuICAgICAgICAgICAgaWNvbj17PFNlYXJjaENvZGUgc2l6ZT17MTh9IC8+fVxuICAgICAgICAgICAgdGV4dD1cIkNvZGUgUmV2aWV3XCJcbiAgICAgICAgICAgIGhyZWY9XCIvcmV2aWV3LWNvZGVcIlxuICAgICAgICAgICAgYWxlcnQ9e2ZhbHNlfVxuICAgICAgICAgIC8+LFxuICAgICAgICAgIDxTaWRlYmFySXRlbVxuICAgICAgICAgICAgaWNvbj17PExhbmd1YWdlcyBzaXplPXsxOH0gLz59XG4gICAgICAgICAgICB0ZXh0PVwiQ29kZSBUcmFuc2xhdGlvblwiXG4gICAgICAgICAgICBocmVmPVwiL3RyYW5zbGF0ZS1jb2RlXCJcbiAgICAgICAgICAgIGFsZXJ0PXtmYWxzZX1cbiAgICAgICAgICAvPixcbiAgICAgICAgICA8U2lkZWJhckl0ZW1cbiAgICAgICAgICAgIGljb249ezxTcGFya2xlcyBzaXplPXsxOH0gLz59XG4gICAgICAgICAgICB0ZXh0PVwiQUkgV2l6YXJkXCJcbiAgICAgICAgICAgIGhyZWY9XCIvYWktd2l6YXJkXCJcbiAgICAgICAgICAgIGFsZXJ0PXtmYWxzZX1cbiAgICAgICAgICAvPixcbiAgICAgICAgXX1cbiAgICAgICAgcHJvamVjdHM9e3ByZW1hZGVUZW1wbGF0ZXN9IC8vIFBhc3MgcHJlbWFkZSB0ZW1wbGF0ZXMgcHJvamVjdHMgYXMgcHJvcFxuICAgICAgICBsb3dlckl0ZW1zPXtbICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgPFNpZGViYXJJdGVtXG4gICAgICAgICAgICBpY29uPXs8Qm90IHNpemU9ezE4fSAvPn1cbiAgICAgICAgICAgIHRleHQ9XCJBSSBNb2RlbCBTZXR0aW5nXCJcbiAgICAgICAgICAgIGhyZWY9XCIvaGVscFwiXG4gICAgICAgICAgICBhbGVydD17ZmFsc2V9XG4gICAgICAgICAgLz4sXG4gICAgICAgICAgPFNpZGViYXJJdGVtXG4gICAgICAgICAgICBpY29uPXs8RmlsZVRleHQgc2l6ZT17MTh9IC8+fVxuICAgICAgICAgICAgdGV4dD1cIkRvY3VtZW50YXRpb25cIlxuICAgICAgICAgICAgaHJlZj1cIi9kb2N1bWVudGF0aW9uXCJcbiAgICAgICAgICAgIGFsZXJ0PXtmYWxzZX1cbiAgICAgICAgICAgIC8+LFxuICAgICAgICAgIDxTaWRlYmFySXRlbVxuICAgICAgICAgICAgaWNvbj17PFNldHRpbmdzIHNpemU9ezE4fSAvPn1cbiAgICAgICAgICAgIHRleHQ9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICBocmVmPVwiL3NldHRpbmdzXCJcbiAgICAgICAgICAgIGFsZXJ0PXtmYWxzZX1cbiAgICAgICAgICAvPixcbiAgICAgICAgXX1cbiAgICAgIC8+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCByZWxhdGl2ZSBtbC1bLTAuNXJlbV0gei1hdXRvXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJOYXZiYXIiLCJTaWRlYmFyIiwiU2lkZWJhckl0ZW0iLCJUaGVtZVByb3ZpZGVyIiwiU2V0dGluZ3MiLCJGaWxlVGV4dCIsIkJvdCIsIkNvZGUyIiwiTGFuZ3VhZ2VzIiwiU2VhcmNoQ29kZSIsIlNxdWlyY2xlIiwiU3BhcmtsZXMiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJwcmVtYWRlVGVtcGxhdGVzIiwiaWNvbiIsInJhZGl1cyIsInN0cm9rZSIsImZpbGwiLCJzaXplIiwidGV4dCIsImhyZWYiLCJodG1sIiwibGFuZyIsImJvZHkiLCJhdHRyaWJ1dGUiLCJkZWZhdWx0VGhlbWUiLCJlbmFibGVTeXN0ZW0iLCJkaXNhYmxlVHJhbnNpdGlvbk9uQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNIb21lcGFnZSIsInVwcGVySXRlbXMiLCJhbGVydCIsInByb2plY3RzIiwibG93ZXJJdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});