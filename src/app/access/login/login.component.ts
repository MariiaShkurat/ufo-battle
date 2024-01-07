import { Component } from '@angular/core';
import { LoginService } from '../../../shared/services/login.service';
import { TokenmngService } from '../../../shared/services/tokenmng.service';
import { StatusMessageService } from '../../../shared/services/status-message.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  currUser: User = { username: '', password: '' };

  constructor(
    private loginService: LoginService,
    private tokenMngService: TokenmngService,
    private statusMessageService: StatusMessageService
  ) {}

  doLogin(): void {
    if (!this.currUser.username || !this.currUser.password) {
      this.statusMessageService.changeMessage(
        'Please enter both username and password.',
        'error'
      );
      return;
    }
    this.loginService.login(this.currUser).subscribe({
      next: (response) => {
        const token = response.headers.get('Authorization');
        if (token) {
          this.currUser.token = token;
          this.tokenMngService.saveUserData(this.currUser);
          this.statusMessageService.changeMessage(
            'Login successful!',
            'success'
          );
        } else {
          this.statusMessageService.changeMessage(
            'Token not found in the response.',
            'error'
          );
        }

        this.currUser.username = '';
        this.currUser.password = '';
      },
      error: (err) => {
        this.statusMessageService.changeMessage(
          err.error.message || 'Login failed. Please try again.',
          'error'
        );
        this.currUser.username = '';
        this.currUser.password = '';
      },
    });
  }
}
