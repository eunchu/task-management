"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./apis/index.ts":
/*!***********************!*\
  !*** ./apis/index.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userClient\": () => (/* binding */ userClient),\n/* harmony export */   \"usersAPIs\": () => (/* binding */ usersAPIs)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _usersApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersApi */ \"(api)/./apis/usersApi.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _usersApi__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _usersApi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst BASE_PATH =  true ? \"http://localhost:3000\" : 0;\nconst userClient = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n  baseURL: `${BASE_PATH}/api/users`\n});\nconst usersAPIs = (0,_usersApi__WEBPACK_IMPORTED_MODULE_1__.usersFactory)({\n  baseURL: `${BASE_PATH}/api/users`\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcGlzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUUsU0FBUyxHQUNiLFFBQ0ksdUJBREosR0FFSSxDQUhOO0FBS08sTUFBTUMsVUFBVSxHQUFHSCxvREFBQSxDQUFhO0VBQUVLLE9BQU8sRUFBRyxHQUFFSCxTQUFVO0FBQXhCLENBQWIsQ0FBbkI7QUFFUCxNQUFNSSxTQUFTLEdBQUdMLHVEQUFZLENBQUM7RUFDN0JJLE9BQU8sRUFBRyxHQUFFSCxTQUFVO0FBRE8sQ0FBRCxDQUE5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stbWFuYWdlbWVudC8uL2FwaXMvaW5kZXgudHM/ZWVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2Vyc0ZhY3RvcnkgfSBmcm9tIFwiLi91c2Vyc0FwaVwiO1xuXG5jb25zdCBCQVNFX1BBVEggPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4gICAgOiBcImh0dHBzOi8vZXVuanUtbW92aWUtYXBwLm5ldGxpZnkuYXBwXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VyQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHsgYmFzZVVSTDogYCR7QkFTRV9QQVRIfS9hcGkvdXNlcnNgIH0pO1xuXG5jb25zdCB1c2Vyc0FQSXMgPSB1c2Vyc0ZhY3Rvcnkoe1xuICBiYXNlVVJMOiBgJHtCQVNFX1BBVEh9L2FwaS91c2Vyc2AsXG59KTtcblxuZXhwb3J0IHsgdXNlcnNBUElzIH07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2Vyc0ZhY3RvcnkiLCJCQVNFX1BBVEgiLCJ1c2VyQ2xpZW50IiwiY3JlYXRlIiwiYmFzZVVSTCIsInVzZXJzQVBJcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./apis/index.ts\n");

/***/ }),

