/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/mm-admin/auth/api.js":
/*!*************************************!*\
  !*** ./client/mm-admin/auth/api.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signin\": () => /* binding */ signin,\n/* harmony export */   \"signout\": () => /* binding */ signout,\n/* harmony export */   \"read\": () => /* binding */ read\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst signin = async user => {\n  try {\n    let response = await fetch('/user/auth/signin/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      credentials: 'include',\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst read = async (params, credentials, signal) => {\n  try {\n    let response = await fetch('/user/auth/' + params.userId, {\n      method: 'GET',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst signout = async () => {\n  try {\n    let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('/user/auth/signout/');\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\api.js\");\n  reactHotLoader.register(read, \"read\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\api.js\");\n  reactHotLoader.register(signout, \"signout\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\api.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-admin/auth/api.js?");

/***/ }),

/***/ "./client/mm-admin/auth/auth.validator.js":
/*!************************************************!*\
  !*** ./client/mm-admin/auth/auth.validator.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst Auth = {\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n\n  clearJWT(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb(); //optional\n    // signout().then((data) => {\n    //   document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\"\n    // })\n  }\n\n};\nconst _default = Auth;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Auth, \"Auth\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\auth.validator.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\auth.validator.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-admin/auth/auth.validator.js?");

/***/ }),

/***/ "./client/mm-admin/auth/has.account.js":
/*!*********************************************!*\
  !*** ./client/mm-admin/auth/has.account.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.validator */ \"./client/mm-admin/auth/auth.validator.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst PrivateRoute = ({\n  component: Component,\n  ...rest\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, rest, {\n  render: props => _auth_validator__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n    to: {\n      pathname: '/login/',\n      state: {\n        from: props.location\n      }\n    }\n  })\n}));\n\nconst _default = PrivateRoute;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, \"PrivateRoute\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\has.account.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\has.account.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-admin/auth/has.account.js?");

/***/ }),

/***/ "./client/mm-admin/auth/signin.js":
/*!****************************************!*\
  !*** ./client/mm-admin/auth/signin.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./client/mm-admin/auth/api.js\");\n/* harmony import */ var _auth_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.validator */ \"./client/mm-admin/auth/auth.validator.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst SigninNew = props => {\n  const [values, makeValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: \"\",\n    hashed_password: \"\",\n    redirectTo: false\n  });\n\n  const handleChange = event => {\n    const name = event.target.name;\n    makeValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    const user = {\n      email: values.email || undefined,\n      hashed_password: values.hashed_password || undefined\n    };\n    (0,_api__WEBPACK_IMPORTED_MODULE_2__.signin)(user).then(data => {\n      if (data.error) {\n        makeValues({ ...values,\n          error: data.error\n        });\n        console.log(data);\n      } else {\n        _auth_validator__WEBPACK_IMPORTED_MODULE_3__.default.authenticate(data, () => {\n          makeValues({ ...values,\n            error: '',\n            redirectTo: true\n          });\n        });\n      }\n    });\n  };\n\n  const {\n    from\n  } = props.location.state || {\n    from: {\n      pathname: '/'\n    }\n  };\n  const {\n    redirectTo\n  } = values;\n\n  if (redirectTo) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n      to: from\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"signin\",\n    className: \"wrapper-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sign-entry container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Sign in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Enter your email and password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"signin-entry\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"email\",\n    className: \"form-control\",\n    name: \"email\",\n    value: values.email,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"hashed_password\"\n  }, \"Password :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    name: \"hashed_password\",\n    value: values.hashed_password,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\"\n  }, \"Sign in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"asking_user\"\n  }, \"Don't have an account \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/signup/\"\n  }, \"sign up here\"))))));\n};\n\n__signature__(SigninNew, \"useState{[values, makeValues]({\\r\\n    email : \\\"\\\",\\r\\n    hashed_password : \\\"\\\",\\r\\n    redirectTo : false\\r\\n})}\");\n\nconst _default = SigninNew;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(SigninNew, \"SigninNew\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\signin.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\signin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-admin/auth/signin.js?");

/***/ }),

