/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ (() => {

eval("var Main = function () {\n  function Main() {\n    this.canvas = document.getElementById('my-canvas');\n    this.uploadHtmlButtonElement = document.querySelector('#upload-img');\n    this.rotateHtmlButtonElement = document.querySelector('#rotate-img');\n    this.ctx = this.canvas.getContext('2d');\n    this.image = new Image();\n    this.reader = new FileReader();\n    this.rotationAngle = 0;\n    this.imageUploaded = false;\n    this.filters = [];\n    this.loadFilters();\n    console.log(this.filters);\n    this.draw();\n    this.addEventListeners();\n  }\n\n  Main.prototype.addEventListeners = function () {\n    var _this = this;\n\n    this.uploadHtmlButtonElement.addEventListener('change', function (event) {\n      var img = event.currentTarget.files;\n\n      if (img && img.length > 0) {\n        _this.reader.readAsDataURL(img[0]);\n      }\n    });\n    this.canvas.addEventListener('click', function (event) {\n      if (!_this.imageUploaded) {\n        _this.uploadHtmlButtonElement.click();\n\n        _this.imageUploaded = true;\n      }\n    });\n    this.reader.addEventListener('loadend', function (event) {\n      _this.image.src = _this.reader.result;\n    });\n    this.image.addEventListener('load', function () {\n      _this.canvas.width = _this.image.width;\n      _this.canvas.height = _this.image.height;\n\n      _this.draw();\n    });\n    this.rotateHtmlButtonElement.addEventListener('click', function (event) {\n      var _a;\n\n      event.preventDefault();\n      _a = [_this.canvas.height, _this.canvas.width], _this.canvas.width = _a[0], _this.canvas.height = _a[1];\n      _this.rotationAngle += Math.PI / 2;\n\n      _this.draw();\n    });\n    this.filters.forEach(function (filter) {\n      document.getElementById(filter.name).addEventListener('input', function (event) {\n        filter.value = parseFloat(event.currentTarget.value);\n\n        _this.updateLabel(document.querySelector(\"label[for=\\\"\".concat(event.currentTarget.id, \"\\\"]\")), event.currentTarget);\n\n        _this.draw();\n      });\n    });\n  };\n\n  Main.prototype.loadFilters = function () {\n    var _this = this;\n\n    document.querySelectorAll('input[type=\"range\"]').forEach(function (input) {\n      var label = document.querySelector(\"label[for=\\\"\".concat(input.id, \"\\\"]\"));\n\n      _this.updateLabel(label, input);\n\n      _this.filters.push({\n        name: input.id,\n        value: parseFloat(input.value),\n        unit: input.dataset.unit,\n        HtmlInput: input,\n        HtmlLabel: label\n      });\n    });\n  };\n\n  Main.prototype.updateLabel = function (label, input) {\n    label.textContent = \"\".concat(label.dataset.text, \" : \").concat(input.value).concat(input.dataset.unit);\n  };\n\n  Main.prototype.drawBackground = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n  };\n\n  Main.prototype.drawImage = function () {\n    this.ctx.save();\n    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);\n    this.ctx.rotate(this.rotationAngle);\n    this.ctx.drawImage(this.image, -this.canvas.width / 2, -this.canvas.height / 2);\n    this.ctx.restore();\n  };\n\n  Main.prototype.draw = function () {\n    this.ctx.filter = this.filters.map(function (filter) {\n      return \"\".concat(filter.name, \"(\").concat(filter.value).concat(filter.unit, \")\");\n    }).join(' ');\n    console.log(this.ctx.filter);\n    this.drawBackground();\n    this.drawImage();\n  };\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxLQUZpQixFQUVmZSxJQUZlLENBRVYsR0FGVSxDQUFsQjtBQUdBaEQsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1gsR0FBTCxDQUFTaUMsTUFBckI7QUFDQSxTQUFLMEIsY0FBTDtBQUNBLFNBQUtKLFNBQUw7QUFDSCxHQVBEOztBQVFKO0FBQUMsQ0EvR0Q7O0FBaUhBLElBQUl6QyxJQUFKIiwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVwbG9hZEh0bWxCdXR0b25FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInJvdGF0ZUh0bWxCdXR0b25FbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImltYWdlIiwiSW1hZ2UiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicm90YXRpb25BbmdsZSIsImltYWdlVXBsb2FkZWQiLCJmaWx0ZXJzIiwibG9hZEZpbHRlcnMiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiTWFpbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImltZyIsImN1cnJlbnRUYXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIl90aGlzIiwicmVhZEFzRGF0YVVSTCIsImNsaWNrIiwic3JjIiwicmVzdWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwcmV2ZW50RGVmYXVsdCIsIl9hIiwiTWF0aCIsIlBJIiwiZm9yRWFjaCIsImZpbHRlciIsIm5hbWUiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJ1cGRhdGVMYWJlbCIsImlkIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0IiwibGFiZWwiLCJwdXNoIiwidW5pdCIsImRhdGFzZXQiLCJIdG1sSW5wdXQiLCJIdG1sTGFiZWwiLCJ0ZXh0Q29udGVudCIsInRleHQiLCJjb25jYXQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwibWFwIiwiam9pbiIsImRyYXdCYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1lZGl0b3IvLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1haW4ge1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgdXBsb2FkSHRtbEJ1dHRvbkVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRlcjogRmlsZVJlYWRlcjtcbiAgICBwcml2YXRlIHJvdGF0ZUh0bWxCdXR0b25FbGVtZW50OiBIVE1MTGlua0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSByb3RhdGlvbkFuZ2xlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBpbWFnZVVwbG9hZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgZmlsdGVyczogeyBuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHVuaXQ6IHN0cmluZywgSHRtbElucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBIdG1sTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgfVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLnVwbG9hZEh0bWxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZC1pbWcnKTtcbiAgICAgICAgdGhpcy5yb3RhdGVIdG1sQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUtaW1nJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHRoaXMucm90YXRpb25BbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuaW1hZ2VVcGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2FkRmlsdGVycygpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcnMpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBXZSBsaXN0ZW4gdG8gdGhlIGNoYW5nZSBvZiB0aGUgaW5wdXRcbiAgICAgICAgdGhpcy51cGxvYWRIdG1sQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlsZXM7XG4gICAgICAgICAgICBpZiAoaW1nICYmIGltZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkZXIucmVhZEFzRGF0YVVSTChpbWdbMF0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmltYWdlVXBsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZEh0bWxCdXR0b25FbGVtZW50LmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVwbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFdlIGxpc3RlbiB0byB0aGUgbG9hZGluZyBvZiByZWFkZXJcbiAgICAgICAgdGhpcy5yZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLnJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEFuZCBmaW5hbGx5LCB3ZSBsaXN0ZW4gdG8gdGhlIGxvYWRpbmcgb2YgdGhlIGltYWdlXG4gICAgICAgIHRoaXMuaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucm90YXRlSHRtbEJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodF0gPSBbdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aF07XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uQW5nbGUgKz0gTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbHRlci5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBmaWx0ZXIudmFsdWUgPSBwYXJzZUZsb2F0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZXZlbnQuY3VycmVudFRhcmdldC5pZH1cIl1gKSwgZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZEZpbHRlcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYW5nZVwiXScpLmZvckVhY2goKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7aW5wdXQuaWR9XCJdYCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKGxhYmVsLCBpbnB1dCk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0LmlkLCB2YWx1ZTogcGFyc2VGbG9hdChpbnB1dC52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIHVuaXQ6IGlucHV0LmRhdGFzZXQudW5pdCxcbiAgICAgICAgICAgICAgICAgICAgSHRtbElucHV0OiBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgSHRtbExhYmVsOiBsYWJlbFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUxhYmVsKGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50LCBpbnB1dDogSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2xhYmVsLmRhdGFzZXQudGV4dH0gOiAke2lucHV0LnZhbHVlfSR7aW5wdXQuZGF0YXNldC51bml0fWBcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgZHJhd0ltYWdlKCkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUodGhpcy5yb3RhdGlvbkFuZ2xlKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIC10aGlzLmNhbnZhcy53aWR0aCAvIDIsIC10aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbHRlciA9IHRoaXMuZmlsdGVycy5tYXAoKGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAke2ZpbHRlci5uYW1lfSgke2ZpbHRlci52YWx1ZX0ke2ZpbHRlci51bml0fSlgO1xuICAgICAgICB9KS5qb2luKCcgJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3R4LmZpbHRlcik7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5kcmF3SW1hZ2UoKTtcbiAgICB9XG59XG5cbm5ldyBNYWluKCk7Il0sImZpbGUiOiIuL3NyYy9qcy9tYWluLnRzLmpzIn0=\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;