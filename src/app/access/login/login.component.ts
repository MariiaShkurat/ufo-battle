import { Component } from '@angular/core';
import { LoginService } from '../../../shared/services/login.service';
import { TokenmngService } from '../../../shared/services/tokenmng.service';
import { StatusMessageService } from '../../../shared/services/status-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mytoken: string = '';
  errorMessage: string = '';

  constructor(
    private user: LoginService,
    private tknmg: TokenmngService,
    private statusMessageService: StatusMessageService
  ) {}

  doLogin(): void {
    if (!this.username || !this.password) {
      this.statusMessageService.changeMessage(
        'Please enter both username and password.',
        'error'
      );
      return;
    }
    this.user.login(this.username, this.password).subscribe({
      next: (response) => {
        this.mytoken = response.headers.get('Authorization');
        this.tknmg.saveToken(this.mytoken);
        this.statusMessageService.changeMessage('Login successful!', 'success');
        this.username = '';
        this.password = '';
      },
      error: (err) => {
        this.statusMessageService.changeMessage(
          err.error.message || 'Login failed. Please try again.',
          'error'
        );
        this.username = '';
        this.password = '';
      },
    });
  }
}
