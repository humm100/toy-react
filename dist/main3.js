/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src3/main.js":
/*!**********************!*\
  !*** ./src3/main.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ \"./src3/toy-react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n //子组件MyComponent\n\nvar MyComponent = /*#__PURE__*/function (_Component) {\n  _inherits(MyComponent, _Component);\n\n  var _super = _createSuper(MyComponent);\n\n  function MyComponent() {\n    var _this;\n\n    _classCallCheck(this, MyComponent);\n\n    _this = _super.call(this); //这样就可以调到继续类Component里的构造函数了\n\n    _this.state = {\n      a: 1,\n      b: 2\n    };\n    return _this;\n  }\n\n  _createClass(MyComponent, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\", null, \"My Component!\"), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", {\n        onclick: function onclick() {\n          _this2.setState({\n            a: _this2.state.a + 1\n          });\n        }\n      }, \"add\"), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", null, this.state.a.toString()), this.children);\n    }\n  }]);\n\n  return MyComponent;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__.Component); //jsx模板：\n\n\nvar a = (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyComponent, {\n  id: \"a\",\n  \"class\": \"c\"\n}, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null, \"abc\"), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null)); //document.body.appendChild(a);\n\n(0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.render)(a, document.body);\n\n//# sourceURL=webpack://app/./src3/main.js?");

/***/ }),

/***/ "./src3/toy-react.js":
/*!***************************!*\
  !*** ./src3/toy-react.js ***!
  \***************************/
