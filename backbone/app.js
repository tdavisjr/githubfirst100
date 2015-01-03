    var app = {};

    (function ($) {
        "use scrict";

        var GitHubUser = Backbone.Model.extend({});

        var GitHubUsers = Backbone.Collection.extend({
            model: GitHubUser,
            url: 'https://api.github.com/users'
        });


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

                console.log(this.collection)
                this.listenTo(this.collection, 'add', this.renderUser);
                this.listenTo(this.collection, 'sync', this._onFetchComplete);

                this.collection.fetch();
            },

            _onFetchComplete: function () {
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
            new GitHubApp({collection: new GitHubUsers()});
        };

    }(jQuery));

    app.init();