"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get('https://api.github.com/users')
            .toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.handleError = function (error) {
        console.error(error);
        return Promise.reject(error.message || error);
    };
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map