/***/ "(api)/./apis/usersApi.ts":
/*!**************************!*\
  !*** ./apis/usersApi.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersFactory\": () => (/* binding */ usersFactory)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst usersFactory = ({\n  baseURL\n}) => {\n  // NOTE [Create]\n  const createUser = async user => {\n    return await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(baseURL, user, {\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(res => res.data);\n  }; // NOTE [Get]\n\n\n  const readUser = async () => {\n    return (await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(baseURL)).data;\n  };\n\n  return {\n    createUser,\n    readUser\n  };\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcGlzL3VzZXJzQXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFLTyxNQUFNQyxZQUFZLEdBQUcsQ0FBQztFQUFFQztBQUFGLENBQUQsS0FBMkI7RUFDckQ7RUFDQSxNQUFNQyxVQUFVLEdBQUcsTUFBT0MsSUFBUCxJQUF1QjtJQUN4QyxPQUFPLE1BQU1KLGtEQUFBLENBQ0xFLE9BREssRUFDSUUsSUFESixFQUNVO01BQ25CRSxPQUFPLEVBQUU7UUFDUCxnQkFBZ0I7TUFEVDtJQURVLENBRFYsRUFNVkMsSUFOVSxDQU1KQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFOUixDQUFiO0VBT0QsQ0FSRCxDQUZxRCxDQVlyRDs7O0VBQ0EsTUFBTUMsUUFBUSxHQUFHLFlBQVk7SUFDM0IsT0FBTyxDQUFDLE1BQU1WLGlEQUFBLENBQVVFLE9BQVYsQ0FBUCxFQUEyQk8sSUFBbEM7RUFDRCxDQUZEOztFQUlBLE9BQU87SUFDTE4sVUFESztJQUVMTztFQUZLLENBQVA7QUFJRCxDQXJCTSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VtZW50Ly4vYXBpcy91c2Vyc0FwaS50cz84MTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2UvdXNlcnNBcGlcIjtcbmltcG9ydCB7IElGYWN0b3J5IH0gZnJvbSBcIi4vaW50ZXJmYWNlL2FwaUZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJzRmFjdG9yeSA9ICh7IGJhc2VVUkwgfTogSUZhY3RvcnkpID0+IHtcbiAgLy8gTk9URSBbQ3JlYXRlXVxuICBjb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHVzZXI6IElVc2VyKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zXG4gICAgICAucG9zdChiYXNlVVJMLCB1c2VyLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XG4gIH07XG5cbiAgLy8gTk9URSBbR2V0XVxuICBjb25zdCByZWFkVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChiYXNlVVJMKSkuZGF0YTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVVzZXIsXG4gICAgcmVhZFVzZXIsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlcnNGYWN0b3J5IiwiYmFzZVVSTCIsImNyZWF0ZVVzZXIiLCJ1c2VyIiwicG9zdCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlYWRVc2VyIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./apis/usersApi.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis */ \"(api)/./apis/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis__WEBPACK_IMPORTED_MODULE_2__]);\n_apis__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n    name: \"Credentials\",\n    credentials: {\n      userId: {\n        label: \"userId\",\n        type: \"text\",\n        placeholder: \"userId\"\n      },\n      password: {\n        label: \"password\",\n        type: \"password\",\n        placeholder: \"password\"\n      }\n    },\n    authorize: async credentials => {\n      if (!credentials) throw new Error(\"잘못된 정보입니다\");\n      const {\n        userId,\n        password\n      } = credentials;\n      const allUsers = await _apis__WEBPACK_IMPORTED_MODULE_2__.usersAPIs.readUser();\n      const exUser = allUsers.users.filter(user => user.userId === userId)[0];\n\n      if (!exUser) {\n        throw new Error(\"존재하지 않는 아이디입니다\");\n      }\n\n      const pwChecked = password === exUser.password;\n      if (!pwChecked) throw new Error(\"비밀먼호가 일치하지 않습니다\");\n      return exUser;\n    }\n  })],\n  callbacks: {\n    /**\n     * JWT Callback\n     * 웹 토큰은 실행 혹은 업데이트 될 떄마다 콜백이 실행됨\n     * 반환값은 암호화되어 쿠키에 저장됨\n     */\n    jwt: async ({\n      token,\n      user\n    }) => {\n      if (user) token.user = user;\n      return token;\n    },\n\n    /**\n     * Session Callback\n     * ClientSide 에서 NextAuth에 세션을 체크할때마다 실행\n     * 반환값은 useSession을 통해 ClientSide에서 사용됨\n     * JWT토큰 정보를 Session에 유지시킴\n     */\n    session: async ({\n      session,\n      token\n    }) => {\n      session.user = {\n        id: token.user.id,\n        userId: token.user.userId,\n        password: token.user.password\n      };\n      return session;\n    }\n  },\n  pages: {\n    signIn: \"/movieApp/login\"\n  },\n  secret: process.env.NEXTAUTH_SECRET\n}));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlQSxnREFBUSxDQUFDO0VBQ3RCRyxTQUFTLEVBQUUsQ0FDVEYsc0VBQW1CLENBQUM7SUFDbEJHLElBQUksRUFBRSxhQURZO0lBRWxCQyxXQUFXLEVBQUU7TUFDWEMsTUFBTSxFQUFFO1FBQUVDLEtBQUssRUFBRSxRQUFUO1FBQW1CQyxJQUFJLEVBQUUsTUFBekI7UUFBaUNDLFdBQVcsRUFBRTtNQUE5QyxDQURHO01BRVhDLFFBQVEsRUFBRTtRQUNSSCxLQUFLLEVBQUUsVUFEQztRQUVSQyxJQUFJLEVBQUUsVUFGRTtRQUdSQyxXQUFXLEVBQUU7TUFITDtJQUZDLENBRks7SUFVbEJFLFNBQVMsRUFBRSxNQUFPTixXQUFQLElBQXVCO01BQ2hDLElBQUksQ0FBQ0EsV0FBTCxFQUFrQixNQUFNLElBQUlPLEtBQUosQ0FBVSxXQUFWLENBQU47TUFFbEIsTUFBTTtRQUFFTixNQUFGO1FBQVVJO01BQVYsSUFBdUJMLFdBQTdCO01BRUEsTUFBTVEsUUFBUSxHQUFHLE1BQU1YLHFEQUFBLEVBQXZCO01BQ0EsTUFBTWEsTUFBTSxHQUFHRixRQUFRLENBQUNHLEtBQVQsQ0FBZUMsTUFBZixDQUNaQyxJQUFELElBQWVBLElBQUksQ0FBQ1osTUFBTCxLQUFnQkEsTUFEbEIsRUFFYixDQUZhLENBQWY7O01BR0EsSUFBSSxDQUFDUyxNQUFMLEVBQWE7UUFDWCxNQUFNLElBQUlILEtBQUosQ0FBVSxnQkFBVixDQUFOO01BQ0Q7O01BQ0QsTUFBTU8sU0FBUyxHQUFHVCxRQUFRLEtBQUtLLE1BQU0sQ0FBQ0wsUUFBdEM7TUFDQSxJQUFJLENBQUNTLFNBQUwsRUFBZ0IsTUFBTSxJQUFJUCxLQUFKLENBQVUsaUJBQVYsQ0FBTjtNQUVoQixPQUFPRyxNQUFQO0lBQ0Q7RUExQmlCLENBQUQsQ0FEVixDQURXO0VBK0J0QkssU0FBUyxFQUFFO0lBQ1Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtJQUNJQyxHQUFHLEVBQUUsT0FBTztNQUFFQyxLQUFGO01BQVNKO0lBQVQsQ0FBUCxLQUEyQjtNQUM5QixJQUFJQSxJQUFKLEVBQVVJLEtBQUssQ0FBQ0osSUFBTixHQUFhQSxJQUFiO01BQ1YsT0FBT0ksS0FBUDtJQUNELENBVFE7O0lBVVQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0lDLE9BQU8sRUFBRSxPQUFPO01BQUVBLE9BQUY7TUFBV0Q7SUFBWCxDQUFQLEtBQThCO01BQ3JDQyxPQUFPLENBQUNMLElBQVIsR0FBZTtRQUNiTSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0osSUFBTixDQUFXTSxFQURGO1FBRWJsQixNQUFNLEVBQUVnQixLQUFLLENBQUNKLElBQU4sQ0FBV1osTUFGTjtRQUdiSSxRQUFRLEVBQUVZLEtBQUssQ0FBQ0osSUFBTixDQUFXUjtNQUhSLENBQWY7TUFLQSxPQUFPYSxPQUFQO0lBQ0Q7RUF2QlEsQ0EvQlc7RUF3RHRCRSxLQUFLLEVBQUU7SUFDTEMsTUFBTSxFQUFFO0VBREgsQ0F4RGU7RUEyRHRCQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQTNERSxDQUFELENBQXZCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZW1lbnQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyB1c2Vyc0FQSXMgfSBmcm9tIFwiQC9hcGlzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICB1c2VySWQ6IHsgbGFiZWw6IFwidXNlcklkXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJ1c2VySWRcIiB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgIGxhYmVsOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInBhc3N3b3JkXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscykgdGhyb3cgbmV3IEVycm9yKFwi7J6Y66q765CcIOygleuztOyeheuLiOuLpFwiKTtcblxuICAgICAgICBjb25zdCB7IHVzZXJJZCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzO1xuXG4gICAgICAgIGNvbnN0IGFsbFVzZXJzID0gYXdhaXQgdXNlcnNBUElzLnJlYWRVc2VyKCk7XG4gICAgICAgIGNvbnN0IGV4VXNlciA9IGFsbFVzZXJzLnVzZXJzLmZpbHRlcihcbiAgICAgICAgICAodXNlcjogYW55KSA9PiB1c2VyLnVzZXJJZCA9PT0gdXNlcklkXG4gICAgICAgIClbMF07XG4gICAgICAgIGlmICghZXhVc2VyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi7KG07J6s7ZWY7KeAIOyViuuKlCDslYTsnbTrlJTsnoXri4jri6RcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHdDaGVja2VkID0gcGFzc3dvcmQgPT09IGV4VXNlci5wYXNzd29yZDtcbiAgICAgICAgaWYgKCFwd0NoZWNrZWQpIHRocm93IG5ldyBFcnJvcihcIuu5hOuwgOuovO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukXCIpO1xuXG4gICAgICAgIHJldHVybiBleFVzZXI7XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICAvKipcbiAgICAgKiBKV1QgQ2FsbGJhY2tcbiAgICAgKiDsm7kg7Yag7YGw7J2AIOyLpO2WiSDtmLnsnYAg7JeF642w7J207Yq4IOuQoCDrloTrp4jri6Qg7L2c67Cx7J20IOyLpO2WieuQqFxuICAgICAqIOuwmO2ZmOqwkuydgCDslZTtmLjtmZTrkJjslrQg7L+g7YKk7JeQIOyggOyepeuQqFxuICAgICAqL1xuICAgIGp3dDogYXN5bmMgKHsgdG9rZW4sIHVzZXIgfSkgPT4ge1xuICAgICAgaWYgKHVzZXIpIHRva2VuLnVzZXIgPSB1c2VyO1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2Vzc2lvbiBDYWxsYmFja1xuICAgICAqIENsaWVudFNpZGUg7JeQ7IScIE5leHRBdXRo7JeQIOyEuOyFmOydhCDssrTtgaztlaDrlYzrp4jri6Qg7Iuk7ZaJXG4gICAgICog67CY7ZmY6rCS7J2AIHVzZVNlc3Npb27snYQg7Ya17ZW0IENsaWVudFNpZGXsl5DshJwg7IKs7Jqp65CoXG4gICAgICogSldU7Yag7YGwIOygleuztOulvCBTZXNzaW9u7JeQIOycoOyngOyLnO2CtFxuICAgICAqL1xuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcbiAgICAgIHNlc3Npb24udXNlciA9IHtcbiAgICAgICAgaWQ6IHRva2VuLnVzZXIuaWQsXG4gICAgICAgIHVzZXJJZDogdG9rZW4udXNlci51c2VySWQsXG4gICAgICAgIHBhc3N3b3JkOiB0b2tlbi51c2VyLnBhc3N3b3JkLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9tb3ZpZUFwcC9sb2dpblwiLFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInVzZXJzQVBJcyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJJZCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsImFsbFVzZXJzIiwicmVhZFVzZXIiLCJleFVzZXIiLCJ1c2VycyIsImZpbHRlciIsInVzZXIiLCJwd0NoZWNrZWQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJpZCIsInBhZ2VzIiwic2lnbkluIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();