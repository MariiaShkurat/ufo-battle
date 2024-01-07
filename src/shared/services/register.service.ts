import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../models/config';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  checkUsernameAvailability(username: string): Observable<any> {
    return this.http.get(`${config.base_url}/users/${username}`);
  }

  register(user: User): Observable<any> {
    return this.http.post(`${config.base_url}/users`, user);
  }
}
