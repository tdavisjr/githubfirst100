import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {
    constructor(private http: Http){}

    getUsers(): Promise<any[]> {
        return  this.http.get('https://api.github.com/users')
                    .toPromise()
                    .then(resp => resp.json())
                    .catch(this.handleError);
    }

    private handleError(error: any){
        console.error(error);
        return Promise.reject(error.message || error);
    }
}