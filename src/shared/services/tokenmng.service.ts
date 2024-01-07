import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenmngService {
  private isLoggedInSource = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.isLoggedInSource.asObservable();
  private tokenExpirationTimer: any;

  constructor(private router: Router) {}

  saveToken(token: string): void {
    sessionStorage.setItem('token', token);
    this.isLoggedInSource.next(true);
    this.refreshTokenTimeout();
  }

  refreshTokenTimeout(): void {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = setTimeout(() => {
      this.clearToken();
    }, 600000);
  }

  clearToken(): void {
    sessionStorage.removeItem('token');
    this.isLoggedInSource.next(false);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
    this.router.navigate(['']);
  }
}
