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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n\n\nconst handler = async (req, res) => {\n  // NOTE 목록\n  const {\n    db\n  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n  const tasks = db.collection(\"tasks\");\n\n  if (req.method === \"GET\") {\n    const list = await (await tasks.find({}).project({\n      _id: 0\n    }).toArray()).sort((a, b) => a.order - b.order);\n    return res.status(200).json({\n      status: 200,\n      message: \"Success\",\n      data: list\n    });\n  } // NOTE 생성\n\n\n  if (req.method === \"POST\") {\n    const newTask = req.body; // await tasks.insertOne(newTask, (err, data) => {\n    //   if (err) return console.log(\"err\", err);\n    //   return res.status(200).json({ status: 200, message: \"Success\" });\n    // });\n  } // NOTE 업데이트\n\n\n  if (req.method === \"PUT\") {\n    await req.body.map(item => tasks.updateOne({\n      id: item.id\n    }, {\n      $set: item\n    }, {\n      upsert: true\n    }));\n    return res.status(200).json({\n      status: 200,\n      message: \"Update is Successfuly\"\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGFzay9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBOztBQUdBLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtFQUNuRTtFQUNBLE1BQU07SUFBRUM7RUFBRixJQUFTLE1BQU1KLCtEQUFpQixFQUF0QztFQUNBLE1BQU1LLEtBQUssR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsT0FBZCxDQUFkOztFQUVBLElBQUlKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLEtBQW5CLEVBQTBCO0lBQ3hCLE1BQU1DLElBQUksR0FBRyxNQUFNLENBQ2pCLE1BQU1ILEtBQUssQ0FBQ0ksSUFBTixDQUFXLEVBQVgsRUFBZUMsT0FBZixDQUF1QjtNQUFFQyxHQUFHLEVBQUU7SUFBUCxDQUF2QixFQUFtQ0MsT0FBbkMsRUFEVyxFQUVqQkMsSUFGaUIsQ0FFWixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUQsQ0FBQyxDQUFDRSxLQUFGLEdBQVVELENBQUMsQ0FBQ0MsS0FGVixDQUFuQjtJQUlBLE9BQU9iLEdBQUcsQ0FDUGMsTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO01BQUVELE1BQU0sRUFBRSxHQUFWO01BQWVFLE9BQU8sRUFBRSxTQUF4QjtNQUFtQ0MsSUFBSSxFQUFFWjtJQUF6QyxDQUZELENBQVA7RUFHRCxDQWJrRSxDQWVuRTs7O0VBQ0EsSUFBSU4sR0FBRyxDQUFDSyxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7SUFDekIsTUFBTWMsT0FBTyxHQUFHbkIsR0FBRyxDQUFDb0IsSUFBcEIsQ0FEeUIsQ0FHekI7SUFDQTtJQUVBO0lBQ0E7RUFDRCxDQXhCa0UsQ0EwQm5FOzs7RUFDQSxJQUFJcEIsR0FBRyxDQUFDSyxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7SUFDeEIsTUFBTUwsR0FBRyxDQUFDb0IsSUFBSixDQUFTQyxHQUFULENBQWNDLElBQUQsSUFDakJuQixLQUFLLENBQUNvQixTQUFOLENBQWdCO01BQUVDLEVBQUUsRUFBRUYsSUFBSSxDQUFDRTtJQUFYLENBQWhCLEVBQWlDO01BQUVDLElBQUksRUFBRUg7SUFBUixDQUFqQyxFQUFpRDtNQUFFSSxNQUFNLEVBQUU7SUFBVixDQUFqRCxDQURJLENBQU47SUFHQSxPQUFPekIsR0FBRyxDQUNQYyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7TUFBRUQsTUFBTSxFQUFFLEdBQVY7TUFBZUUsT0FBTyxFQUFFO0lBQXhCLENBRkQsQ0FBUDtFQUdEO0FBQ0YsQ0FuQ0Q7O0FBb0NBLGlFQUFlbEIsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stbWFuYWdlbWVudC8uL3BhZ2VzL2FwaS90YXNrL2luZGV4LnRzPzlhMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IHsgSVRhc2sgfSBmcm9tIFwiQC9hcGkvaW50ZXJmYWNlL3Rhc2tBcGlcIjtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAvLyBOT1RFIOuqqeuhnVxuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICBjb25zdCB0YXNrcyA9IGRiLmNvbGxlY3Rpb24oXCJ0YXNrc1wiKTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCAoXG4gICAgICBhd2FpdCB0YXNrcy5maW5kKHt9KS5wcm9qZWN0KHsgX2lkOiAwIH0pLnRvQXJyYXkoKVxuICAgICkuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuXG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cygyMDApXG4gICAgICAuanNvbih7IHN0YXR1czogMjAwLCBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiwgZGF0YTogbGlzdCB9KTtcbiAgfVxuXG4gIC8vIE5PVEUg7IOd7ISxXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSByZXEuYm9keSBhcyBJVGFzaztcblxuICAgIC8vIGF3YWl0IHRhc2tzLmluc2VydE9uZShuZXdUYXNrLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgLy8gICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKTtcblxuICAgIC8vICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiAyMDAsIG1lc3NhZ2U6IFwiU3VjY2Vzc1wiIH0pO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgLy8gTk9URSDsl4XrjbDsnbTtirhcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUFVUXCIpIHtcbiAgICBhd2FpdCByZXEuYm9keS5tYXAoKGl0ZW06IGFueSkgPT5cbiAgICAgIHRhc2tzLnVwZGF0ZU9uZSh7IGlkOiBpdGVtLmlkIH0sIHsgJHNldDogaXRlbSB9LCB7IHVwc2VydDogdHJ1ZSB9KVxuICAgICk7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cygyMDApXG4gICAgICAuanNvbih7IHN0YXR1czogMjAwLCBtZXNzYWdlOiBcIlVwZGF0ZSBpcyBTdWNjZXNzZnVseVwiIH0pO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYiIsInRhc2tzIiwiY29sbGVjdGlvbiIsIm1ldGhvZCIsImxpc3QiLCJmaW5kIiwicHJvamVjdCIsIl9pZCIsInRvQXJyYXkiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZGF0YSIsIm5ld1Rhc2siLCJib2R5IiwibWFwIiwiaXRlbSIsInVwZGF0ZU9uZSIsImlkIiwiJHNldCIsInVwc2VydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/task/index.ts\n");

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