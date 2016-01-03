define(function(require, exports, module){
    var Backbone = require("backbone");
    var UserView = require("userView");
    
    module.exports = Backbone.View.extend({
        el: '#app',

        events: {

        },

        initialize: function () {
            this.$list = $('.row');

            this.listenTo(this.collection, 'add', this.renderUser);
            this.listenTo(this.collection, 'sync', this._onFetchComplete);

            this.collection.fetch();
        },

        _onFetchComplete: function () {
            this.$('.bg-info').remove();
        },

        renderUser: function (user) {
            var aUser = new UserView({model: user});
            var html = aUser.render().el;

            this.$list.append(html);
        },
    });
    
});