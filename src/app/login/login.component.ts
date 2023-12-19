import { Component } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { TokenmngService } from '../../shared/services/tokenmng.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mytoken: string = '';

  constructor(private user: LoginService, private tknmg: TokenmngService) {}

  doLogin(): void {
    this.user.login(this.username, this.password).subscribe({
      next: (response) => {
        this.mytoken = response.headers.get('Authorization');
        console.log(this.mytoken);
        this.tknmg.saveToken(this.mytoken);
      },
    });
  }
}
