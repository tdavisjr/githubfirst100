class DataService {
    constructor($http){
        this.$http = $http;
    }
    
    getUsers(){
        return this.$http.get('https://api.github.com/users');
    }
}

class UsersController {
    constructor(dataService, $scope){
        this.dataService = dataService;
        this.$scope = $scope;

        this.users = [];
        
        this.dataService
            .getUsers()
            .then(resp => {
                this.users = resp.data;
                this.$scope.$emit('users:loaded');
            });
    }

}

class AppController{ 
    constructor($scope){
        this.loading = true;
        
        $scope.$on("users:loaded", ()=> this.loading = false);
    }
}

angular
    .module('app', [])
    .controller('AppController', AppController)
    .controller('UsersController', UsersController)
    .service('dataService', DataService);