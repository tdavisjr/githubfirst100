"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_React$Component) {
    _inherits(User, _React$Component);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(User).apply(this, arguments));
    }

    _createClass(User, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "center-block" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "a",
                        { href: this.props.data.html_url, target: "_blank" },
                        React.createElement("img", { src: this.props.data.avatar_url, className: "img-circle" })
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "a",
                        { href: this.props.data.html_url, target: "_blank" },
                        this.props.data.login
                    )
                )
            );
        }
    }]);

    return User;
}(React.Component);

var UserList = function (_React$Component2) {
    _inherits(UserList, _React$Component2);

    function UserList(props) {
        _classCallCheck(this, UserList);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(UserList).call(this, props));

        _this2.state = { data: [] };
        return _this2;
    }

    _createClass(UserList, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {

            var users = [{
                login: "mojombo",
                html_url: "https://github.com/mojombo",
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=3"
            }];

            return React.createElement(
                "div",
                null,
                users.map(function (user) {
                    return React.createElement(User, { key: user.login, data: user });
                })
            );
        }
    }]);

    return UserList;
}(React.Component);

var Loader = function (_React$Component3) {
    _inherits(Loader, _React$Component3);

    function Loader() {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Loader).apply(this, arguments));
    }

    _createClass(Loader, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-2 col-md-offset-5 well well-lg bg-info" },
                    React.createElement("span", { className: "glyphicon glyphicon-refresh" }),
                    "Loading..."
                )
            );
        }
    }]);

    return Loader;
}(React.Component);

var App = function (_React$Component4) {
    _inherits(App, _React$Component4);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "page-header" },
                    React.createElement(
                        "h1",
                        null,
                        "GitHub First 100"
                    )
                ),
                React.createElement(Loader, null),
                React.createElement(UserList, null)
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));