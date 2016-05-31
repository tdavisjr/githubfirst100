'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataService = function () {
    function DataService($http) {
        _classCallCheck(this, DataService);

        this.$http = $http;
    }

    _createClass(DataService, [{
        key: 'getUsers',
        value: function getUsers() {
            return this.$http.get('https://api.github.com/users');
        }
    }]);

    return DataService;
}();

var UsersController = function UsersController(dataService, $scope) {
    var _this = this;

    _classCallCheck(this, UsersController);

    this.dataService = dataService;
    this.$scope = $scope;

    this.users = [];

    this.dataService.getUsers().then(function (resp) {
        _this.users = resp.data;
        _this.$scope.$emit('users:loaded');
    });
};

var AppController = function AppController($scope) {
    var _this2 = this;

    _classCallCheck(this, AppController);

    this.loading = true;

    $scope.$on("users:loaded", function () {
        return _this2.loading = false;
    });
};

angular.module('app', []).controller('AppController', AppController).controller('UsersController', UsersController).service('dataService', DataService);