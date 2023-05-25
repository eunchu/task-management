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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst mongoUrl = process.env.MONGODB_URL;\nconst options = {\n  useUnifiedTopology: true,\n  useNewUrlParser: true\n};\n\nif (!mongoUrl) {\n  throw new Error(\"please add your MongoURL to .env.local\");\n}\n\nconst connectToDatabase = async () => {\n  // Connect to cluster\n  const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(mongoUrl, options);\n  await client.connect();\n  const db = client.db(process.env.MONGODB_DB);\n  return {\n    client,\n    db\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHO0VBQ2RDLGtCQUFrQixFQUFFLElBRE47RUFFZEMsZUFBZSxFQUFFO0FBRkgsQ0FBaEI7O0FBS0EsSUFBSSxDQUFDTixRQUFMLEVBQWU7RUFDYixNQUFNLElBQUlPLEtBQUosQ0FBVSx3Q0FBVixDQUFOO0FBQ0Q7O0FBRU0sTUFBTUMsaUJBQWlCLEdBQUcsWUFBWTtFQUMzQztFQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJVixnREFBSixDQUFnQkMsUUFBaEIsRUFBMEJJLE9BQTFCLENBQWY7RUFDQSxNQUFNSyxNQUFNLENBQUNDLE9BQVAsRUFBTjtFQUVBLE1BQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFQLENBQVVWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxVQUF0QixDQUFYO0VBRUEsT0FBTztJQUNMSCxNQURLO0lBRUxFO0VBRkssQ0FBUDtBQUlELENBWE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZW1lbnQvLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgbW9uZ29VcmwgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSTDtcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxufSBhcyBhbnk7XG5cbmlmICghbW9uZ29VcmwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwicGxlYXNlIGFkZCB5b3VyIE1vbmdvVVJMIHRvIC5lbnYubG9jYWxcIik7XG59XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9IGFzeW5jICgpID0+IHtcbiAgLy8gQ29ubmVjdCB0byBjbHVzdGVyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChtb25nb1VybCwgb3B0aW9ucyk7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG5cbiAgY29uc3QgZGIgPSBjbGllbnQuZGIocHJvY2Vzcy5lbnYuTU9OR09EQl9EQik7XG5cbiAgcmV0dXJuIHtcbiAgICBjbGllbnQsXG4gICAgZGIsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwibW9uZ29VcmwiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiLCJvcHRpb25zIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiRXJyb3IiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIk1PTkdPREJfREIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users.ts":
/*!****************************!*\
  !*** ./pages/api/users.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n\n\nconst handler = async (req, res) => {\n  const {\n    db\n  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n  const users = db.collection(\"users\"); // Read\n\n  if (req.method === \"GET\") {\n    const list = await users.find({}).project({\n      _id: 0\n    }).toArray();\n    return res.json({\n      ok: true,\n      message: \"Success\",\n      data: list\n    });\n  } // Create\n\n\n  if (req.method === \"POST\") {\n    const newUser = req.body;\n    await users.insertOne(newUser);\n    res.status(200).json({\n      ok: true,\n      message: \"성공적으로 가입되었습니다 😊\"\n    }); // await tasks.insertOne(newTask, (err, data) => {\n    //   if (err) return console.log(\"err\", err);\n    //   return res.status(200).json({ status: 200, message: \"Success\" });\n    // });\n    // const duplicateUser = await client.user.findFirst({\n    //   where: {\n    //     userId: req.body.userId,\n    //   },\n    // });\n    // if (duplicateUser) {\n    //   res.status(400).json({\n    //     ok: false,\n    //     code: \"duplicate-id\",\n    //     message: \"이미 사용중인 아이디 입니다\",\n    //   });\n    // }\n    // await client.user.create({\n    //   data: req.body,\n    // });\n    // res.json({ ok: true, message: \"성공적으로 가입되었습니다 😊\" });\n  } // Update\n\n\n  if (req.method === \"PUT\") {\n    res.json({\n      ok: true\n    });\n  } // Delete\n\n\n  if (req.method === \"DELETE\") {\n    res.json({\n      ok: true\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTs7QUFHQSxNQUFNQyxPQUFPLEdBQUcsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7RUFDbkUsTUFBTTtJQUFFQztFQUFGLElBQVMsTUFBTUosK0RBQWlCLEVBQXRDO0VBQ0EsTUFBTUssS0FBSyxHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxPQUFkLENBQWQsQ0FGbUUsQ0FJbkU7O0VBQ0EsSUFBSUosR0FBRyxDQUFDSyxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7SUFDeEIsTUFBTUMsSUFBSSxHQUFHLE1BQU1ILEtBQUssQ0FBQ0ksSUFBTixDQUFXLEVBQVgsRUFBZUMsT0FBZixDQUF1QjtNQUFFQyxHQUFHLEVBQUU7SUFBUCxDQUF2QixFQUFtQ0MsT0FBbkMsRUFBbkI7SUFFQSxPQUFPVCxHQUFHLENBQUNVLElBQUosQ0FBUztNQUFFQyxFQUFFLEVBQUUsSUFBTjtNQUFZQyxPQUFPLEVBQUUsU0FBckI7TUFBZ0NDLElBQUksRUFBRVI7SUFBdEMsQ0FBVCxDQUFQO0VBQ0QsQ0FUa0UsQ0FVbkU7OztFQUNBLElBQUlOLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLE1BQW5CLEVBQTJCO0lBQ3pCLE1BQU1VLE9BQU8sR0FBR2YsR0FBRyxDQUFDZ0IsSUFBcEI7SUFFQSxNQUFNYixLQUFLLENBQUNjLFNBQU4sQ0FBZ0JGLE9BQWhCLENBQU47SUFDQWQsR0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JQLElBQWhCLENBQXFCO01BQUVDLEVBQUUsRUFBRSxJQUFOO01BQVlDLE9BQU8sRUFBRTtJQUFyQixDQUFyQixFQUp5QixDQU16QjtJQUNBO0lBRUE7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBO0VBQ0QsQ0F4Q2tFLENBeUNuRTs7O0VBQ0EsSUFBSWIsR0FBRyxDQUFDSyxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7SUFDeEJKLEdBQUcsQ0FBQ1UsSUFBSixDQUFTO01BQUVDLEVBQUUsRUFBRTtJQUFOLENBQVQ7RUFDRCxDQTVDa0UsQ0E2Q25FOzs7RUFDQSxJQUFJWixHQUFHLENBQUNLLE1BQUosS0FBZSxRQUFuQixFQUE2QjtJQUMzQkosR0FBRyxDQUFDVSxJQUFKLENBQVM7TUFBRUMsRUFBRSxFQUFFO0lBQU4sQ0FBVDtFQUNEO0FBQ0YsQ0FqREQ7O0FBbURBLGlFQUFlYixPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VtZW50Ly4vcGFnZXMvYXBpL3VzZXJzLnRzPzg4NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCB7IElVc2VyIH0gZnJvbSBcIkAvYXBpL2ludGVyZmFjZS91c2Vyc0FwaVwiO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IHVzZXJzID0gZGIuY29sbGVjdGlvbihcInVzZXJzXCIpO1xuXG4gIC8vIFJlYWRcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgdXNlcnMuZmluZCh7fSkucHJvamVjdCh7IF9pZDogMCB9KS50b0FycmF5KCk7XG5cbiAgICByZXR1cm4gcmVzLmpzb24oeyBvazogdHJ1ZSwgbWVzc2FnZTogXCJTdWNjZXNzXCIsIGRhdGE6IGxpc3QgfSk7XG4gIH1cbiAgLy8gQ3JlYXRlXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IG5ld1VzZXIgPSByZXEuYm9keSBhcyBJVXNlcjtcblxuICAgIGF3YWl0IHVzZXJzLmluc2VydE9uZShuZXdVc2VyKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG9rOiB0cnVlLCBtZXNzYWdlOiBcIuyEseqzteyggeycvOuhnCDqsIDsnoXrkJjsl4jsirXri4jri6Qg8J+YilwiIH0pO1xuXG4gICAgLy8gYXdhaXQgdGFza3MuaW5zZXJ0T25lKG5ld1Rhc2ssIChlcnIsIGRhdGEpID0+IHtcbiAgICAvLyAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpO1xuXG4gICAgLy8gICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IDIwMCwgbWVzc2FnZTogXCJTdWNjZXNzXCIgfSk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBjb25zdCBkdXBsaWNhdGVVc2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZEZpcnN0KHtcbiAgICAvLyAgIHdoZXJlOiB7XG4gICAgLy8gICAgIHVzZXJJZDogcmVxLmJvZHkudXNlcklkLFxuICAgIC8vICAgfSxcbiAgICAvLyB9KTtcbiAgICAvLyBpZiAoZHVwbGljYXRlVXNlcikge1xuICAgIC8vICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgIC8vICAgICBvazogZmFsc2UsXG4gICAgLy8gICAgIGNvZGU6IFwiZHVwbGljYXRlLWlkXCIsXG4gICAgLy8gICAgIG1lc3NhZ2U6IFwi7J2066+4IOyCrOyaqeykkeyduCDslYTsnbTrlJQg7J6F64uI64ukXCIsXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBhd2FpdCBjbGllbnQudXNlci5jcmVhdGUoe1xuICAgIC8vICAgZGF0YTogcmVxLmJvZHksXG4gICAgLy8gfSk7XG4gICAgLy8gcmVzLmpzb24oeyBvazogdHJ1ZSwgbWVzc2FnZTogXCLshLHqs7XsoIHsnLzroZwg6rCA7J6F65CY7JeI7Iq164uI64ukIPCfmIpcIiB9KTtcbiAgfVxuICAvLyBVcGRhdGVcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUFVUXCIpIHtcbiAgICByZXMuanNvbih7IG9rOiB0cnVlIH0pO1xuICB9XG4gIC8vIERlbGV0ZVxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xuICAgIHJlcy5qc29uKHsgb2s6IHRydWUgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGIiLCJ1c2VycyIsImNvbGxlY3Rpb24iLCJtZXRob2QiLCJsaXN0IiwiZmluZCIsInByb2plY3QiLCJfaWQiLCJ0b0FycmF5IiwianNvbiIsIm9rIiwibWVzc2FnZSIsImRhdGEiLCJuZXdVc2VyIiwiYm9keSIsImluc2VydE9uZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users.ts"));
module.exports = __webpack_exports__;

})();