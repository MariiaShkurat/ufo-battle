import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../models/config';
import { RecordData } from '../models/record-data.model';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  constructor(private http: HttpClient) {}

  getRecords(): Observable<any> {
    return this.http.get(`${config.base_url}/records`);
  }

  getRecordsByUsername(username: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    return this.http.get(`${config.base_url}/records/${username}`, { headers });
  }

  postRecord(data: RecordData, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    });

    return this.http.post(`${config.base_url}/records`, data, { headers });
  }
}
