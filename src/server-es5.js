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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

		_this.state = {
			email: '',
			password: ''
		};
		return _this;
	}

	_createClass(Login, [{
		key: 'onSubmit',
		value: function onSubmit() {
			_axios2.default.post('/api/user/login', {
				email: this.state.email.toUpperCase(),
				password: this.state.password
			}).then(function (res) {
				console.log(res.data);
			}).catch(function (err) {
				console.log(err);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'col-md-3' },
				_react2.default.createElement(
					'form',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'form-group row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-4' },
							_react2.default.createElement(
								'label',
								null,
								'Email: '
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-8' },
							_react2.default.createElement('input', {
								type: 'text',
								className: 'form-control',
								value: this.state.email,
								onChange: function onChange(event) {
									return _this2.setState({ email: event.target.value });
								} })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-4' },
							_react2.default.createElement(
								'label',
								null,
								' Password '
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-8' },
							_react2.default.createElement('input', { type: 'password',
								className: 'form-control',
								value: this.state.password,
								onChange: function onChange(event) {
									return _this2.setState({ password: event.target.value });
								} })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group row' },
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-primary', onClick: this.onSubmit.bind(this) },
							'Log In'
						)
					)
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _Alert = __webpack_require__(10);

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
	_inherits(Signup, _React$Component);

	function Signup(props) {
		_classCallCheck(this, Signup);

		var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

		_this.state = {
			email: '',
			password: ''
		};
		return _this;
	}

	_createClass(Signup, [{
		key: 'onSubmit',
		value: function onSubmit() {
			_axios2.default.post('/api/user/signup', {
				email: this.state.email.toUpperCase(),
				password: this.state.password
			}).then(function (res) {
				console.log(res.data);
			}).catch(function (err) {
				console.log(err);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'col-md-3' },
				_react2.default.createElement(
					'form',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'form-group row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-4' },
							_react2.default.createElement(
								'label',
								null,
								'Email: '
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-8' },
							_react2.default.createElement('input', {
								type: 'text',
								className: 'form-control',
								value: this.state.email,
								onChange: function onChange(event) {
									return _this2.setState({ email: event.target.value });
								} })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-4' },
							_react2.default.createElement(
								'label',
								null,
								' Password '
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-8' },
							_react2.default.createElement('input', { type: 'password',
								className: 'form-control',
								value: this.state.password,
								onChange: function onChange(event) {
									return _this2.setState({ password: event.target.value });
								} })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group row' },
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-primary', onClick: this.onSubmit.bind(this) },
							'Register'
						)
					)
				),
				_react2.default.createElement(_Alert2.default, { type: 'success', message: 'FINALLY' })
			);
		}
	}]);

	return Signup;
}(_react2.default.Component);

exports.default = Signup;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-alert");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _server = __webpack_require__(8);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _AppRoutes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(12);
var mongoose = __webpack_require__(3);
var app = express();
var env = process.env.NODE_ENV || 'dev';
var cookieSession = __webpack_require__(13);
var passport = __webpack_require__(14);
var path = __webpack_require__(15);

// Config
if (env === 'dev') {
  __webpack_require__(16)(app);
}
app.use(cookieSession({
  secret: process.env.SECRET,
  maxAge: 2 * 24 * 60 * 60 * 1000 //2 days
}));
__webpack_require__(18);
app.use(passport.initialize());
app.use(passport.session());
__webpack_require__(20)(passport);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));

// Routes
__webpack_require__(22)(app, passport);

app.get('*', function (req, res) {
  var markup = '';
  var status = 200;

  var context = {};
  markup = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_AppRoutes.AppRoutes, null)
  ));

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    return res.redirect(302, context.url);
  }

  if (context.is404) {
    status = 404;
  }

  return res.status(status).render('index', { markup: markup });
});

mongoose.connect(process.env.MONGODB, { useMongoClient: true }, function (err) {
  if (err) {
    throw err;
  }
  console.log('Connection Successful');
});

app.listen(process.env.PORT, function () {
  console.log('Listening on Port: ', process.env.PORT);
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppRoutes = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Login = __webpack_require__(4);

var _Login2 = _interopRequireDefault(_Login);

var _Signup = __webpack_require__(5);

var _Signup2 = _interopRequireDefault(_Signup);

var _Layout = __webpack_require__(11);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageNotFound = function PageNotFound() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'Page Not Found'
		)
	);
};

var AppRoutes = exports.AppRoutes = function AppRoutes() {
	return _react2.default.createElement(_Layout2.default, null);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _reactAlert = __webpack_require__(6);

var _reactAlert2 = _interopRequireDefault(_reactAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_React$Component) {
	_inherits(Alert, _React$Component);

	function Alert(props) {
		_classCallCheck(this, Alert);

		var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

		var alertOptions = {
			offset: 100,
			position: 'bottom right',
			theme: 'dark',
			time: 5000,
			transition: 'scale'
		};
		_this.state = {
			email: '',
			password: ''
		};
		return _this;
	}

	_createClass(Alert, [{
		key: 'showAlert',
		value: function showAlert(type, text) {
			this.msg.show(text, {
				type: type
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_reactAlert2.default, _extends({ ref: function ref(a) {
						return _this2.msg = a;
					} }, this.alertOptions)),
				_react2.default.createElement(
					'button',
					{ onClick: this.showAlert.bind(this, this.props.type, this.props.message) },
					'Bang'
				)
			);
		}
	}]);

	return Alert;
}(_react2.default.Component);

exports.default = Alert;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactAlert = __webpack_require__(6);

var _reactAlert2 = _interopRequireDefault(_reactAlert);

var _Login = __webpack_require__(4);

var _Login2 = _interopRequireDefault(_Login);

var _Signup = __webpack_require__(5);

var _Signup2 = _interopRequireDefault(_Signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageNotFound = function PageNotFound() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'Page Not Found'
		)
	);
};

