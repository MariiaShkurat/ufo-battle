import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../models/config';
import { PasswordChange } from '../models/password-changing.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  private apiUrl = '/api/change-password';

  constructor(private http: HttpClient) {}

  changePassword(passwordData: PasswordChange, token: string): Observable<any> {
    if (!token) {
      throw new Error('Authentication token not found');
    }

    const changePasswordUrl = `${config.base_url}/users/${passwordData.username}`;
    console.log(passwordData.username);
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    });

    const body = { password: passwordData.newPassword };

    return this.http.patch(changePasswordUrl, body, { headers });
  }
}
