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
exports.id = "pages/api/task";
exports.ids = ["pages/api/task"];
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

/***/ "(api)/./pages/api/task/index.ts":
/*!*********************************!*\
  !*** ./pages/api/task/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n\n\nconst handler = async (req, res) => {\n  const {\n    db\n  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n  const tasks = db.collection(\"tasks\");\n\n  if (req.method === \"GET\") {\n    const list = await (await tasks.find({}).project({\n      _id: 0\n    }).toArray()).sort((a, b) => a.order - b.order);\n    return res.status(200).json({\n      status: 200,\n      message: \"Success\",\n      data: list\n    });\n  } // NOTE 생성\n\n\n  if (req.method === \"POST\") {\n    const newTask = req.body; // await tasks.insertOne(newTask, (err, data) => {\n    //   if (err) return console.log(\"err\", err);\n    //   return res.status(200).json({ status: 200, message: \"Success\" });\n    // });\n  } // NOTE 업데이트\n\n\n  if (req.method === \"PUT\") {\n    await req.body.map(item => tasks.updateOne({\n      id: item.id\n    }, {\n      $set: item\n    }, {\n      upsert: true\n    }));\n    return res.status(200).json({\n      status: 200,\n      message: \"Update is Successfuly\"\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGFzay9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBOztBQUdBLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtFQUNuRSxNQUFNO0lBQUVDO0VBQUYsSUFBUyxNQUFNSiwrREFBaUIsRUFBdEM7RUFDQSxNQUFNSyxLQUFLLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLE9BQWQsQ0FBZDs7RUFFQSxJQUFJSixHQUFHLENBQUNLLE1BQUosS0FBZSxLQUFuQixFQUEwQjtJQUN4QixNQUFNQyxJQUFJLEdBQUcsTUFBTSxDQUNqQixNQUFNSCxLQUFLLENBQUNJLElBQU4sQ0FBVyxFQUFYLEVBQWVDLE9BQWYsQ0FBdUI7TUFBRUMsR0FBRyxFQUFFO0lBQVAsQ0FBdkIsRUFBbUNDLE9BQW5DLEVBRFcsRUFFakJDLElBRmlCLENBRVosQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVELENBQUMsQ0FBQ0UsS0FBRixHQUFVRCxDQUFDLENBQUNDLEtBRlYsQ0FBbkI7SUFJQSxPQUFPYixHQUFHLENBQ1BjLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztNQUFFRCxNQUFNLEVBQUUsR0FBVjtNQUFlRSxPQUFPLEVBQUUsU0FBeEI7TUFBbUNDLElBQUksRUFBRVo7SUFBekMsQ0FGRCxDQUFQO0VBR0QsQ0Faa0UsQ0FjbkU7OztFQUNBLElBQUlOLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLE1BQW5CLEVBQTJCO0lBQ3pCLE1BQU1jLE9BQU8sR0FBR25CLEdBQUcsQ0FBQ29CLElBQXBCLENBRHlCLENBR3pCO0lBQ0E7SUFFQTtJQUNBO0VBQ0QsQ0F2QmtFLENBeUJuRTs7O0VBQ0EsSUFBSXBCLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLEtBQW5CLEVBQTBCO0lBQ3hCLE1BQU1MLEdBQUcsQ0FBQ29CLElBQUosQ0FBU0MsR0FBVCxDQUFjQyxJQUFELElBQ2pCbkIsS0FBSyxDQUFDb0IsU0FBTixDQUFnQjtNQUFFQyxFQUFFLEVBQUVGLElBQUksQ0FBQ0U7SUFBWCxDQUFoQixFQUFpQztNQUFFQyxJQUFJLEVBQUVIO0lBQVIsQ0FBakMsRUFBaUQ7TUFBRUksTUFBTSxFQUFFO0lBQVYsQ0FBakQsQ0FESSxDQUFOO0lBR0EsT0FBT3pCLEdBQUcsQ0FDUGMsTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO01BQUVELE1BQU0sRUFBRSxHQUFWO01BQWVFLE9BQU8sRUFBRTtJQUF4QixDQUZELENBQVA7RUFHRDtBQUNGLENBbENEOztBQW1DQSxpRUFBZWxCLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZW1lbnQvLi9wYWdlcy9hcGkvdGFzay9pbmRleC50cz85YTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCB7IElUYXNrIH0gZnJvbSBcIkAvYXBpL2ludGVyZmFjZS90YXNrQXBpXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgdGFza3MgPSBkYi5jb2xsZWN0aW9uKFwidGFza3NcIik7XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgKFxuICAgICAgYXdhaXQgdGFza3MuZmluZCh7fSkucHJvamVjdCh7IF9pZDogMCB9KS50b0FycmF5KClcbiAgICApLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblxuICAgIHJldHVybiByZXNcbiAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgLmpzb24oeyBzdGF0dXM6IDIwMCwgbWVzc2FnZTogXCJTdWNjZXNzXCIsIGRhdGE6IGxpc3QgfSk7XG4gIH1cblxuICAvLyBOT1RFIOyDneyEsVxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gcmVxLmJvZHkgYXMgSVRhc2s7XG5cbiAgICAvLyBhd2FpdCB0YXNrcy5pbnNlcnRPbmUobmV3VGFzaywgKGVyciwgZGF0YSkgPT4ge1xuICAgIC8vICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycik7XG5cbiAgICAvLyAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogMjAwLCBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiB9KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIC8vIE5PVEUg7JeF642w7J207Yq4XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBVVFwiKSB7XG4gICAgYXdhaXQgcmVxLmJvZHkubWFwKChpdGVtOiBhbnkpID0+XG4gICAgICB0YXNrcy51cGRhdGVPbmUoeyBpZDogaXRlbS5pZCB9LCB7ICRzZXQ6IGl0ZW0gfSwgeyB1cHNlcnQ6IHRydWUgfSlcbiAgICApO1xuICAgIHJldHVybiByZXNcbiAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgLmpzb24oeyBzdGF0dXM6IDIwMCwgbWVzc2FnZTogXCJVcGRhdGUgaXMgU3VjY2Vzc2Z1bHlcIiB9KTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGIiLCJ0YXNrcyIsImNvbGxlY3Rpb24iLCJtZXRob2QiLCJsaXN0IiwiZmluZCIsInByb2plY3QiLCJfaWQiLCJ0b0FycmF5Iiwic29ydCIsImEiLCJiIiwib3JkZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImRhdGEiLCJuZXdUYXNrIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJ1cGRhdGVPbmUiLCJpZCIsIiRzZXQiLCJ1cHNlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/task/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/task/index.ts"));
module.exports = __webpack_exports__;

})();