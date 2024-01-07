import { Component, ViewEncapsulation } from '@angular/core';
import { RegisterService } from '../../shared/services/register.service';
import { StatusMessageService } from '../../shared/services/status-message.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  user: User = {
    username: '',
    email: '',
    password: '',
  };
  confirmPassword = '';
  isUsernameAvailable = true;

  constructor(
    private registerService: RegisterService,
    private statusMessageService: StatusMessageService
  ) {}

  checkUsername(): void {
    if (this.user.username) {
      this.registerService
        .checkUsernameAvailability(this.user.username)
        .subscribe({
          next: (response) => {
            this.statusMessageService.changeMessage(
              `Username "${this.user.username}" is already taken.`,
              'error'
            );
            this.isUsernameAvailable = false;
          },
          error: (error) => {
            if (error.status === 404) {
              this.isUsernameAvailable = true;
            } else {
              this.statusMessageService.changeMessage(
                'An error occurred while checking username availability.',
                'error'
              );
            }
          },
        });
    }
  }

  registerUser(): void {
    if (this.user.password !== this.confirmPassword) {
      this.statusMessageService.changeMessage(
        'Passwords do not match',
        'error'
      );

      return;
    }
    if (
      !this.user.password ||
      !this.confirmPassword ||
      !this.user.username ||
      !this.user.email
    ) {
      this.statusMessageService.changeMessage(
        'Please fill up the fields.',
        'error'
      );
      console.log('Please fill up the fields.');
      return;
    }
    if (!this.validateEmail(this.user.email!)) {
      this.statusMessageService.changeMessage('Invalid email format', 'error');
      return;
    }

    this.registerService
      .register({
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
      })
      .subscribe({
        next: () => {
          this.statusMessageService.changeMessage(
            'Registration successful',
            'success'
          );
          this.user.username = '';
          this.user.password = '';
          this.user.email = '';
          this.confirmPassword = '';
        },
        error: (err: HttpErrorResponse) => {
          this.statusMessageService.changeMessage(
            err.error.message || 'Registration failed',
            'error'
          );
          this.user.username = '';
          this.user.password = '';
          this.user.email = '';
          this.confirmPassword = '';
        },
      });
  }

  private validateEmail(email: string): boolean {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
}