/***/ "./client/mm-admin/auth/signup.js":
/*!****************************************!*\
  !*** ./client/mm-admin/auth/signup.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst Signup = () => {\n  const [values, makeValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    firstname: \"\",\n    lastname: \"\",\n    email: \"\",\n    hashed_password: \"\"\n  });\n  const [isSuccess, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const handleChange = event => {\n    const name = event.target.name;\n    makeValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    const infos = {\n      firstname: values.firstname,\n      lastname: values.lastname,\n      email: values.email,\n      hashed_password: values.hashed_password\n    }; // console.log(infos)\n\n    axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"/user/action/add-user/\", infos).then(response => {\n      setSuccess(true);\n    }).catch(error => console.log(error));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"signup\",\n    className: \"wrapper-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `info-success-signup ${isSuccess ? \"show\" : \"hide\"}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"text-success text-center\"\n  }, \"Your account was created successfully!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"btn btn-success\"\n  }, \"Login\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `signup-entry container ${isSuccess ? \"hide\" : \"show\"}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Sign up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Fill all fields to signup\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"entry\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"firstname\"\n  }, \"First Name :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    name: \"firstname\",\n    value: values.firstname,\n    onChange: handleChange\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"lastname\"\n  }, \"Last Name :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"name\",\n    className: \"form-control\",\n    name: \"lastname\",\n    value: values.lastname,\n    onChange: handleChange\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"email\",\n    className: \"form-control\",\n    name: \"email\",\n    value: values.email,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"hashed_password\"\n  }, \"Password :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    name: \"hashed_password\",\n    value: values.hashed_password,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\"\n  }, \"Sign up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"asking_user\"\n  }, \"Already have an account \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/login/\"\n  }, \"Login here\"))))));\n};\n\n__signature__(Signup, \"useState{[values, makeValues]({\\r\\n    firstname : \\\"\\\",\\r\\n    lastname : \\\"\\\",\\r\\n    email : \\\"\\\",\\r\\n    hashed_password : \\\"\\\"\\r\\n})}\\nuseState{[isSuccess, setSuccess](false)}\");\n\nconst _default = Signup;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Signup, \"Signup\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\signup.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\auth\\\\signup.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-admin/auth/signup.js?");

/***/ }),

/***/ "./client/mm-admin/user.dashbord.js":
/*!******************************************!*\
  !*** ./client/mm-admin/user.dashbord.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_auth_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.validator */ \"./client/mm-admin/auth/auth.validator.js\");\n/* harmony import */ var _user_dashbord_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.dashbord.table */ \"./client/mm-admin/user.dashbord.table.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst UserDashbord = () => {\n  const [hide, setHide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [isRemoved, checkRemoved] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [currentUser, setcurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: \"\"\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    let cleanup = false;\n\n    if (_auth_auth_validator__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated()) {\n      const id = _auth_auth_validator__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated().user._id;\n\n      axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/user/action/\" + id).then(res => {\n        setUser(res.data.favorite);\n        setcurrentUser({\n          name: res.data.lastname\n        });\n      });\n    } else {\n      console.log(\"Need to loged\");\n    }\n\n    return () => {\n      cleanup = true;\n    };\n  }, [hide, isRemoved]);\n\n  const removeFromFavorite = toremoved => event => {\n    event.preventDefault();\n\n    const id = _auth_auth_validator__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated().user._id;\n\n    const items = {\n      item: JSON.stringify(toremoved)\n    };\n    axios__WEBPACK_IMPORTED_MODULE_1___default().put(\"/user/action/update/\" + id, items).then(res => {\n      checkRemoved(!isRemoved);\n    }).catch(error => console.log(error));\n  };\n\n  const renderTable = () => {\n    return user.map((info, index) => {\n      const infoParsed = JSON.parse(info.item);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_user_dashbord_table__WEBPACK_IMPORTED_MODULE_3__.default, {\n        item: infoParsed,\n        user: info,\n        remove: removeFromFavorite,\n        key: index\n      });\n    });\n  };\n\n  const hideOpen = event => {\n    event.preventDefault();\n    setHide(!hide);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `user-dashbord ${hide ? \"closeit\" : \"openit\"}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"user-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"avatar\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"name\"\n  }, currentUser.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"title-dashbord\",\n    onClick: hideOpen\n  }, \"My Dashbord >>>\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dashbord\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Dashbord\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"table-dashbord\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"table\", {\n    className: \"table table-light table-striped\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"#\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"ID\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Notes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Actions\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", null, renderTable())))));\n};\n\n__signature__(UserDashbord, \"useState{[hide, setHide](false)}\\nuseState{[user, setUser]([])}\\nuseState{[isRemoved, checkRemoved](false)}\\nuseState{[currentUser, setcurrentUser]({\\r\\n\\tname : \\\"\\\"\\r\\n})}\\nuseEffect{}\");\n\nconst _default = UserDashbord;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserDashbord, \"UserDashbord\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\user.dashbord.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\user.dashbord.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-admin/user.dashbord.js?");

