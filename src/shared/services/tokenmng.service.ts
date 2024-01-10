import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TokenmngService {
  private isLoggedInSource = new BehaviorSubject<boolean>(
    this.checkInitialLoginStatus()
  );
  isLoggedIn = this.isLoggedInSource.asObservable();

  private tokenExpirationTimer: any;

  constructor(private router: Router) {}

  private checkInitialLoginStatus(): boolean {
    const userDataJson = sessionStorage.getItem('userData');
    const userData = userDataJson ? JSON.parse(userDataJson) : null;
    return !!userData && !!userData.token;
  }

  saveUserData({ username, token }: User): void {
    const userData = { username, token };
    sessionStorage.setItem('userData', JSON.stringify(userData));
    this.isLoggedInSource.next(true);
    this.refreshTokenTimeout();
  }

  getUserData(): User | null {
    const userDataJson = sessionStorage.getItem('userData');
    return userDataJson ? JSON.parse(userDataJson) : null;
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
    sessionStorage.removeItem('userData');
    this.isLoggedInSource.next(false);

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
    this.router.navigate(['']);
  }
}
