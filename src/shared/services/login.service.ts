import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { config } from '../models/config';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.get(
      `${config.base_url}/users/login?username=${user.username}&password=${user.password}`,
      { observe: 'response' }
    );
  }
}
