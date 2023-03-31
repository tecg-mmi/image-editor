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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Canvas_1 = __webpack_require__(/*! ../../../canvas-framework-23/src/ts/Canvas */ \"../canvas-framework-23/src/ts/Canvas.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar file;\nvar canvasElement = document.getElementById('my-canvas');\nvar canvas = new Canvas_1.Canvas(canvasElement, {\n  width: settings_1.settings.canvas.width,\n  height: settings_1.settings.canvas.height\n});\nvar input = document.getElementById('upload-img');\nvar reader = new FileReader();\nvar image = new Image();\nvar imageLoaded = false;\n\nfunction loadImage(event) {\n  var target = event.target;\n\n  if (target.files.length === 1) {\n    file = target.files[0];\n    reader.readAsDataURL(file);\n  } else {\n    alert(\"Vous devez charger au moins une image\");\n  }\n}\n\nfunction addEventListeners() {\n  input.addEventListener('change', loadImage);\n  reader.addEventListener('loadend', function (event) {\n    console.log(reader.result);\n    image.src = reader.result;\n  });\n  image.addEventListener('load', function () {\n    if (image.width > settings_1.settings.canvas.maxWidth || image.height > settings_1.settings.canvas.maxHeight) {\n      alert(\"L'image est trop grande max(l\".concat(settings_1.settings.canvas.maxWidth, \",h\").concat(settings_1.settings.canvas.maxHeight, \")\"));\n      imageLoaded = false;\n    } else {\n      canvas.height = image.height;\n      canvas.width = image.width;\n    }\n\n    canvas.ctx.drawImage(image, 0, 0);\n    imageLoaded = true;\n  });\n  canvas.canvasElement.addEventListener('click', function () {\n    if (!imageLoaded) {\n      input.click();\n    }\n  });\n}\n\nfunction main() {\n  addEventListeners();\n}\n\nmain();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFJQSxJQUFKO0FBRUEsSUFBTUMsYUFBYSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQXpDO0FBQ0EsSUFBTUMsTUFBTSxHQUFXLElBQUlDLGVBQUosQ0FBV0osYUFBWCxFQUEwQjtBQUFDSyxPQUFLLEVBQUVDLG9CQUFTSCxNQUFULENBQWdCRSxLQUF4QjtBQUErQkUsUUFBTSxFQUFFRCxvQkFBU0gsTUFBVCxDQUFnQkk7QUFBdkQsQ0FBMUIsQ0FBdkI7QUFDQSxJQUFNQyxLQUFLLEdBQXFCUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBaEM7QUFDQSxJQUFNTyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDtBQUNBLElBQUlDLFdBQVcsR0FBRyxLQUFsQjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUErQjtBQUMzQixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBckI7O0FBQ0EsTUFBSUEsTUFBTSxDQUFDQyxLQUFQLENBQWFDLE1BQWIsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDM0JuQixRQUFJLEdBQUdpQixNQUFNLENBQUNDLEtBQVAsQ0FBYSxDQUFiLENBQVA7QUFDQVIsVUFBTSxDQUFDVSxhQUFQLENBQXFCcEIsSUFBckI7QUFDSCxHQUhELE1BR087QUFDSHFCLFNBQUssQ0FBQyx1Q0FBRCxDQUFMO0FBQ0g7QUFDSjs7QUFFRCxTQUFTQyxpQkFBVCxHQUEwQjtBQUN0QmIsT0FBSyxDQUFDYyxnQkFBTixDQUF1QixRQUF2QixFQUFpQ1IsU0FBakM7QUFDQUwsUUFBTSxDQUFDYSxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDUCxLQUFELEVBQXlCO0FBQ3hEUSxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsTUFBTSxDQUFDZ0IsTUFBbkI7QUFDQWQsU0FBSyxDQUFDZSxHQUFOLEdBQVlqQixNQUFNLENBQUNnQixNQUFuQjtBQUNILEdBSEQ7QUFLQWQsT0FBSyxDQUFDVyxnQkFBTixDQUF1QixNQUF2QixFQUErQixZQUFLO0FBQ2hDLFFBQUlYLEtBQUssQ0FBQ04sS0FBTixHQUFjQyxvQkFBU0gsTUFBVCxDQUFnQndCLFFBQTlCLElBQTBDaEIsS0FBSyxDQUFDSixNQUFOLEdBQWVELG9CQUFTSCxNQUFULENBQWdCeUIsU0FBN0UsRUFBd0Y7QUFDcEZSLFdBQUssd0NBQWlDZCxvQkFBU0gsTUFBVCxDQUFnQndCLFFBQWpELGVBQThEckIsb0JBQVNILE1BQVQsQ0FBZ0J5QixTQUE5RSxPQUFMO0FBQ0FmLGlCQUFXLEdBQUcsS0FBZDtBQUNILEtBSEQsTUFHTztBQUNIVixZQUFNLENBQUNJLE1BQVAsR0FBZ0JJLEtBQUssQ0FBQ0osTUFBdEI7QUFDQUosWUFBTSxDQUFDRSxLQUFQLEdBQWVNLEtBQUssQ0FBQ04sS0FBckI7QUFFSDs7QUFDREYsVUFBTSxDQUFDMEIsR0FBUCxDQUFXQyxTQUFYLENBQXFCbkIsS0FBckIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDQUUsZUFBVyxHQUFHLElBQWQ7QUFDSCxHQVhEO0FBWUFWLFFBQU0sQ0FBQ0gsYUFBUCxDQUFxQnNCLGdCQUFyQixDQUFzQyxPQUF0QyxFQUErQyxZQUFLO0FBQ2hELFFBQUksQ0FBQ1QsV0FBTCxFQUFrQjtBQUNkTCxXQUFLLENBQUN1QixLQUFOO0FBQ0g7QUFDSixHQUpEO0FBS0g7O0FBRUQsU0FBU0MsSUFBVCxHQUFhO0FBQ1RYLG1CQUFpQjtBQUNwQjs7QUFFRFcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWVkaXRvci8uL3NyYy90cy9tYWluLnRzP2U4ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuLi8uLi8uLi9jYW52YXMtZnJhbWV3b3JrLTIzL3NyYy90cy9DYW52YXNcIjtcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmxldCBmaWxlO1xuXG5jb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbmNvbnN0IGNhbnZhczogQ2FudmFzID0gbmV3IENhbnZhcyhjYW52YXNFbGVtZW50LCB7d2lkdGg6IHNldHRpbmdzLmNhbnZhcy53aWR0aCwgaGVpZ2h0OiBzZXR0aW5ncy5jYW52YXMuaGVpZ2h0fSk7XG5jb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWQtaW1nJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5jb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xubGV0IGltYWdlTG9hZGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGxvYWRJbWFnZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBmaWxlID0gdGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlZvdXMgZGV2ZXogY2hhcmdlciBhdSBtb2lucyB1bmUgaW1hZ2VcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBsb2FkSW1hZ2UpO1xuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICBpbWFnZS5zcmMgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcbiAgICB9KTtcblxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZS53aWR0aCA+IHNldHRpbmdzLmNhbnZhcy5tYXhXaWR0aCB8fCBpbWFnZS5oZWlnaHQgPiBzZXR0aW5ncy5jYW52YXMubWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICBhbGVydChgTCdpbWFnZSBlc3QgdHJvcCBncmFuZGUgbWF4KGwke3NldHRpbmdzLmNhbnZhcy5tYXhXaWR0aH0saCR7c2V0dGluZ3MuY2FudmFzLm1heEhlaWdodH0pYCk7XG4gICAgICAgICAgICBpbWFnZUxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuXG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICBpbWFnZUxvYWRlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgY2FudmFzLmNhbnZhc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xufVxuXG5tYWluKCk7Il0sIm5hbWVzIjpbImZpbGUiLCJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsIkNhbnZhc18xIiwid2lkdGgiLCJzZXR0aW5nc18xIiwiaGVpZ2h0IiwiaW5wdXQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiaW1hZ2UiLCJJbWFnZSIsImltYWdlTG9hZGVkIiwibG9hZEltYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInJlYWRBc0RhdGFVUkwiLCJhbGVydCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJzcmMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImN0eCIsImRyYXdJbWFnZSIsImNsaWNrIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

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