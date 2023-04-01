/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../canvas-framework-23/src/ts/Canvas.ts":
/*!***********************************************!*\
  !*** ../canvas-framework-23/src/ts/Canvas.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Canvas = void 0;\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas(canvasElement, dimension) {\n    var _this = this;\n\n    _classCallCheck(this, Canvas);\n\n    this.canvasElement = canvasElement;\n\n    if (dimension !== undefined) {\n      this.height = dimension.height;\n      this.width = dimension.width;\n    } else {\n      this.autoDimension = true;\n      this.width = innerWidth;\n      this.height = window.innerHeight;\n    }\n\n    this.ctx = this.canvasElement.getContext('2d');\n\n    if (this.autoDimension || this.autoDimension) {\n      window.addEventListener('resize', function () {\n        if (_this.autoDimension) {\n          _this.height = innerHeight;\n          _this.width = innerWidth;\n        }\n      });\n    }\n  }\n\n  _createClass(Canvas, [{\n    key: \"height\",\n    get: function get() {\n      return this._height;\n    },\n    set: function set(value) {\n      if (value > 0) {\n        this._height = value;\n        this.canvasElement.height = value;\n      }\n    }\n  }, {\n    key: \"width\",\n    get: function get() {\n      return this._width;\n    },\n    set: function set(value) {\n      if (value > 0) {\n        this._width = value;\n        this.canvasElement.width = value;\n      }\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.ctx.clearRect(0, 0, this.width, this.height);\n    }\n  }]);\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY2FudmFzLWZyYW1ld29yay0yMy9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFFYUEsTTtBQWtDVCxrQkFBWUMsYUFBWixFQUE4Q0MsU0FBOUMsRUFBbUU7QUFBQTs7QUFBQTs7QUFDL0QsU0FBS0QsYUFBTCxHQUFxQkEsYUFBckI7O0FBQ0EsUUFBSUMsU0FBUyxLQUFLQyxTQUFsQixFQUE2QjtBQUN6QixXQUFLQyxNQUFMLEdBQWNGLFNBQVMsQ0FBQ0UsTUFBeEI7QUFDQSxXQUFLQyxLQUFMLEdBQWFILFNBQVMsQ0FBQ0csS0FBdkI7QUFDSCxLQUhELE1BR087QUFDSCxXQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsV0FBS0QsS0FBTCxHQUFhRSxVQUFiO0FBQ0EsV0FBS0gsTUFBTCxHQUFjSSxNQUFNLENBQUNDLFdBQXJCO0FBQ0g7O0FBQ0QsU0FBS0MsR0FBTCxHQUFXLEtBQUtULGFBQUwsQ0FBbUJVLFVBQW5CLENBQThCLElBQTlCLENBQVg7O0FBRUEsUUFBSSxLQUFLTCxhQUFMLElBQXNCLEtBQUtBLGFBQS9CLEVBQThDO0FBQzFDRSxZQUFNLENBQUNJLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQUs7QUFDbkMsWUFBSSxLQUFJLENBQUNOLGFBQVQsRUFBd0I7QUFDcEIsZUFBSSxDQUFDRixNQUFMLEdBQWNLLFdBQWQ7QUFDQSxlQUFJLENBQUNKLEtBQUwsR0FBYUUsVUFBYjtBQUNIO0FBQ0osT0FMRDtBQU1IO0FBQ0o7Ozs7U0FoQ0QsZUFBVTtBQUNOLGFBQU8sS0FBS00sT0FBWjtBQUNILEs7U0FqQkQsYUFBa0JDLEtBQWxCLEVBQStCO0FBQzNCLFVBQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWCxhQUFLRCxPQUFMLEdBQWVDLEtBQWY7QUFDQSxhQUFLYixhQUFMLENBQW1CRyxNQUFuQixHQUE0QlUsS0FBNUI7QUFDSDtBQUNKOzs7U0FjRCxlQUFTO0FBQ0wsYUFBTyxLQUFLQyxNQUFaO0FBQ0gsSztTQWRELGFBQWlCRCxLQUFqQixFQUE4QjtBQUMxQixVQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1gsYUFBS0MsTUFBTCxHQUFjRCxLQUFkO0FBQ0EsYUFBS2IsYUFBTCxDQUFtQkksS0FBbkIsR0FBMkJTLEtBQTNCO0FBQ0g7QUFDSjs7O1dBV0QsaUJBQUs7QUFDRCxXQUFLSixHQUFMLENBQVNNLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS1gsS0FBOUIsRUFBcUMsS0FBS0QsTUFBMUM7QUFDSDs7Ozs7O0FBaENMYSxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWVkaXRvci8uLi9jYW52YXMtZnJhbWV3b3JrLTIzL3NyYy90cy9DYW52YXMudHM/YzBmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpbWVuc2lvbn0gZnJvbSBcIi4vVHlwZXMvRGltZW5zaW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBDYW52YXMge1xuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG4gICAgcHVibGljIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHB1YmxpYyByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dG9EaW1lbnNpb246IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGRpbWVuc2lvbj86IERpbWVuc2lvbikge1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBjYW52YXNFbGVtZW50O1xuICAgICAgICBpZiAoZGltZW5zaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gZGltZW5zaW9uLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBkaW1lbnNpb24ud2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9EaW1lbnNpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGlubmVyV2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9EaW1lbnNpb24gfHwgdGhpcy5hdXRvRGltZW5zaW9uKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9EaW1lbnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IGlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjYW52YXNFbGVtZW50IiwiZGltZW5zaW9uIiwidW5kZWZpbmVkIiwiaGVpZ2h0Iiwid2lkdGgiLCJhdXRvRGltZW5zaW9uIiwiaW5uZXJXaWR0aCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGVpZ2h0IiwidmFsdWUiLCJfd2lkdGgiLCJjbGVhclJlY3QiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../canvas-framework-23/src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Canvas_1 = __webpack_require__(/*! ../../../canvas-framework-23/src/ts/Canvas */ \"../canvas-framework-23/src/ts/Canvas.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar file;\nvar canvasElement = document.getElementById('my-canvas');\nvar canvas = new Canvas_1.Canvas(canvasElement, {\n  width: settings_1.settings.canvas.width,\n  height: settings_1.settings.canvas.height\n});\nvar input = document.getElementById('upload-img');\nvar opacityInput = document.getElementById('opacity');\nvar reader = new FileReader();\nvar image = new Image();\nvar imageLoaded = false;\nvar filters = [];\n\nfunction loadImage(event) {\n  var target = event.currentTarget;\n\n  if (target.files.length === 1) {\n    file = target.files[0];\n    reader.readAsDataURL(file);\n  } else {\n    alert(\"Vous devez charger au moins une image\");\n  }\n}\n\nfunction addEventListeners() {\n  input.addEventListener('change', loadImage);\n  reader.addEventListener('loadend', function (event) {\n    console.log(reader.result);\n    image.src = reader.result;\n  });\n  image.addEventListener('load', function () {\n    if (image.width > settings_1.settings.canvas.maxWidth || image.height > settings_1.settings.canvas.maxHeight) {\n      alert(\"L'image est trop grande max(l\".concat(settings_1.settings.canvas.maxWidth, \",h\").concat(settings_1.settings.canvas.maxHeight, \")\"));\n      imageLoaded = false;\n    } else {\n      canvas.height = image.height;\n      canvas.width = image.width;\n    }\n\n    drawImage();\n    imageLoaded = true;\n  });\n  canvas.canvasElement.addEventListener('click', function () {\n    if (!imageLoaded) {\n      input.click();\n    }\n  });\n  opacityInput.addEventListener('input', function (event) {\n    if (imageLoaded) {\n      canvas.clear();\n      var target = event.currentTarget;\n\n      var _iterator = _createForOfIteratorHelper(filters),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var filter = _step.value;\n\n          if (filter.name === target.id) {\n            filter.value = target.value;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      drawImage();\n    }\n  });\n}\n\nfunction loadFilters() {\n  var _iterator2 = _createForOfIteratorHelper(document.getElementsByClassName('form-range')),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var rangeInput = _step2.value;\n      filters.push({\n        name: rangeInput.id,\n        unit: rangeInput.dataset.unit,\n        value: rangeInput.value\n      });\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}\n\nfunction drawImage() {\n  canvas.ctx.filter = filters.map(function (filter) {\n    return \"\".concat(filter.name, \"(\").concat(filter.value).concat(filter.unit, \")\");\n  }).join(' ');\n  canvas.ctx.drawImage(image, 0, 0);\n}\n\nfunction main() {\n  addEventListeners();\n  loadFilters();\n  drawImage();\n}\n\nmain();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LWVkaXRvci8uL3NyYy90cy9tYWluLnRzP2U4ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuLi8uLi8uLi9jYW52YXMtZnJhbWV3b3JrLTIzL3NyYy90cy9DYW52YXNcIjtcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQge0ZpbHRlcn0gZnJvbSBcIi4vRmlsdGVyXCI7XG5cbmxldCBmaWxlO1xuXG5jb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbmNvbnN0IGNhbnZhczogQ2FudmFzID0gbmV3IENhbnZhcyhjYW52YXNFbGVtZW50LCB7d2lkdGg6IHNldHRpbmdzLmNhbnZhcy53aWR0aCwgaGVpZ2h0OiBzZXR0aW5ncy5jYW52YXMuaGVpZ2h0fSk7XG5jb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWQtaW1nJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IG9wYWNpdHlJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGFjaXR5JykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5jb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xubGV0IGltYWdlTG9hZGVkID0gZmFsc2U7XG5jb25zdCBmaWx0ZXJzOiBGaWx0ZXJbXSA9IFtdO1xuXG5mdW5jdGlvbiBsb2FkSW1hZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGZpbGUgPSB0YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiVm91cyBkZXZleiBjaGFyZ2VyIGF1IG1vaW5zIHVuZSBpbWFnZVwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGxvYWRJbWFnZSk7XG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgIGltYWdlLnNyYyA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xuICAgIH0pO1xuXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgaWYgKGltYWdlLndpZHRoID4gc2V0dGluZ3MuY2FudmFzLm1heFdpZHRoIHx8IGltYWdlLmhlaWdodCA+IHNldHRpbmdzLmNhbnZhcy5tYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIGFsZXJ0KGBMJ2ltYWdlIGVzdCB0cm9wIGdyYW5kZSBtYXgobCR7c2V0dGluZ3MuY2FudmFzLm1heFdpZHRofSxoJHtzZXR0aW5ncy5jYW52YXMubWF4SGVpZ2h0fSlgKTtcbiAgICAgICAgICAgIGltYWdlTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XG5cbiAgICAgICAgfVxuICAgICAgICBkcmF3SW1hZ2UoKTtcbiAgICAgICAgaW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIGNhbnZhcy5jYW52YXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoIWltYWdlTG9hZGVkKSB7XG4gICAgICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBvcGFjaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGltYWdlTG9hZGVkKSB7XG4gICAgICAgICAgICBjYW52YXMuY2xlYXIoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLm5hbWUgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhd0ltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiBsb2FkRmlsdGVycygpIHtcbiAgICBmb3IgKGNvbnN0IHJhbmdlSW5wdXQgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1yYW5nZScpKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZmlsdGVycy5wdXNoKHtuYW1lOiByYW5nZUlucHV0LmlkLCB1bml0OiByYW5nZUlucHV0LmRhdGFzZXQudW5pdCwgdmFsdWU6IHJhbmdlSW5wdXQudmFsdWV9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdJbWFnZSgpIHtcbiAgICBjYW52YXMuY3R4LmZpbHRlciA9IGZpbHRlcnMubWFwKChmaWx0ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke2ZpbHRlci5uYW1lfSgke2ZpbHRlci52YWx1ZX0ke2ZpbHRlci51bml0fSlgO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgICBjYW52YXMuY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG59XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBsb2FkRmlsdGVycygpO1xuICAgIGRyYXdJbWFnZSgpO1xufVxuXG5tYWluKCk7Il0sIm5hbWVzIjpbImZpbGUiLCJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsIkNhbnZhc18xIiwid2lkdGgiLCJzZXR0aW5nc18xIiwiaGVpZ2h0IiwiaW5wdXQiLCJvcGFjaXR5SW5wdXQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiaW1hZ2UiLCJJbWFnZSIsImltYWdlTG9hZGVkIiwiZmlsdGVycyIsImxvYWRJbWFnZSIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwicmVhZEFzRGF0YVVSTCIsImFsZXJ0IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInNyYyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiZHJhd0ltYWdlIiwiY2xpY2siLCJjbGVhciIsImZpbHRlciIsIm5hbWUiLCJpZCIsInZhbHVlIiwibG9hZEZpbHRlcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmFuZ2VJbnB1dCIsInB1c2giLCJ1bml0IiwiZGF0YXNldCIsImN0eCIsIm1hcCIsImpvaW4iLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    width: 500,\n    height: 300,\n    maxWidth: 800,\n    maxHeight: 500\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWFBLGdCQUFBQSxHQUFXO0FBQ3BCQyxRQUFNLEVBQUU7QUFDSkMsU0FBSyxFQUFFLEdBREg7QUFFSkMsVUFBTSxFQUFFLEdBRko7QUFHSkMsWUFBUSxFQUFFLEdBSE47QUFJSkMsYUFBUyxFQUFFO0FBSlA7QUFEWSxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtZWRpdG9yLy4vc3JjL3RzL3NldHRpbmdzLnRzPzc0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGNhbnZhczoge1xuICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgbWF4V2lkdGg6IDgwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MDBcbiAgICB9XG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtZWRpdG9yLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2Y3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkimage_editor"] = self["webpackChunkimage_editor"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;