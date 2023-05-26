/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/globals */ \"./styles/globals.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\nconst _excluded = [\"session\"];\nvar _jsxFileName = \"/Users/eunju/Desktop/workspace/task-management-app/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App(_ref) {\n  let {\n    Component,\n    pageProps: {\n      session\n    }\n  } = _ref,\n      pageProps = _objectWithoutProperties(_ref.pageProps, _excluded);\n\n  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient({\n    defaultOptions: {\n      queries: {\n        refetchOnMount: false,\n        refetchOnReconnect: false,\n        refetchOnWindowFocus: false\n      }\n    }\n  }); // NOTE 페이지 이동 시 로딩 처리\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const start = () => nprogress__WEBPACK_IMPORTED_MODULE_8___default().start();\n\n    const end = () => nprogress__WEBPACK_IMPORTED_MODULE_8___default().done();\n\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeStart\", start);\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeComplete\", end);\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeError\", end);\n    return () => {\n      next_router__WEBPACK_IMPORTED_MODULE_1___default().events.off(\"routeChangeStart\", start);\n      next_router__WEBPACK_IMPORTED_MODULE_1___default().events.off(\"routeChangeComplete\", end);\n      next_router__WEBPACK_IMPORTED_MODULE_1___default().events.off(\"routeChangeError\", end);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n    session: session,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_6__.RecoilRoot, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {\n        client: queryClient,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n          theme: _styles_theme__WEBPACK_IMPORTED_MODULE_11__.theme,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"title\", {\n              children: \"Task Management\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_styles_globals__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this),  true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__.ReactQueryDevtools, {\n          initialIsOpen: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRWUsU0FBU2EsR0FBVCxPQUdGO0VBQUEsSUFIZTtJQUMxQkMsU0FEMEI7SUFFMUJDLFNBQVMsRUFBRTtNQUFFQztJQUFGO0VBRmUsQ0FHZjtFQUFBLElBRGNELFNBQ2QsaUNBRFhBLFNBQ1c7O0VBQ1gsTUFBTUUsV0FBVyxHQUFHLElBQUliLG9EQUFKLENBQWdCO0lBQ2xDYyxjQUFjLEVBQUU7TUFDZEMsT0FBTyxFQUFFO1FBQ1BDLGNBQWMsRUFBRSxLQURUO1FBRVBDLGtCQUFrQixFQUFFLEtBRmI7UUFHUEMsb0JBQW9CLEVBQUU7TUFIZjtJQURLO0VBRGtCLENBQWhCLENBQXBCLENBRFcsQ0FXWDs7RUFDQXRCLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU11QixLQUFLLEdBQUcsTUFBTWQsc0RBQUEsRUFBcEI7O0lBQ0EsTUFBTWUsR0FBRyxHQUFHLE1BQU1mLHFEQUFBLEVBQWxCOztJQUVBUiw0REFBQSxDQUFpQixrQkFBakIsRUFBcUNzQixLQUFyQztJQUNBdEIsNERBQUEsQ0FBaUIscUJBQWpCLEVBQXdDdUIsR0FBeEM7SUFDQXZCLDREQUFBLENBQWlCLGtCQUFqQixFQUFxQ3VCLEdBQXJDO0lBRUEsT0FBTyxNQUFNO01BQ1h2Qiw2REFBQSxDQUFrQixrQkFBbEIsRUFBc0NzQixLQUF0QztNQUNBdEIsNkRBQUEsQ0FBa0IscUJBQWxCLEVBQXlDdUIsR0FBekM7TUFDQXZCLDZEQUFBLENBQWtCLGtCQUFsQixFQUFzQ3VCLEdBQXRDO0lBQ0QsQ0FKRDtFQUtELENBYlEsRUFhTixFQWJNLENBQVQ7RUFlQSxvQkFDRSwrREFBQyw0REFBRDtJQUFpQixPQUFPLEVBQUVSLE9BQTFCO0lBQUEsdUJBQ0UsK0RBQUMsOENBQUQ7TUFBQSx1QkFDRSwrREFBQyw0REFBRDtRQUFxQixNQUFNLEVBQUVDLFdBQTdCO1FBQUEsd0JBQ0UsK0RBQUMsNERBQUQ7VUFBZSxLQUFLLEVBQUVMLGlEQUF0QjtVQUFBLHdCQUNFLCtEQUFDLGtEQUFEO1lBQUEsdUJBQ0U7Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBREYsZUFJRSwrREFBQyx3REFBRDtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBSkYsZUFLRSwrREFBQyxrRUFBRDtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBTEYsZUFNRSwrREFBQyxTQUFELG9CQUFlRyxTQUFmO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFORjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFERixFQVNHLHNCQUNDLCtEQUFDLG9FQUFEO1VBQW9CLGFBQWEsRUFBRTtRQUFuQztVQUFBO1VBQUE7VUFBQTtRQUFBLFFBVko7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQW1CRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stbWFuYWdlbWVudC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5cbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiQC9zdHlsZXMvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiQC9zdHlsZXMvdGhlbWVcIjtcblxuaW1wb3J0IFwibnByb2dyZXNzL25wcm9ncmVzcy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHtcbiAgQ29tcG9uZW50LFxuICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0sXG59OiBBcHBQcm9wcykge1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgcmVmZXRjaE9uTW91bnQ6IGZhbHNlLFxuICAgICAgICByZWZldGNoT25SZWNvbm5lY3Q6IGZhbHNlLFxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIE5PVEUg7Y6Y7J207KeAIOydtOuPmSDsi5wg66Gc65SpIOyymOumrFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgY29uc3QgZW5kID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblxuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0KTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpO1xuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGVuZCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0KTtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpO1xuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGVuZCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgIDxSZWNvaWxSb290PlxuICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT5UYXNrIE1hbmFnZW1lbnQ8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgeyEhKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpICYmIChcbiAgICAgICAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3Blbj17ZmFsc2V9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgICAgPC9SZWNvaWxSb290PlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJvdXRlciIsIlNlc3Npb25Qcm92aWRlciIsIkhlYWQiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJSZWNvaWxSb290IiwiVGhlbWVQcm92aWRlciIsIk5Qcm9ncmVzcyIsIkNzc0Jhc2VsaW5lIiwiR2xvYmFsU3R5bGUiLCJ0aGVtZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbk1vdW50IiwicmVmZXRjaE9uUmVjb25uZWN0IiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJzdGFydCIsImVuZCIsImRvbmUiLCJldmVudHMiLCJvbiIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.ts":
/*!***************************!*\
  !*** ./styles/globals.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ \"styled-reset\");\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/reset.css */ \"./node_modules/antd/dist/reset.css\");\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GlobalStyle = /*#__PURE__*/(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"\", \";*{box-sizing:border-box;}html,body,#__next{width:100%;height:100%;font-family:'Noto Sans KR',sans-serif;font-size:12px;font-weight:normal;line-height:1.8;color:#111111;margin:0;padding:0;user-select:none;}input,textarea{-moz-user-select:auto;-webkit-user-select:auto;-ms-user-select:auto;user-select:auto;}input:focus{outline:none;}button{border:none;background:none;padding:0;cursor:pointer;}a{color:inherit;text-decoration:none;}span{display:inline-block;}::-webkit-scrollbar{width:12px;background-color:transparent;}::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:#8f8f8fc9;border-radius:8px;border:2px solid transparent;}::-webkit-scrollbar-track{background-color:transparent;}\"], (styled_reset__WEBPACK_IMPORTED_MODULE_1___default()));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsTUFBTUUsV0FBZ0IsZ0JBQUdGLG9FQUFILDRzQkFDbEJDLHFEQURrQixDQUF0QjtBQTBEQSxpRUFBZUMsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stbWFuYWdlbWVudC8uL3N0eWxlcy9nbG9iYWxzLnRzP2FmZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCByZXNldCBmcm9tIFwic3R5bGVkLXJlc2V0XCI7XG5cbmltcG9ydCBcImFudGQvZGlzdC9yZXNldC5jc3NcIjtcblxuY29uc3QgR2xvYmFsU3R5bGU6IGFueSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAke3Jlc2V0fTtcblxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGh0bWwsIGJvZHksICNfX25leHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIFxuICAgIGNvbG9yOiAjMTExMTExO1xuXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH0gXG4gIGlucHV0LCB0ZXh0YXJlYSB7IFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcbiAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IGF1dG87XG4gIH1cbiAgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZmM5O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJyZXNldCIsIkdsb2JhbFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/globals.ts\n");

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\nconst theme = {\n  color: {\n    textDesc: \"#8c8c8c\",\n    textDescEmph: \"#444444\"\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLEtBQW1CLEdBQUc7RUFDakNDLEtBQUssRUFBRTtJQUNMQyxRQUFRLEVBQUUsU0FETDtJQUVMQyxZQUFZLEVBQUU7RUFGVDtBQUQwQixDQUE1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stbWFuYWdlbWVudC8uL3N0eWxlcy90aGVtZS50cz82OTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmF1bHRUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgdGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcbiAgY29sb3I6IHtcbiAgICB0ZXh0RGVzYzogXCIjOGM4YzhjXCIsXG4gICAgdGV4dERlc2NFbXBoOiBcIiM0NDQ0NDRcIixcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvciIsInRleHREZXNjIiwidGV4dERlc2NFbXBoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme.ts\n");

/***/ }),

/***/ "./node_modules/antd/dist/reset.css":
/*!******************************************!*\
  !*** ./node_modules/antd/dist/reset.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-reset");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();