/***/ }),

/***/ "./client/mm-admin/user.dashbord.table.js":
/*!************************************************!*\
  !*** ./client/mm-admin/user.dashbord.table.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mm-admin/auth/auth.validator */ \"./client/mm-admin/auth/auth.validator.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst Table = props => {\n  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const [currentItem, setcurrentItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n\n  const openNote = event => {\n    event.preventDefault();\n    setOpen(!isOpen);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    let cleanup = false;\n\n    if (_mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated()) {\n      const id = _mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated().user._id;\n\n      axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"/user/action/\" + id).then(res => {\n        setcurrentItem(res.data.favorite);\n      });\n    } else {\n      console.log(\"Need to loged\");\n    }\n\n    return () => {\n      cleanup = true;\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: props.item.avatar_url,\n    alt: props.item.login,\n    style: {\n      width: \"50px\",\n      height: \"50px\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"td\", null, props.item.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"td\", null, props.item.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"td\", null, props.user.note), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"btn btn-primary\",\n    onClick: openNote\n  }, \" View details\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"btn btn-danger\",\n    onClick: props.remove(props.item)\n  }, \" Remove\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"td\", {\n    className: isOpen ? \"open-note\" : \"close-note\",\n    id: \"popup-note\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    onClick: openNote,\n    className: \"close-btn\"\n  }, \"X\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"col-8\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"a\", {\n    href: `https://github.com/${props.item.login}`\n  }, props.item.login)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"\"\n  }, \"ID : \", props.item.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"\"\n  }, \"NODE ID : \", props.item.node_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"\"\n  }, \"PUBLIC URL : \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"a\", {\n    href: `https://github.com/${props.item.login}`\n  }, `https://github.com/${props.item.login}`))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"col-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: props.item.avatar_url,\n    alt: props.item.login,\n    style: {\n      width: '150px',\n      height: '150px',\n      objectFit: \"cover\"\n    }\n  }))))));\n};\n\n__signature__(Table, \"useState{[isOpen, setOpen](false)}\\nuseState{[currentItem, setcurrentItem]([])}\\nuseEffect{}\");\n\nconst _default = Table;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Table, \"Table\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\user.dashbord.table.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-admin\\\\user.dashbord.table.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-admin/user.dashbord.table.js?");

/***/ }),

