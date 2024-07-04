require('source-map-support/register');
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! exports provided: sequelize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequelize", function() { return sequelize; });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);

const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__["Sequelize"]({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

/***/ }),

/***/ "./src/config/multerCfg.js":
/*!*********************************!*\
  !*** ./src/config/multerCfg.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ "multer");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const storage = multer__WEBPACK_IMPORTED_MODULE_0___default.a.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} - ${file.originalname}`);
  }
});
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path__WEBPACK_IMPORTED_MODULE_1___default.a.extname(file.originalname).toLowerCase());
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};
const upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
});
/* harmony default export */ __webpack_exports__["default"] = (upload);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/database */ "./src/config/database.js");
/* harmony import */ var _routes_bookRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/bookRoute */ "./src/routes/bookRoute.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);




const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = 5678;
//middleware
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve();
app.use("/uploads", express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, "updloads")));
//Routes
app.use('/api/books', _routes_bookRoute__WEBPACK_IMPORTED_MODULE_2__["router"]);
_config_database__WEBPACK_IMPORTED_MODULE_1__["sequelize"].sync().then(() => {
  console.log(`[Dababase] is runing successfull `);
  app.listen(port, () => console.log(`Server is Running at: http://localhost:${port}`));
});

/***/ }),

/***/ "./src/models/BookModel.js":
/*!*********************************!*\
  !*** ./src/models/BookModel.js ***!
  \*********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/database */ "./src/config/database.js");


const Book = _config_database__WEBPACK_IMPORTED_MODULE_1__["sequelize"].define('book', {
  title: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].STRING,
    allowNull: false
  },
  author: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].STRING,
    allowNull: false
  },
  genre: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].STRING,
    allowNull: false
  },
  year: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].INTEGER,
    allowNull: false
  },
  image: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].STRING,
    allowNull: true
  }
});

/***/ }),

/***/ "./src/routes/bookRoute.js":
/*!*********************************!*\
  !*** ./src/routes/bookRoute.js ***!
  \*********************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_BookModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/BookModel */ "./src/models/BookModel.js");
/* harmony import */ var _config_multerCfg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/multerCfg */ "./src/config/multerCfg.js");



const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.get('/', async (req, res) => {
  try {
    const books = await _models_BookModel__WEBPACK_IMPORTED_MODULE_1__["Book"].findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json("Error fetching books");
  }
});
router.post("/", _config_multerCfg__WEBPACK_IMPORTED_MODULE_2__["default"].single("image"), async (req, res) => {
  try {
    const {
      title,
      author,
      genre,
      year
    } = req.body;
    const image = req.file ? req.file.path : null;
    const newBook = await _models_BookModel__WEBPACK_IMPORTED_MODULE_1__["Book"].create({
      title,
      author,
      genre,
      year,
      image
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json("Error adding books");
  }
});
router.put("/:id", _config_multerCfg__WEBPACK_IMPORTED_MODULE_2__["default"].single("image"), async (req, res) => {
  try {
    const book = await _models_BookModel__WEBPACK_IMPORTED_MODULE_1__["Book"].findByPk(req.params.id);
    if (!book) res.status(404).json("Book not found");
    const {
      title,
      author,
      genre,
      year
    } = req.body;
    const image = req.file ? req.file.path : book.image;
    await book.update({
      title,
      author,
      genre,
      year,
      image
    });
    res.json({
      message: "Book successfully updated",
      book
    });
  } catch (error) {
    res.status(500).json("Eror updating book");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const book = await _models_BookModel__WEBPACK_IMPORTED_MODULE_1__["Book"].findByPk(req.params.id);
    if (!book) {
      res.status(404).json("Book not found");
    }
    res.json(book);
  } catch (error) {
    res.status(500).json("Error fetching book");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const book = await _models_BookModel__WEBPACK_IMPORTED_MODULE_1__["Book"].findByPk(req.params.id);
    if (!book) {
      res.status(404).json("Book not found");
    }
    await book.destroy(book);
    res.json("Book successfully deleted");
  } catch (error) {
    res.status(500).json("Error deleting book", error);
  }
});

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tbbar\Documents\js\book-management\src/index.js */"./src/index.js");


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=main.map