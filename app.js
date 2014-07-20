var app = {};

(function ($) {
    "use scrict";

    var GitHubUser = Backbone.Model.extend({});

    var GitHubUsers = Backbone.Collection.extend({
        model: GitHubUser,
        url: 'https://api.github.com/users'
    });

    app.users = new GitHubUsers();

    var UserView = Backbone.View.extend({
        tagName: 'div',
        className: 'col-md-1',

        template: _.template($('#user-row').html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });


    var GitHubApp = Backbone.View.extend({
        el: '#app',

        events: {

        },

        initialize: function () {
            this.$list = $('.row');

            this.listenTo(app.users, 'add', this.renderUser);
            this.listenTo(app.users, 'sync', this._onFetchComplete);

            app.users.fetch();
        },
        
        _onFetchComplete: function(){
            this.$('.bg-info').remove();
        },

        renderUser: function (user) {
            var aUser = new UserView({
                model: user
            });
            var html = aUser.render().el;

            this.$list.append(html);
        },
    });

    app.init = function () {
        new GitHubApp();
    };

}(jQuery));

app.init();