/***/ "./client/mm-content/homepage.js":
/*!***************************************!*\
  !*** ./client/mm-content/homepage.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_table_github_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/table.github.user */ \"./client/mm-content/utils/table.github.user.js\");\n/* harmony import */ var _mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mm-admin/auth/auth.validator */ \"./client/mm-admin/auth/auth.validator.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst Homepage = () => {\n  const [organisations, setOrgnisations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [searchContributor, setSearchContributor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [searchContributorResult, setSearchContributorResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [isAdded, setAdded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    let cleanup = false;\n    console.log(\"TETSTETTTTTTTT\");\n    requestApi();\n    return () => {\n      cleanup = true;\n    };\n  }, [searchContributor]);\n\n  const requestApi = () => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://api.github.com/repos/git/git/contributors\", {\n      params: {\n        rejectUnauthorized: false,\n        //add when working with https sites\n        requestCert: false,\n        //add when working with https sites\n        agent: false //add when working with https sites\n\n      }\n    }).then(response => {\n      const all = response.data;\n      const result = all.filter(contributor => {\n        return contributor.login.toLowerCase().includes(searchContributor.toLowerCase());\n      });\n      setSearchContributorResult(result);\n    }).catch(error => console.log(error));\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://api.github.com/organizations\", {\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      params: {\n        rejectUnauthorized: false,\n        //add when working with https sites\n        requestCert: false,\n        //add when working with https sites\n        agent: false //add when working with https sites\n\n      }\n    }).then(response => {\n      const all = response.data;\n      const result = all.filter(contributor => {\n        return contributor.login.toLowerCase().includes(searchContributor.toLowerCase());\n      });\n      setOrgnisations(result);\n    }).catch(error => console.log(error));\n  };\n\n  const makeSearchContr = event => {\n    event.preventDefault();\n    setSearchContributor(event.target.value);\n  };\n\n  const addFavorite = (favorite, notes) => event => {\n    event.preventDefault();\n\n    if (_mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_3__.default.isAuthenticated()) {\n      const id = _mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_3__.default.isAuthenticated().user._id;\n\n      const favorites = {\n        item: JSON.stringify(favorite),\n        note: notes\n      };\n      axios__WEBPACK_IMPORTED_MODULE_1___default().put(\"/user/action/\" + id, favorites).then(res => {\n        setAdded(true);\n        const timer = setTimeout(() => {\n          setAdded(false);\n        }, 4000);\n        return () => clearTimeout(timer);\n      }).catch(error => console.log(error));\n    } else {\n      console.log(\"Need to loged\");\n    }\n  };\n\n  const contributorGit = () => {\n    return searchContributorResult.map((contributor, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_table_github_user__WEBPACK_IMPORTED_MODULE_2__.default, {\n        key: index,\n        item: contributor,\n        status: isAdded,\n        favorite: addFavorite\n      });\n    });\n  };\n\n  const organisationsGit = () => {\n    return organisations.map((organisation, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_table_github_user__WEBPACK_IMPORTED_MODULE_2__.default, {\n        key: index,\n        item: organisation,\n        favorite: addFavorite\n      });\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Github users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Find out the list of github contributor and organisations\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    placeholder: \"Search\",\n    value: searchContributor,\n    onChange: makeSearchContr\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"github-user\",\n    id: \"github\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"List contributor :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    style: {\n      paddingLeft: '0px'\n    }\n  }, contributorGit()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"List organisation :\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    style: {\n      paddingLeft: '0px'\n    }\n  }, organisationsGit()))));\n};\n\n__signature__(Homepage, \"useState{[organisations, setOrgnisations]([])}\\nuseState{[searchContributor, setSearchContributor]('')}\\nuseState{[searchContributorResult, setSearchContributorResult]([])}\\nuseState{[isAdded, setAdded](false)}\\nuseEffect{}\");\n\nconst _default = Homepage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Homepage, \"Homepage\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-content\\\\homepage.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-content\\\\homepage.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-content/homepage.js?");

/***/ }),

/***/ "./client/mm-content/index.js":
/*!************************************!*\
  !*** ./client/mm-content/index.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./client/mm-content/homepage.js\");\n/* harmony import */ var _mm_admin_user_dashbord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mm-admin/user.dashbord */ \"./client/mm-admin/user.dashbord.js\");\n/* harmony import */ var _mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mm-admin/auth/auth.validator */ \"./client/mm-admin/auth/auth.validator.js\");\n/* harmony import */ var _mm_admin_auth_signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mm-admin/auth/signup */ \"./client/mm-admin/auth/signup.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst PrincipalMenu = () => {\n  const renderProperStatus = () => {\n    if (_mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_4__.default.isAuthenticated()) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mm_admin_user_dashbord__WEBPACK_IMPORTED_MODULE_3__.default, null);\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"loginoraccount\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"login\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n        className: \"nav-link\",\n        to: \"/login/\"\n      }, \"Login\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"signup\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n        className: \"nav-link\",\n        to: \"/signup/\"\n      }, \"Create account\")));\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wrapper-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"principal-menu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    className: \"navbar navbar-expand-sm bg-1 justify-content-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"navbar-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"nav-link text-white\",\n    to: \"/\"\n  }, \"HOME\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sidebar-dashbord\"\n  }, renderProperStatus()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: _homepage__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/signup/\",\n    component: _mm_admin_auth_signup__WEBPACK_IMPORTED_MODULE_5__.default\n  })));\n};\n\nconst _default = PrincipalMenu;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrincipalMenu, \"PrincipalMenu\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-content\\\\index.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-content\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-content/index.js?");