/*! namespace exports */
/*! export Component [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => /* binding */ Component,\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"render\": () => /* binding */ render\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RENDER_TO_DOM = Symbol(\"render to dom\"); //组件实现类\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.props = Object.create(null);\n    this.children = []; //this._root = null;\n\n    this._range = null;\n    this._vdom = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      this.children.push(component);\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(newState) {\n      if (this.state === null || _typeof(this.state) !== \"object\") {\n        this.state = newState;\n        this.rerender();\n        return;\n      } //console.log(newState)\n\n\n      var merge = function merge(oldState, newState) {\n        for (var p in newState) {\n          if (oldState[p] === null || _typeof(oldState[p]) !== \"object\") {\n            oldState[p] = newState[p];\n          } else {\n            merge(oldState[p], newState[p]);\n          }\n        }\n      };\n\n      merge(this.state, newState); //this.rerender();\n\n      this.update();\n    }\n  }, {\n    key: RENDER_TO_DOM,\n\n    /*     get vchildren() {\r\n            return this.children.map(child => child.vdom)\r\n        } */\n\n    /* _renderToDOM(range){\r\n        this.render()._renderToDOM(range)\r\n    } */\n    //用Symbol来创建私有方法，使它变得不太容易访问到，起到一定的保护作用\n    value: function value(range) {\n      this._range = range; //this._vdom 以后充当旧的vdom\n\n      this._vdom = this.vdom; //this.render()[RENDER_TO_DOM](range)\n\n      this._vdom[RENDER_TO_DOM](range);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var isSameNode = function isSameNode(oldNode, newNode) {\n        //对比type\n        if (oldNode.type !== newNode.type) {\n          return false;\n        } //对比 props\n        //旧的属性比新的多也认为不同的\n\n\n        if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length) {\n          return false;\n        } //属性值对比\n\n\n        for (var name in newNode.props) {\n          if (newNode.props[name] !== oldNode.props[name]) {\n            return false;\n          }\n        } //比对content节点\n\n\n        if (newNode.type === \"#text\") {\n          if (newNode.content !== oldNode.content) return false;\n        }\n\n        return true;\n      };\n\n      var update = function update(oldNode, newNode) {\n        // type, props, children\n        // #text content \n        // w: 把这个props打patch是什么东西？！！\n        if (!isSameNode(oldNode, newNode)) {\n          newNode[RENDER_TO_DOM](oldNode._range);\n          return;\n        }\n\n        newNode._range = oldNode._range;\n        var newChildren = newNode.vchildren;\n        var oldChildren = oldNode.vchildren;\n\n        if (!newChildren || !newChildren.length) {\n          return;\n        }\n\n        var tailRange = oldChildren[oldChildren.length - 1]._range;\n\n        for (var i = 0; i < newChildren.length; i++) {\n          var newChild = newChildren[i];\n          var oldChild = oldChildren[i];\n\n          if (i < oldChildren.length) {\n            update(oldChild, newChild);\n          } else {\n            var range = document.createRange();\n            range.setStart(tailRange.endContainer, tailRange.endOffset);\n            range.setEnd(tailRange.endContainer, tailRange.endOffset);\n            newChild[RENDER_TO_DOM](range);\n            tailRange = range;\n          }\n        }\n      };\n\n      var vdom = this.vdom;\n      update(this._vdom, vdom); //更新后将旧的_vdom给它替换掉\n\n      this._vdom = vdom;\n    } //重新绘制 改为update的形式，实现比对更新，不再全量rerender\n\n    /* rerender(){\r\n        \r\n        let oldRange = this._range;\r\n          let range = document.createRange();\r\n        range.setStart(oldRange.startContainer, oldRange.startOffset);\r\n        range.setEnd(oldRange.startContainer, oldRange.startOffset);\r\n        this[RENDER_TO_DOM](range);\r\n          oldRange.setStart(range.endContainer, range.endOffset);\r\n        oldRange.deleteContents();\r\n    } */\n    //get方法会在取属性值时触发 PS：set方法就会在属性赋值时触发\n\n    /* get root(){\r\n        if(!this._root){\r\n            this._root = this.render().root;\r\n        }\r\n        return this._root;\r\n    } */\n\n  }, {\n    key: \"vdom\",\n    get: function get() {\n      return this.render().vdom;\n    }\n  }]);\n\n  return Component;\n}(); //包装createElement\n\nvar ElementWrapper = /*#__PURE__*/function (_Component) {\n  _inherits(ElementWrapper, _Component);\n\n  var _super = _createSuper(ElementWrapper);\n\n  function ElementWrapper(type) {\n    var _this;\n\n    _classCallCheck(this, ElementWrapper);\n\n    _this = _super.call(this, type);\n    _this.type = type; //this.root = document.createElement(type) //不在这里创建dom，延迟到RENDER_TO_DOM里创建\n\n    return _this;\n  }\n  /*\r\n    已在Component类继承了，相关逻辑处理需求移到RENDER_TO_DOM实现\r\n    setAttribute(name,value){\r\n      if(name.match(/^on([\\s\\S]+)$/)){\r\n          //以on开头的属性，要绑定事件\r\n          this.root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, c=> c.toLowerCase()), value);\r\n            //PS:[\\s\\S]表示任务字符\r\n          }else{\r\n            if(name === \"className\"){\r\n              this.root.setAttribute(\"class\", value)\r\n          }else{\r\n              this.root.setAttribute(name, value) \r\n          }\r\n          \r\n      }\r\n      \r\n  }\r\n    appendChild(component){\r\n        //this.root.appendChild(component.root)\r\n        let range = document.createRange();\r\n      range.setStart(this.root, this.root.childNodes.length);\r\n      range.setEnd(this.root, this.root.childNodes.length);\r\n      component[RENDER_TO_DOM](range)\r\n    }\r\n    */\n\n\n  _createClass(ElementWrapper, [{\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      this._range = range;\n      var root = document.createElement(this.type); //props属性处理 对应的就是原来setAttribute， 所以就是搬迁原来setAttribute的逻辑\n\n      for (var name in this.props) {\n        var value = this.props[name];\n\n        if (name.match(/^on([\\s\\S]+)$/)) {\n          //以on开头的属性，要绑定事件\n          root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n            return c.toLowerCase();\n          }), value); //PS:[\\s\\S]表示任务字符\n        } else {\n          if (name === \"className\") {\n            root.setAttribute(\"class\", value);\n          } else {\n            root.setAttribute(name, value);\n          }\n        }\n      } //children处理 对应的就是原来的appendChild\n\n\n      if (!this.vchildren) {\n        this.vchildren = this.children.map(function (child) {\n          return child.vdom;\n        });\n      }\n\n      var _iterator = _createForOfIteratorHelper(this.vchildren),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var child = _step.value;\n          var childRange = document.createRange();\n          childRange.setStart(root, root.childNodes.length);\n          childRange.setEnd(root, root.childNodes.length);\n          child[RENDER_TO_DOM](childRange);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      replaceContent(range, root);\n    }\n  }, {\n    key: \"vdom\",\n    get: function get() {\n      this.vchildren = this.children.map(function (child) {\n        return child.vdom;\n      });\n      return this;\n      /* return {\r\n          type: this.type,\r\n          props: this.props,\r\n          children: this.children.map(child => child.vdom)\r\n      } */\n    }\n  }]);\n\n  return ElementWrapper;\n}(Component); //包装createTextNode\n\n\nvar TextWrapper = /*#__PURE__*/function (_Component2) {\n  _inherits(TextWrapper, _Component2);\n\n  var _super2 = _createSuper(TextWrapper);\n\n  function TextWrapper(content) {\n    var _this2;\n\n    _classCallCheck(this, TextWrapper);\n\n    _this2 = _super2.call(this, content);\n    _this2.type = \"#text\";\n    _this2.content = content;\n    return _this2;\n  }\n\n  _createClass(TextWrapper, [{\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      this._range = range;\n      /* range.deleteContents();\r\n      range.insertNode(this.root); */\n\n      var root = document.createTextNode(this.content);\n      replaceContent(range, root);\n    }\n  }, {\n    key: \"vdom\",\n    get: function get() {\n      return this;\n      /* return {\r\n          type: \"#text\",\r\n          content: this.content\r\n      } */\n    }\n  }]);\n\n  return TextWrapper;\n}(Component); //对range先插入后删除操作\n\n\nfunction replaceContent(range, node) {\n  range.insertNode(node);\n  range.setStartAfter(node);\n  range.deleteContents();\n  range.setStartBefore(node);\n  range.setEndAfter(node);\n}\n\nfunction createElement(type, attributes) {\n  //let e = document.createElement(type);\n  //let e = typeof type === \"string\" ? document.createElement(type) : new type;\n  //使用包装createElement\n  var e = typeof type === \"string\" ? new ElementWrapper(type) : new type(); //属性展开\n\n  for (var p in attributes) {\n    e.setAttribute(p, attributes[p]);\n  } //节点生成方法，实现递归复用\n\n\n  var insertChildren = function insertChildren(children) {\n    //children展开\n    var _iterator2 = _createForOfIteratorHelper(children),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var child = _step2.value;\n\n        if (child === null) {\n          continue;\n        }\n\n        if (typeof child === 'string') {\n          //child = document.createTextNode(child);\n          //使用包装createTextNode\n          child = new TextWrapper(child);\n        }\n\n        if (_typeof(child) === 'object' && child instanceof Array) {\n          //children为children对象时继续展开\n          insertChildren(child);\n        } else {\n          //最后插入到节点里\n          e.appendChild(child);\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  insertChildren(children);\n  return e;\n}\nfunction render(component, parentElement) {\n  //parentElement.appendChild(component.root)\n  var range = document.createRange(); //range对象表示文档中的连续范围（这个要加强研究）\n  //range对象的知识：https://www.w3school.com.cn/xmldom/dom_range.asp\n  //PS:range对象所有属性都是只读的，不能通过设置这些属性改变范围的开始点和结束点，必须调用 setEnd() 方法和 setStart() 方法实现这一点。\n\n  range.setStart(parentElement, 0); //开始节点\n\n  range.setEnd(parentElement, parentElement.childNodes.length); //结束节点\n\n  range.deleteContents();\n  component[RENDER_TO_DOM](range);\n}\n\n//# sourceURL=webpack://app/./src3/toy-react.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src3/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;