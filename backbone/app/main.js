require.config({
    paths: {
        jquery: '../vendor/jquery/dist/jquery.min',
        backbone: '../vendor/backbone/backbone',
        underscore: '../vendor/underscore/underscore'  
    },
    shim: {
        'backbone': {
          deps: ['underscore', 'jquery']  
        }
    }

});

require(['jquery', 'appView', 'users'], function($, AppView, Users){
 
    $(function(){
        new AppView({ collection: new Users() });
    });

});