/***/ }),

/***/ "./client/mm-content/utils/table.github.user.js":
/*!******************************************************!*\
  !*** ./client/mm-content/utils/table.github.user.js ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mm-admin/auth/auth.validator */ \"./client/mm-admin/auth/auth.validator.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst ShowCase = props => {\n  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    note: \"\"\n  });\n  const [valide, setValide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const openNote = event => {\n    event.preventDefault();\n    setOpen(!isOpen);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    let cleanup = false;\n\n    if (_mm_admin_auth_auth_validator__WEBPACK_IMPORTED_MODULE_1__.default.isAuthenticated()) {\n      setValide(true);\n    }\n\n    return () => {\n      cleanup = true;\n    };\n  }, []);\n\n  const handleChange = event => {\n    event.preventDefault();\n    setValues({\n      note: event.target.value\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"item-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"image-user\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: props.item.avatar_url,\n    alt: props.item.login\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n    className: \"login\"\n  }, props.item.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"visit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: `https://github.com/${props.item.login}`\n  }, \"Visit repos\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"action\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"addfavorite\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"btn btn-primary\",\n    onClick: openNote\n  }, \" View or Add\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: isOpen ? \"open-note\" : \"close-note\",\n    id: \"popup-note\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    onClick: openNote,\n    className: \"close-btn\"\n  }, \"X\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-8\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: `https://github.com/${props.item.login}`\n  }, props.item.login)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }, \"ID : \", props.item.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }, \"NODE ID : \", props.item.node_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }, \"PUBLIC URL : \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: `https://github.com/${props.item.login}`\n  }, `https://github.com/${props.item.login}`))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: props.item.avatar_url,\n    alt: props.item.login,\n    style: {\n      width: '150px',\n      height: '150px',\n      objectFit: \"cover\"\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", null, \"Add your note here :\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    className: \"form-control\",\n    placeholder: \"Add note\",\n    rows: \"10\",\n    cols: \"\",\n    value: values.note,\n    onChange: handleChange\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"text-danger\"\n  }, valide ? \"\" : \"Please login to add items!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"text-success\"\n  }, props.status ? \"Added!\" : \"\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: props.favorite(props.item, values.note),\n    className: \"btn btn-primary\",\n    disabled: valide ? false : true\n  }, \"Finish and add to Favorite.\")));\n};\n\n__signature__(ShowCase, \"useState{[isOpen, setOpen](false)}\\nuseState{[values, setValues]({note : \\\"\\\"})}\\nuseState{[valide, setValide](false)}\\nuseEffect{}\");\n\nconst _default = ShowCase;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ShowCase, \"ShowCase\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-content\\\\utils\\\\table.github.user.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\mm-content\\\\utils\\\\table.github.user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/mm-content/utils/table.github.user.js?");

/***/ }),

/***/ "./client/router.js":
/*!**************************!*\
  !*** ./client/router.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mm_content_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mm-content/index */ \"./client/mm-content/index.js\");\n/* harmony import */ var _mm_admin_user_dashbord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mm-admin/user.dashbord */ \"./client/mm-admin/user.dashbord.js\");\n/* harmony import */ var _mm_admin_auth_signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mm-admin/auth/signin */ \"./client/mm-admin/auth/signin.js\");\n/* harmony import */ var _mm_admin_auth_has_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mm-admin/auth/has.account */ \"./client/mm-admin/auth/has.account.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n // Components\n\n\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"web-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    component: _mm_content_index__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mm_admin_auth_has_account__WEBPACK_IMPORTED_MODULE_5__.default, {\n    path: \"/dashbord/\",\n    component: _mm_admin_user_dashbord__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/login/\",\n    component: _mm_admin_auth_signin__WEBPACK_IMPORTED_MODULE_4__.default\n  })));\n};\n\nconst _default = App;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\router.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\router.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/router.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  palette: {\n    primary: {\n      light: '#52c7b8',\n      main: '#009688',\n      dark: '#00675b',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#ffd95b',\n      main: '#ffa726',\n      dark: '#c77800',\n      contrastText: '#000'\n    },\n    openTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.teal[700],\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.orange[700],\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\theme.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\client\\\\theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./client/theme.js?");

