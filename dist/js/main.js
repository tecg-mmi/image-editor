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

eval("var Main = function () {\n  function Main() {\n    this.canvas = document.getElementById('my-canvas');\n    this.uploadHtmlButtonElement = document.querySelector('#upload-img');\n    this.rotateHtmlButtonElement = document.querySelector('#rotate-img');\n    this.ctx = this.canvas.getContext('2d');\n    this.image = new Image();\n    this.reader = new FileReader();\n    this.rotationAngle = 0;\n    this.imageUploaded = false;\n    this.filters = [];\n    this.loadFilters();\n    this.draw();\n    this.addEventListeners();\n  }\n\n  Main.prototype.addEventListeners = function () {\n    var _this = this;\n\n    this.uploadHtmlButtonElement.addEventListener('change', function (event) {\n      var img = event.currentTarget.files;\n\n      if (img && img.length > 0) {\n        _this.reader.readAsDataURL(img[0]);\n      }\n    });\n    this.canvas.addEventListener('click', function (event) {\n      if (!_this.imageUploaded) {\n        _this.uploadHtmlButtonElement.click();\n\n        _this.imageUploaded = true;\n      }\n    });\n    this.reader.addEventListener('loadend', function (event) {\n      _this.image.src = _this.reader.result;\n    });\n    this.image.addEventListener('load', function () {\n      _this.canvas.width = _this.image.width;\n      _this.canvas.height = _this.image.height;\n\n      _this.draw();\n    });\n    this.rotateHtmlButtonElement.addEventListener('click', function (event) {\n      var _a;\n\n      event.preventDefault();\n      _a = [_this.canvas.height, _this.canvas.width], _this.canvas.width = _a[0], _this.canvas.height = _a[1];\n      _this.rotationAngle += Math.PI / 2;\n\n      _this.draw();\n    });\n    this.filters.forEach(function (filter) {\n      document.getElementById(filter.name).addEventListener('input', function (event) {\n        filter.value = parseFloat(event.currentTarget.value);\n\n        _this.updateLabel(document.querySelector(\"label[for=\\\"\".concat(event.currentTarget.id, \"\\\"]\")), event.currentTarget);\n\n        _this.draw();\n      });\n    });\n  };\n\n  Main.prototype.loadFilters = function () {\n    var _this = this;\n\n    document.querySelectorAll('input[type=\"range\"]').forEach(function (input) {\n      var label = document.querySelector(\"label[for=\\\"\".concat(input.id, \"\\\"]\"));\n\n      _this.updateLabel(label, input);\n\n      _this.filters.push({\n        name: input.id,\n        value: parseFloat(input.value),\n        unit: input.dataset.unit,\n        HtmlInput: input,\n        HtmlLabel: label\n      });\n    });\n  };\n\n  Main.prototype.updateLabel = function (label, input) {\n    label.textContent = \"\".concat(label.dataset.text, \" : \").concat(input.value).concat(input.dataset.unit);\n  };\n\n  Main.prototype.drawBackground = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n  };\n\n  Main.prototype.drawImage = function () {\n    this.ctx.save();\n    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);\n    this.ctx.rotate(this.rotationAngle);\n    this.ctx.drawImage(this.image, -this.canvas.width / 2, -this.canvas.height / 2);\n    this.ctx.restore();\n  };\n\n  Main.prototype.draw = function () {\n    this.ctx.filter = this.filters.map(function (filter) {\n      return \"\".concat(filter.name, \"(\").concat(filter.value).concat(filter.unit, \")\");\n    }).join(' ');\n    console.log(this.ctx.filter);\n    this.drawBackground();\n    this.drawImage();\n  };\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUsxRCxHQUFMLENBQVMrQixNQUFyQjtBQUNBLFNBQUs0QixjQUFMO0FBQ0EsU0FBS04sU0FBTDtBQUNILEdBUEQ7O0FBUUo7QUFBQyxDQTlHRDs7QUFnSEEsSUFBSXpDLElBQUoiLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXBsb2FkSHRtbEJ1dHRvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm90YXRlSHRtbEJ1dHRvbkVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1hZ2UiLCJJbWFnZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyb3RhdGlvbkFuZ2xlIiwiaW1hZ2VVcGxvYWRlZCIsImZpbHRlcnMiLCJsb2FkRmlsdGVycyIsImRyYXciLCJhZGRFdmVudExpc3RlbmVycyIsIk1haW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJpbWciLCJjdXJyZW50VGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJfdGhpcyIsInJlYWRBc0RhdGFVUkwiLCJjbGljayIsInNyYyIsInJlc3VsdCIsIndpZHRoIiwiaGVpZ2h0IiwicHJldmVudERlZmF1bHQiLCJfYSIsIk1hdGgiLCJQSSIsImZvckVhY2giLCJmaWx0ZXIiLCJuYW1lIiwidmFsdWUiLCJwYXJzZUZsb2F0IiwidXBkYXRlTGFiZWwiLCJpZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dCIsImxhYmVsIiwicHVzaCIsInVuaXQiLCJkYXRhc2V0IiwiSHRtbElucHV0IiwiSHRtbExhYmVsIiwidGV4dENvbnRlbnQiLCJ0ZXh0IiwiY29uY2F0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIm1hcCIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiZHJhd0JhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWVkaXRvci8uL3NyYy9qcy9tYWluLnRzPzRiNzEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWFpbiB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSB1cGxvYWRIdG1sQnV0dG9uRWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZGVyOiBGaWxlUmVhZGVyO1xuICAgIHByaXZhdGUgcm90YXRlSHRtbEJ1dHRvbkVsZW1lbnQ6IEhUTUxMaW5rRWxlbWVudDtcbiAgICBwcml2YXRlIHJvdGF0aW9uQW5nbGU6IG51bWJlcjtcbiAgICBwcml2YXRlIGltYWdlVXBsb2FkZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBmaWx0ZXJzOiB7IG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlciwgdW5pdDogc3RyaW5nLCBIdG1sSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIEh0bWxMYWJlbDogSFRNTExhYmVsRWxlbWVudCB9W107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMudXBsb2FkSHRtbEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBsb2FkLWltZycpO1xuICAgICAgICB0aGlzLnJvdGF0ZUh0bWxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0ZS1pbWcnKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbkFuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5pbWFnZVVwbG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuICAgICAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIC8vIFdlIGxpc3RlbiB0byB0aGUgY2hhbmdlIG9mIHRoZSBpbnB1dFxuICAgICAgICB0aGlzLnVwbG9hZEh0bWxCdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgaW1nID0gZXZlbnQuY3VycmVudFRhcmdldC5maWxlcztcbiAgICAgICAgICAgIGlmIChpbWcgJiYgaW1nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRlci5yZWFkQXNEYXRhVVJMKGltZ1swXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW1hZ2VVcGxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkSHRtbEJ1dHRvbkVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlVXBsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gV2UgbGlzdGVuIHRvIHRoZSBsb2FkaW5nIG9mIHJlYWRlclxuICAgICAgICB0aGlzLnJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMucmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLy8gQW5kIGZpbmFsbHksIHdlIGxpc3RlbiB0byB0aGUgbG9hZGluZyBvZiB0aGUgaW1hZ2VcbiAgICAgICAgdGhpcy5pbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yb3RhdGVIdG1sQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0XSA9IFt0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoXTtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25BbmdsZSArPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmlsdGVyLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHBhcnNlRmxvYXQoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtldmVudC5jdXJyZW50VGFyZ2V0LmlkfVwiXWApLCBldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkRmlsdGVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhbmdlXCJdJykuZm9yRWFjaCgoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtpbnB1dC5pZH1cIl1gKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwobGFiZWwsIGlucHV0KTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQuaWQsIHZhbHVlOiBwYXJzZUZsb2F0KGlucHV0LnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgdW5pdDogaW5wdXQuZGF0YXNldC51bml0LFxuICAgICAgICAgICAgICAgICAgICBIdG1sSW5wdXQ6IGlucHV0LFxuICAgICAgICAgICAgICAgICAgICBIdG1sTGFiZWw6IGxhYmVsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGFiZWwobGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7bGFiZWwuZGF0YXNldC50ZXh0fSA6ICR7aW5wdXQudmFsdWV9JHtpbnB1dC5kYXRhc2V0LnVuaXR9YFxuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBkcmF3SW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uQW5nbGUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgLXRoaXMuY2FudmFzLndpZHRoIC8gMiwgLXRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsdGVyID0gdGhpcy5maWx0ZXJzLm1hcCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7ZmlsdGVyLm5hbWV9KCR7ZmlsdGVyLnZhbHVlfSR7ZmlsdGVyLnVuaXR9KWA7XG4gICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdHguZmlsdGVyKTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICB0aGlzLmRyYXdJbWFnZSgpO1xuICAgIH1cbn1cblxubmV3IE1haW4oKTsiXSwiZmlsZSI6Ii4vc3JjL2pzL21haW4udHMuanMifQ==\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

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