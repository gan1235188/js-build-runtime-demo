/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(/*! express */ "express");
var fs = __webpack_require__(/*! fs */ "fs");
var path = __webpack_require__(/*! path */ "path");
var build = __webpack_require__(/*! js-build-by-feature-map */ "js-build-by-feature-map");
var featureTestCode = __webpack_require__(/*! js-feature-test */ "js-feature-test");
var app = express();
var distPath = path.resolve(__dirname, '../dist/');
var pagesPath = path.resolve(__dirname, '../pages/');
app.listen(81);
app.use(express.static('../'));
app.get('/', function (req, res) {
    setHeader(res, HttpHeaderContentTypeValue.Html);
    res.send('hollow express');
});
app.get('/js-build-online', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cookie, featureMap, content, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                cookie = parseCookie(req.headers.cookie);
                featureMap = JSON.parse(cookie['jsFeatureTest'] || '{}');
                //TODO:防止重复build，识别feature的改变
                return [4 /*yield*/, build.build(featureMap, {
                        entry: path.resolve(__dirname, './test-code.js'),
                        output: {
                            path: __dirname,
                            filename: 'result.js'
                        }
                    })];
            case 1:
                //TODO:防止重复build，识别feature的改变
                _a.sent();
                console.log('build finished');
                content = fs.readFileSync(distPath + '/result.js');
                setHeader(res, HttpHeaderContentTypeValue.Js);
                res.send(content);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.send(JSON.stringify(e_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
function parseCookie(cookies) {
    var cookieMap = {};
    var cookieList = cookies.split(';');
    cookieList.forEach(function (cookie) {
        var _a = cookie.split('='), name = _a[0], value = _a[1];
        name && (cookieMap[name] = value);
    });
    return cookieMap;
}
// app.get('/pages/:path', (req, res) => {
//   const html = fs.readFileSync(`${pagesPath}/${req.params.path}`).toString()
//   setHeader(res, HttpHeaderContentTypeValue.Html)
//   res.send(html)
// })
app.get('/feature-test', function (req, res) {
    var html = fs.readFileSync(pagesPath + '/feature-test.html').toString();
    var script = "<script>" + featureTestCode + "</script>";
    html = html.replace('</body>', script + "</body>");
    setHeader(res, HttpHeaderContentTypeValue.Html);
    res.send(html);
});
// app.get('/dist/:path', (req, res) => {
//   setHeader(res, HttpHeaderContentTypeValue.Js)
//   const jsContent = fs.readFileSync(`${distPath}/${req.params.path}`)
//   res.send(jsContent)
// })
var HttpHeaderKey;
(function (HttpHeaderKey) {
    HttpHeaderKey["ContentType"] = "Content-Type";
})(HttpHeaderKey || (HttpHeaderKey = {}));
var HttpHeaderContentTypeValue;
(function (HttpHeaderContentTypeValue) {
    HttpHeaderContentTypeValue["Html"] = "text/html; charset=utf-8";
    HttpHeaderContentTypeValue["Js"] = "application/javascript; charset=utf-8";
})(HttpHeaderContentTypeValue || (HttpHeaderContentTypeValue = {}));
function setHeader(res, type) {
    res.setHeader(HttpHeaderKey.ContentType, type);
}
function startApp() {
    var server = app.listen(81);
    process.on('beforeExit', exit('beforeExit'));
    process.on('exit', exit('exit'));
    process.on('SIGKILL', exit('SIGKILL'));
    process.on('SIGLOST', exit('SIGLOST'));
    process.on('disconnect', exit('disconnect'));
    process.on('SIGHUP', exit('SIGHUP'));
    process.on('SIGINT', exit('SIGINT'));
    var isKilled = false;
    function exit(event) {
        console.log(event);
        return function () {
            !isKilled && server.close();
            isKilled = true;
            process.exit();
        };
    }
}


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "js-build-by-feature-map":
/*!******************************************!*\
  !*** external "js-build-by-feature-map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-build-by-feature-map");

/***/ }),

/***/ "js-feature-test":
/*!**********************************!*\
  !*** external "js-feature-test" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-feature-test");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });