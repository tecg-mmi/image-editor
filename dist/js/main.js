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

eval("var Main = function () {\n  function Main() {\n    this.canvas = document.getElementById('my-canvas');\n    this.uploadHtmlButtonElement = document.querySelector('#upload-img');\n    this.rotateHtmlButtonElement = document.querySelector('#rotate-img');\n    this.ctx = this.canvas.getContext('2d');\n    this.image = new Image();\n    this.reader = new FileReader();\n    this.rotationAngle = 0;\n    this.imageUploaded = false;\n    this.filters = [];\n    this.loadFilters();\n    console.log(this.filters);\n    this.draw();\n    this.addEventListeners();\n  }\n\n  Main.prototype.addEventListeners = function () {\n    var _this = this;\n\n    this.uploadHtmlButtonElement.addEventListener('change', function (event) {\n      var img = event.currentTarget.files;\n\n      if (img && img.length > 0) {\n        _this.reader.readAsDataURL(img[0]);\n      }\n    });\n    this.canvas.addEventListener('click', function (event) {\n      if (!_this.imageUploaded) {\n        _this.uploadHtmlButtonElement.click();\n\n        _this.imageUploaded = true;\n      }\n    });\n    this.reader.addEventListener('loadend', function (event) {\n      _this.image.src = _this.reader.result;\n    });\n    this.image.addEventListener('load', function () {\n      _this.canvas.width = _this.image.width;\n      _this.canvas.height = _this.image.height;\n\n      _this.draw();\n    });\n    this.rotateHtmlButtonElement.addEventListener('click', function (event) {\n      var _a;\n\n      event.preventDefault();\n      _a = [_this.canvas.height, _this.canvas.width], _this.canvas.width = _a[0], _this.canvas.height = _a[1];\n      _this.rotationAngle += Math.PI / 2;\n\n      _this.draw();\n    });\n    this.filters.forEach(function (filter) {\n      document.getElementById(filter.name).addEventListener('change', function (event) {\n        filter.value = parseFloat(event.currentTarget.value);\n\n        _this.draw();\n      });\n    });\n  };\n\n  Main.prototype.loadFilters = function () {\n    var _this = this;\n\n    document.querySelectorAll('input[type=\"range\"]').forEach(function (input) {\n      var label = document.querySelector(\"label[for=\\\"\".concat(input.id, \"\\\"]\"));\n\n      _this.filters.push({\n        name: input.id,\n        value: parseFloat(input.value),\n        unit: input.dataset.unit,\n        HtmlInput: input,\n        HtmlLabel: label\n      });\n\n      label.textContent = \"\".concat(label.dataset.text, \" : \").concat(input.value).concat(input.dataset.unit);\n    });\n  };\n\n  Main.prototype.drawBackground = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n  };\n\n  Main.prototype.drawImage = function () {\n    this.ctx.save();\n    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);\n    this.ctx.rotate(this.rotationAngle);\n    this.ctx.drawImage(this.image, -this.canvas.width / 2, -this.canvas.height / 2);\n    this.ctx.restore();\n  };\n\n  Main.prototype.draw = function () {\n    this.ctx.filter = this.filters.map(function (filter) {\n      return \"\".concat(filter.name, \"(\").concat(filter.value).concat(filter.unit, \")\");\n    }).join(' ');\n    console.log(this.ctx.filter);\n    this.drawBackground();\n    this.drawImage();\n  };\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUwsQ0FBWWdDLEtBQXBDLEVBQTJDLEtBQUtoQyxNQUFMLENBQVlpQyxNQUF2RDtBQUNILEdBSEQ7O0FBS0FiO0FBQ0ksU0FBS2QsR0FBTCxDQUFTbUQsSUFBVDtBQUNBLFNBQUtuRCxHQUFMLENBQVNvRCxTQUFULENBQW1CLEtBQUsxRCxNQUFMLENBQVlnQyxLQUFaLEdBQW9CLENBQXZDLEVBQTBDLEtBQUtoQyxNQUFMLENBQVlpQyxNQUFaLEdBQXFCLENBQS9EO0FBQ0EsU0FBSzNCLEdBQUwsQ0FBU3FELE1BQVQsQ0FBZ0IsS0FBSy9DLGFBQXJCO0FBQ0EsU0FBS04sR0FBTCxDQUFTc0QsU0FBVCxDQUFtQixLQUFLcEQsS0FBeEIsRUFBK0IsQ0FBQyxLQUFLUixNQUFMLENBQVlnQyxLQUFiLEdBQXFCLENBQXBELEVBQXVELENBQUMsS0FBS2hDLE1BQUwsQ0FBWWlDLE1BQWIsR0FBc0IsQ0FBN0U7QUFDQSxTQUFLM0IsR0FBTCxDQUFTdUQsT0FBVDtBQUNILEdBTkQ7O0FBUUF6QztBQUNJLFNBQUtkLEdBQUwsQ0FBU2lDLE1BQVQsR0FBa0IsS0FBS3pCLE9BQUwsQ0FBYWdELEdBQWIsQ0FBaUIsVUFBQ3ZCLE1BQUQsRUFBTztBQUN0QyxhQUFPLFVBQUdBLE1BQU0sQ0FBQ0MsSUFBVixFQUFjLEdBQWQsRUFBY2MsTUFBZCxDQUFrQmYsTUFBTSxDQUFDRSxLQUF6QixFQUE4QmEsTUFBOUIsQ0FBaUNmLE1BQU0sQ0FBQ1MsSUFBeEMsRUFBNEMsR0FBNUMsQ0FBUDtBQUNILEtBRmlCLEVBRWZlLElBRmUsQ0FFVixHQUZVLENBQWxCO0FBR0EvQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWCxHQUFMLENBQVNpQyxNQUFyQjtBQUNBLFNBQUt5QixjQUFMO0FBQ0EsU0FBS0osU0FBTDtBQUNILEdBUEQ7O0FBUUo7QUFBQyxDQXhHRDs7QUEwR0EsSUFBSXhDLElBQUoiLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXBsb2FkSHRtbEJ1dHRvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm90YXRlSHRtbEJ1dHRvbkVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1hZ2UiLCJJbWFnZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyb3RhdGlvbkFuZ2xlIiwiaW1hZ2VVcGxvYWRlZCIsImZpbHRlcnMiLCJsb2FkRmlsdGVycyIsImNvbnNvbGUiLCJsb2ciLCJkcmF3IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJNYWluIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaW1nIiwiY3VycmVudFRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiX3RoaXMiLCJyZWFkQXNEYXRhVVJMIiwiY2xpY2siLCJzcmMiLCJyZXN1bHQiLCJ3aWR0aCIsImhlaWdodCIsInByZXZlbnREZWZhdWx0IiwiX2EiLCJNYXRoIiwiUEkiLCJmb3JFYWNoIiwiZmlsdGVyIiwibmFtZSIsInZhbHVlIiwicGFyc2VGbG9hdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dCIsImxhYmVsIiwiaWQiLCJwdXNoIiwidW5pdCIsImRhdGFzZXQiLCJIdG1sSW5wdXQiLCJIdG1sTGFiZWwiLCJ0ZXh0Q29udGVudCIsInRleHQiLCJjb25jYXQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwibWFwIiwiam9pbiIsImRyYXdCYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1lZGl0b3IvLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1haW4ge1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgdXBsb2FkSHRtbEJ1dHRvbkVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRlcjogRmlsZVJlYWRlcjtcbiAgICBwcml2YXRlIHJvdGF0ZUh0bWxCdXR0b25FbGVtZW50OiBIVE1MTGlua0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSByb3RhdGlvbkFuZ2xlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBpbWFnZVVwbG9hZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgZmlsdGVyczogeyBuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHVuaXQ6IHN0cmluZywgSHRtbElucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBIdG1sTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgfVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLnVwbG9hZEh0bWxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZC1pbWcnKTtcbiAgICAgICAgdGhpcy5yb3RhdGVIdG1sQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUtaW1nJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHRoaXMucm90YXRpb25BbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuaW1hZ2VVcGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2FkRmlsdGVycygpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcnMpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBXZSBsaXN0ZW4gdG8gdGhlIGNoYW5nZSBvZiB0aGUgaW5wdXRcbiAgICAgICAgdGhpcy51cGxvYWRIdG1sQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlsZXM7XG4gICAgICAgICAgICBpZiAoaW1nICYmIGltZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkZXIucmVhZEFzRGF0YVVSTChpbWdbMF0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmltYWdlVXBsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZEh0bWxCdXR0b25FbGVtZW50LmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVwbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFdlIGxpc3RlbiB0byB0aGUgbG9hZGluZyBvZiByZWFkZXJcbiAgICAgICAgdGhpcy5yZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLnJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEFuZCBmaW5hbGx5LCB3ZSBsaXN0ZW4gdG8gdGhlIGxvYWRpbmcgb2YgdGhlIGltYWdlXG4gICAgICAgIHRoaXMuaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucm90YXRlSHRtbEJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodF0gPSBbdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aF07XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uQW5nbGUgKz0gTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbHRlci5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgZmlsdGVyLnZhbHVlID0gcGFyc2VGbG9hdChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkRmlsdGVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhbmdlXCJdJykuZm9yRWFjaCgoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtpbnB1dC5pZH1cIl1gKTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQuaWQsIHZhbHVlOiBwYXJzZUZsb2F0KGlucHV0LnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgdW5pdDogaW5wdXQuZGF0YXNldC51bml0LFxuICAgICAgICAgICAgICAgICAgICBIdG1sSW5wdXQ6IGlucHV0LFxuICAgICAgICAgICAgICAgICAgICBIdG1sTGFiZWw6IGxhYmVsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2xhYmVsLmRhdGFzZXQudGV4dH0gOiAke2lucHV0LnZhbHVlfSR7aW5wdXQuZGF0YXNldC51bml0fWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGRyYXdJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHRoaXMucm90YXRpb25BbmdsZSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAtdGhpcy5jYW52YXMud2lkdGggLyAyLCAtdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWx0ZXIgPSB0aGlzLmZpbHRlcnMubWFwKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHtmaWx0ZXIubmFtZX0oJHtmaWx0ZXIudmFsdWV9JHtmaWx0ZXIudW5pdH0pYDtcbiAgICAgICAgfSkuam9pbignICcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN0eC5maWx0ZXIpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgIHRoaXMuZHJhd0ltYWdlKCk7XG4gICAgfVxufVxuXG5uZXcgTWFpbigpOyJdLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyJ9\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

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