/***/ }),

/***/ "./server/config/config.js":
/*!*********************************!*\
  !*** ./server/config/config.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst port = process.env.PORT || 4000;\nconst jwtSecret = process.env.JWT_SECRET || \"mysecretkey\";\nconst mongouri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/db-jobs-users';\nconst _default = {\n  port,\n  mongouri,\n  jwtSecret\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(port, \"port\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\config\\\\config.js\");\n  reactHotLoader.register(jwtSecret, \"jwtSecret\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\config\\\\config.js\");\n  reactHotLoader.register(mongouri, \"mongouri\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./server/config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.js":
/*!************************************!*\
  !*** ./server/controllers/auth.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./server/config/config.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ \"./server/models/user.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst signin = async (req, res) => {\n  try {\n    let user = await _models_user__WEBPACK_IMPORTED_MODULE_4__.default.findOne({\n      \"email\": req.body.email\n    }).exec();\n    if (!user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compareSync(req.body.hashed_password, user.hashed_password)) {\n      return res.json({\n        error: \"Invalid password : Please verify your password\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_2__.default.jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 99999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        firstname: user.firstname,\n        lastname: user.lastname,\n        email: user.email\n      },\n      status: \"authorized\"\n    });\n  } catch (err) {\n    console.log(err);\n    return res.status('401').json({\n      error: \"Could not sign in\"\n    });\n  }\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_1___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_2__.default.jwtSecret,\n  userProperty: 'auth',\n  algorithms: ['RS256']\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.email && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nconst _default = {\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\auth.js\");\n  reactHotLoader.register(signout, \"signout\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\auth.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\auth.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\auth.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./server/controllers/auth.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ \"./server/models/user.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst create = async (req, res, next) => {\n  try {\n    req.body.hashed_password = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(req.body.hashed_password, 10);\n    const user = await new _models_user__WEBPACK_IMPORTED_MODULE_0__.default(req.body);\n    user.save().then(response => {\n      res.json(\"User added successfully!\");\n    }).catch(error => res.send(error));\n  } catch (error) {\n    next(error);\n  }\n};\n/**\r\n * Load user and append to req.\r\n */\n\n\nconst read = async (req, res) => {\n  await _models_user__WEBPACK_IMPORTED_MODULE_0__.default.findByID(req.params.userId, (error, user) => {\n    if (error || !user) {\n      console.log(\"User not found\");\n    }\n\n    res.json(user);\n  });\n};\n\nconst list = async (req, res, next) => {\n  try {\n    await _models_user__WEBPACK_IMPORTED_MODULE_0__.default.find((error, user) => {\n      if (error) {\n        res.json(\"Cannot find user!\");\n      }\n\n      res.send(user);\n    });\n  } catch (error) {\n    next(error);\n  }\n};\n\nconst oneUser = async (req, res, next) => {\n  try {\n    await _models_user__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.params.id, (error, user) => {\n      if (error) {\n        res.json(error);\n      } else {\n        res.json(user);\n      }\n    });\n  } catch (error) {\n    next(error);\n  }\n};\n\nconst addFavorite = async (req, res, next) => {\n  try {\n    await _models_user__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndUpdate({\n      _id: req.params.id\n    }, {\n      $addToSet: {\n        \"favorite\": {\n          \"item\": req.body.item,\n          \"note\": req.body.note\n        }\n      }\n    }, {\n      new: true\n    }, function (err, updated) {\n      if (err) {\n        return res.json(err);\n      }\n\n      res.send(updated);\n    });\n  } catch (err) {\n    next(err);\n  }\n};\n\nconst removeInFavorite = async (req, res, next) => {\n  try {\n    await _models_user__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndUpdate({\n      _id: req.params.id\n    }, {\n      $pull: {\n        \"favorite\": {\n          \"item\": req.body.item\n        }\n      }\n    }, {\n      new: true\n    }, function (err, updated) {\n      if (err) {\n        res.json(err);\n      }\n\n      res.send(updated);\n    });\n  } catch (error) {\n    next(error);\n  }\n};\n\nconst _default = {\n  create,\n  read,\n  list,\n  addFavorite,\n  oneUser,\n  removeInFavorite\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(oneUser, \"oneUser\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(addFavorite, \"addFavorite\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(removeInFavorite, \"removeInFavorite\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\controllers\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devbundle.js":
/*!*****************************!*\
  !*** ./server/devbundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webpack.client.js */ \"./webpack.client.js\");\n/* harmony import */ var _webpack_client_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_client_js__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n// Webpack development\n\n\n\n // End module for dev only \n\nconst Bundler = app => {\n  if (true) {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_client_js__WEBPACK_IMPORTED_MODULE_3___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: (_webpack_client_js__WEBPACK_IMPORTED_MODULE_3___default().output.publicPath)\n    });\n    const hotMiddleware = webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler);\n    app.use(middleware);\n    app.use(hotMiddleware);\n  }\n};\n\nconst _default = {\n  Bundler\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Bundler, \"Bundler\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\devbundle.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\devbundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./server/devbundle.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/config */ \"./server/config/config.js\");\n/* harmony import */ var _devbundle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./devbundle */ \"./server/devbundle.js\");\n/* harmony import */ var _routers_user_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routers/user.router */ \"./server/routers/user.router.js\");\n/* harmony import */ var _routers_auth_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routers/auth.router */ \"./server/routers/auth.router.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../templates */ \"./templates.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _client_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../client/router */ \"./client/router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../client/theme */ \"./client/theme.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n/*\r\n* Express router\r\n*/\n\n\n // templates \n\n\n/*\r\n*  SSR Server Side Rendering\r\n*/\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst CWD = process.cwd();\n_devbundle__WEBPACK_IMPORTED_MODULE_8__.default.Bundler(app);\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().static(path__WEBPACK_IMPORTED_MODULE_2___default().join(CWD, \"/build/\")));\napp.use(\"/build\", express__WEBPACK_IMPORTED_MODULE_1___default().static(path__WEBPACK_IMPORTED_MODULE_2___default().join(CWD, \"/build/\")));\n/*\r\n*\r\n*  Router express\r\n*\r\n*/\n\napp.use('/', _routers_user_router__WEBPACK_IMPORTED_MODULE_9__.default);\napp.use('/', _routers_auth_router__WEBPACK_IMPORTED_MODULE_10__.default);\n/***********\r\n*  Route to render React Component\r\n*  SSR Route.\r\n************/\n\napp.get(\"*\", (req, res) => {\n  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__.ServerStyleSheets();\n  const context = {};\n  const Markup = react_dom_server__WEBPACK_IMPORTED_MODULE_13___default().renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__.ThemeProvider, {\n    theme: _client_theme__WEBPACK_IMPORTED_MODULE_17__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_client_router__WEBPACK_IMPORTED_MODULE_14__.default, null)))));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  const style1 = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(CWD, \"/client/style.css\"));\n  const style2 = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(CWD, \"/client/stylesheets/main.css\"));\n  const bootstrap = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(CWD, \"client/bootstrap.min.css\"));\n\n  const mergeCss = (...file) => {\n    const files = [...file];\n    return files.join(\" \");\n  };\n\n  const materialUICss = sheets.toString();\n  res.status(200).send((0,_templates__WEBPACK_IMPORTED_MODULE_11__.default)({\n    markup: Markup,\n    css: mergeCss(style1, style2),\n    topCss: mergeCss(bootstrap),\n    muicss: materialUICss\n  }));\n});\n/************\r\n* SSR React Component\r\n* End of SSR\r\n*************/\n\nmongoose__WEBPACK_IMPORTED_MODULE_5___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_7__.default.mongouri, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true,\n  useFindAndModify: false\n}, error => {\n  if (error) {\n    console.log(error);\n  }\n\n  console.log(\"Connection to mongoDB : Successfully.\");\n});\napp.listen(_config_config__WEBPACK_IMPORTED_MODULE_7__.default.port, () => {\n  console.log(`Server running at ${_config_config__WEBPACK_IMPORTED_MODULE_7__.default.port} :\\nVisit at : http://localhost:${_config_config__WEBPACK_IMPORTED_MODULE_7__.default.port}`);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\index.js\");\n  reactHotLoader.register(CWD, \"CWD\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./server/index.js?");

/***/ }),

/***/ "./server/models/user.js":
/*!*******************************!*\
  !*** ./server/models/user.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst UserSchemas = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  firstname: {\n    type: String\n  },\n  lastname: {\n    type: String\n  },\n  email: {\n    type: String,\n    index: {\n      unique: true,\n      sparse: true\n    }\n  },\n  hashed_password: {\n    type: String\n  },\n  favorite: [{\n    item: {\n      type: String\n    },\n    note: {\n      type: String,\n      default: \"none\"\n    }\n  }]\n});\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Usermodels_db1234', UserSchemas);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchemas, \"UserSchemas\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\models\\\\user.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\models\\\\user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./server/models/user.js?");

/***/ }),

