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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Canvas_1 = __webpack_require__(/*! ../../../canvas-framework-23/src/ts/Canvas */ \"../canvas-framework-23/src/ts/Canvas.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar file;\nvar reader = new FileReader();\nvar image = new Image();\n\nfunction loadImage(event) {\n  var target = event.target;\n\n  if (target.files.length === 1) {\n    file = target.files[0];\n    reader.readAsDataURL(file);\n  } else {\n    alert(\"Vous devez charger au moins une image\");\n  }\n}\n\nfunction main() {\n  var canvasElement = document.getElementById('my-canvas');\n  var canvas = new Canvas_1.Canvas(canvasElement, {\n    width: settings_1.settings.canvas.width,\n    height: settings_1.settings.canvas.height\n  });\n  var input = document.getElementById('upload-img');\n  input.addEventListener('change', loadImage);\n  reader.addEventListener('loadend', function (event) {\n    console.log(reader.result);\n    image.src = reader.result;\n  });\n  image.addEventListener('load', function () {\n    if (image.width > settings_1.settings.canvas.maxWidth || image.height > settings_1.settings.canvas.maxHeight) {\n      alert(\"L'image est trop grande max(l\".concat(settings_1.settings.canvas.maxWidth, \",h\").concat(settings_1.settings.canvas.maxHeight, \")\"));\n    } else {\n      canvas.height = image.height;\n      canvas.width = image.width;\n    }\n\n    canvas.ctx.drawImage(image, 0, 0);\n  });\n}\n\nmain();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFJQSxJQUFKO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQ7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBK0I7QUFDM0IsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCOztBQUNBLE1BQUlBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxNQUFiLEtBQXdCLENBQTVCLEVBQStCO0FBQzNCVCxRQUFJLEdBQUdPLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLENBQWIsQ0FBUDtBQUNBUCxVQUFNLENBQUNTLGFBQVAsQ0FBcUJWLElBQXJCO0FBQ0gsR0FIRCxNQUdPO0FBQ0hXLFNBQUssQ0FBQyx1Q0FBRCxDQUFMO0FBQ0g7QUFFSjs7QUFFRCxTQUFTQyxJQUFULEdBQWE7QUFDVCxNQUFNQyxhQUFhLEdBQXNCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBekM7QUFDQSxNQUFNQyxNQUFNLEdBQVcsSUFBSUMsZUFBSixDQUFXSixhQUFYLEVBQTBCO0FBQUNLLFNBQUssRUFBRUMsb0JBQVNILE1BQVQsQ0FBZ0JFLEtBQXhCO0FBQStCRSxVQUFNLEVBQUVELG9CQUFTSCxNQUFULENBQWdCSTtBQUF2RCxHQUExQixDQUF2QjtBQUNBLE1BQU1DLEtBQUssR0FBcUJQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFoQztBQUVBTSxPQUFLLENBQUNDLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDakIsU0FBakM7QUFDQUosUUFBTSxDQUFDcUIsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBQ2hCLEtBQUQsRUFBeUI7QUFDeERpQixXQUFPLENBQUNDLEdBQVIsQ0FBWXZCLE1BQU0sQ0FBQ3dCLE1BQW5CO0FBQ0F0QixTQUFLLENBQUN1QixHQUFOLEdBQVl6QixNQUFNLENBQUN3QixNQUFuQjtBQUNILEdBSEQ7QUFJQXRCLE9BQUssQ0FBQ21CLGdCQUFOLENBQXVCLE1BQXZCLEVBQStCLFlBQUs7QUFDaEMsUUFBSW5CLEtBQUssQ0FBQ2UsS0FBTixHQUFjQyxvQkFBU0gsTUFBVCxDQUFnQlcsUUFBOUIsSUFBMEN4QixLQUFLLENBQUNpQixNQUFOLEdBQWVELG9CQUFTSCxNQUFULENBQWdCWSxTQUE3RSxFQUF3RjtBQUNwRmpCLFdBQUssd0NBQWlDUSxvQkFBU0gsTUFBVCxDQUFnQlcsUUFBakQsZUFBOERSLG9CQUFTSCxNQUFULENBQWdCWSxTQUE5RSxPQUFMO0FBQ0gsS0FGRCxNQUVPO0FBQ0haLFlBQU0sQ0FBQ0ksTUFBUCxHQUFnQmpCLEtBQUssQ0FBQ2lCLE1BQXRCO0FBQ0FKLFlBQU0sQ0FBQ0UsS0FBUCxHQUFlZixLQUFLLENBQUNlLEtBQXJCO0FBRUg7O0FBQ0RGLFVBQU0sQ0FBQ2EsR0FBUCxDQUFXQyxTQUFYLENBQXFCM0IsS0FBckIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDSCxHQVREO0FBV0g7O0FBRURTLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1lZGl0b3IvLi9zcmMvdHMvbWFpbi50cz9lODg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi4vLi4vLi4vY2FudmFzLWZyYW1ld29yay0yMy9zcmMvdHMvQ2FudmFzXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5sZXQgZmlsZTtcbmNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5jb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG5mdW5jdGlvbiBsb2FkSW1hZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5maWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZmlsZSA9IHRhcmdldC5maWxlc1swXTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJWb3VzIGRldmV6IGNoYXJnZXIgYXUgbW9pbnMgdW5lIGltYWdlXCIpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGNhbnZhczogQ2FudmFzID0gbmV3IENhbnZhcyhjYW52YXNFbGVtZW50LCB7d2lkdGg6IHNldHRpbmdzLmNhbnZhcy53aWR0aCwgaGVpZ2h0OiBzZXR0aW5ncy5jYW52YXMuaGVpZ2h0fSk7XG4gICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkLWltZycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBsb2FkSW1hZ2UpO1xuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICBpbWFnZS5zcmMgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcbiAgICB9KTtcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBpZiAoaW1hZ2Uud2lkdGggPiBzZXR0aW5ncy5jYW52YXMubWF4V2lkdGggfHwgaW1hZ2UuaGVpZ2h0ID4gc2V0dGluZ3MuY2FudmFzLm1heEhlaWdodCkge1xuICAgICAgICAgICAgYWxlcnQoYEwnaW1hZ2UgZXN0IHRyb3AgZ3JhbmRlIG1heChsJHtzZXR0aW5ncy5jYW52YXMubWF4V2lkdGh9LGgke3NldHRpbmdzLmNhbnZhcy5tYXhIZWlnaHR9KWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuXG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgIH0pO1xuXG59XG5cbm1haW4oKTsiXSwibmFtZXMiOlsiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJpbWFnZSIsIkltYWdlIiwibG9hZEltYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInJlYWRBc0RhdGFVUkwiLCJhbGVydCIsIm1haW4iLCJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsIkNhbnZhc18xIiwid2lkdGgiLCJzZXR0aW5nc18xIiwiaGVpZ2h0IiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInNyYyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY3R4IiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

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