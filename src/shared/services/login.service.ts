import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { config } from '../models/config';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: string, pwd: string): Observable<any> {
    return this.http.get(
      config.base_url + '/users/login?username=' + user + '&password=' + pwd,
      { observe: 'response' }
    );
  }
}
