import {
    inject
} from 'aurelia-framework';
import {
    HttpClient
} from 'aurelia-fetch-client';


@inject(HttpClient)
export class Users {
    users = [];

    constructor(http) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://api.github.com/');
        });

        this.http = http;

    }

    activate(app) {
        return this.http.fetch('users')
            .then(response => response.json())
            .then(users => {
                this.users = users;
                app.loading = false;
            });
    }
}