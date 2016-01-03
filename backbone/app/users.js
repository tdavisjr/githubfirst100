define(function(require, exports, module){
    var Backbone = require("backbone");
    var $ = require("jquery");
    var User = require("user");

    module.exports = Backbone.Collection.extend({
        model: User,
        url: 'https://api.github.com/users'
    });
    

});