/***/ "./server/routers/auth.router.js":
/*!***************************************!*\
  !*** ./server/routers/auth.router.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth */ \"./server/controllers/auth.js\");\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst Router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nRouter.post('/user/auth/signin', _controllers_auth__WEBPACK_IMPORTED_MODULE_1__.default.signin);\nRouter.get(\"/user/auth/signout\", _controllers_auth__WEBPACK_IMPORTED_MODULE_1__.default.signout);\nRouter.get(\"/user/auth/:id\", _controllers_auth__WEBPACK_IMPORTED_MODULE_1__.default.requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__.default.read);\nconst _default = Router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Router, \"Router\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\routers\\\\auth.router.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\routers\\\\auth.router.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./server/routers/auth.router.js?");

/***/ }),

/***/ "./server/routers/user.router.js":
/*!***************************************!*\
  !*** ./server/routers/user.router.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth */ \"./server/controllers/auth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst Router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nRouter.post(\"/user/action/add-user/\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.create);\nRouter.get(\"/user/action/users/\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.list);\nRouter.put(\"/user/action/:id\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.addFavorite);\nRouter.get(\"/user/action/:id\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.oneUser);\nRouter.put(\"/user/action/update/:id\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.removeInFavorite);\nconst _default = Router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Router, \"Router\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\routers\\\\user.router.js\");\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\server\\\\routers\\\\user.router.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./server/routers/user.router.js?");

