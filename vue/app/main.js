require.config({
  paths: {
    fetch: '../vendor/fetch/fetch',
    vue: '../vendor/vue/dist/vue.min',
  },
  shim: {
    "fetch": {
      exports: 'fetch'
    }
  }
});

var modules = [
  'vue',
  'fetch',
  'pageHeaderView',
  'loaderView',
  'usersView'

];

require(modules, function(Vue, fetch, PageHeaderView, LoaderView, UsersView) {

  Vue.component('page-header', PageHeaderView);
  Vue.component('loader', LoaderView);
  Vue.component('users-list', UsersView);

  var vm = new Vue({
    el: '#app',
    data: {
      isLoading: true,
      users: []
    },
    created: function() {

    },
    ready: function() {
      var self = this;

      fetch('https://api.github.com/users')
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          self.users = data;
          self.isLoading = false;
        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
        });
    }
  });

});