var Layout = function (_React$Component) {
	_inherits(Layout, _React$Component);

	function Layout(props) {
		_classCallCheck(this, Layout);

		var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

		var alertOptions = {
			offset: 100,
			position: 'bottom left',
			theme: 'dark',
			time: 5000,
			transition: 'scale'
		};
		_this.state = { active: '' };
		return _this;
	}

	_createClass(Layout, [{
		key: 'isActive',
		value: function isActive(button) {
			if (button === this.state.active) {
				return 'nav-link active';
			} else return 'nav-link';
		}
	}, {
		key: 'showAlert',
		value: function showAlert(type, text) {
			this.msg.show(text, {
				type: type
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'app-container' },
				_react2.default.createElement(
					'header',
					null,
					_react2.default.createElement(
						'nav',
						{ className: 'navbar navbar-expand-sm nav-pills' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/', className: 'navbar-brand',
								onClick: function onClick() {
									return _this2.setState({ active: '' });
								} },
							_react2.default.createElement(
								'h3',
								null,
								'The Store'
							)
						),
						_react2.default.createElement(
							_reactRouterDom.Link,
							{
								to: '/signup',
								className: this.isActive("signup"),
								onClick: function onClick() {
									return _this2.setState({ active: 'signup' });
								} },
							'Sign Up'
						),
						_react2.default.createElement(
							_reactRouterDom.Link,
							{
								to: '/login',
								className: this.isActive('login'),
								onClick: function onClick() {
									return _this2.setState({ active: 'login' });
								} },
							'Login'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'app-content' },
					_react2.default.createElement(
						_reactRouterDom.Switch,
						null,
						_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/' }),
						_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/signup', render: function render() {
								return _react2.default.createElement(_Signup2.default, { show: _this2.showAlert.bind(_this2, 'error', "Booyah") });
							} }),
						_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _Login2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { component: PageNotFound })
					)
				),
				_react2.default.createElement(
					'footer',
					null,
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/hello' },
							' Footer '
						),
						' '
					),
					_react2.default.createElement(_reactAlert2.default, _extends({ ref: function ref(a) {
							return _this2.msg = a;
						} }, this.alertOptions)),
					_react2.default.createElement(
						'button',
						{ onClick: this.showAlert.bind(this, 'error', "Booyah") },
						'Show Alert'
					)
				)
			);
		}
	}]);

	return Layout;
}(_react2.default.Component);

;

exports.default = Layout;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(17);

module.exports = function (app) {
	process.env.PORT = 3000;
	process.env.MONGODB = keys.MONGODB;
	process.env.SECRET = keys.SECRET;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	MONGODB: 'mongodb://MichaelDDo:Bangbang@ds013495.mlab.com:13495/linhstore',
	SECRET: 'OXlSl9wBPCE1IgjsEzfkCSELICDIWTMxxlywe8g4oOTWJIoIAUOH32nkDu03XO6'
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(3);
var Schema = mongoose.Schema;

var bcrypt = __webpack_require__(19);

var userSchema = new Schema({
	email: String,
	password: String,
	googleId: String,
	facebookId: String,
	memberSince: { type: Date, default: Date.now() },
	role: { type: String, default: "unverified" }
});

userSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model("User", userSchema);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LocalStrategy = __webpack_require__(21).Strategy;
var mongoose = __webpack_require__(3);
var User = mongoose.model('User');

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user._id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	// Local Sign-up
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function (req, email, password, done) {

		process.nextTick(function () {
			User.findOne({ email: email }, function (err, user) {
				if (err) {
					return done(err);
				}
				if (user) {
					return done(null, false, { message: "You already have an account!" });
				} else {
					var newUser = new User();

					newUser.email = email;
					newUser.password = newUser.generateHash(password);
					newUser.save(function (err) {
						if (err) {
							throw err;
						}
						return done(null, newUser, { message: 'User Created' });
					});
				}
			});
		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function (req, email, password, done) {
		User.findOne({ email: email }, function (err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false, { message: 'A user with that email was not found' });
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: "Wrong password" });
			}

			return done(null, user);
		});
	}));
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jsonParser = __webpack_require__(23).json();

module.exports = function (app, passport) {
	app.post('/api/user/signup', jsonParser, function (req, res, next) {
		passport.authenticate('local-signup', function (err, user, info) {
			if (err) {
				return next(err);
			}
			res.send(info);
		})(req, res, next);
	});

	app.post('/api/user/login', passport.authenticate('local-login', function (req, res) {
		console.log(req.user);
	}));
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ })
/******/ ]);