/***/ }),

/***/ "./templates.js":
/*!**********************!*\
  !*** ./templates.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css,\n  topCss,\n  muicss\n}) => {\n  return `<!DOCTYPE html>\n    <html>\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>Your site - Official website</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta name=\"description\" content=\"Description of your services for SEO purpose\"/>\n        <style type=\"text/css\">${topCss}</style>\n        <style id=\"jsserver-css\">${muicss}</style>\n    </head>\n    <body>\n        <div id=\"entryContent\">${markup}</div>\n        <script type=\"text/javascript\" src=\"/build/bundle.js\"></script>\n    <style type=\"text/css\">\n    ${css}\n    </style>\n    </body>\n    </html>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\templates.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./templates.js?");

/***/ }),

/***/ "./webpack.client.js":
/*!***************************!*\
  !*** ./webpack.client.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CWD = process.cwd();\nconst config = {\n  name: \"client\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CWD, \"client/index.js\")],\n  output: {\n    path: path.join(CWD, \"/build/\"),\n    filename: \"bundle.js\",\n    publicPath: \"/build/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.(js|jsx)$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.(css|scss)$/,\n      use: [\"style-loader\", \"css-loader\"]\n    }, {\n      test: /\\.(png|jpg|jpeg|svg|gif|pdf)$/,\n      use: [\"file-loader\"]\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CWD, \"CWD\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\webpack.client.js\");\n  reactHotLoader.register(config, \"config\", \"F:\\\\MERN STACK\\\\MAIN PROJECT\\\\Templater\\\\webpack.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://sourcecode/./webpack.client.js?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/colors");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-jwt");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./server/index.js");
/******/ })()
;