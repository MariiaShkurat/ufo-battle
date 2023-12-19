import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenmngService {
  constructor() {}

  saveToken(thetoken: string): void {
    sessionStorage.setItem('token', thetoken);
  }
}
