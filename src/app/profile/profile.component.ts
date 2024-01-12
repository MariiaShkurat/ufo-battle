import { Component, ViewEncapsulation } from '@angular/core';
import { PasswordChange } from '../../shared/models/password-changing.model';
import { StatusMessageService } from '../../shared/services/status-message.service';
import { TokenmngService } from '../../shared/services/tokenmng.service';
import { ChangePasswordService } from '../../shared/services/change-password.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent {
  passwordChangeData: PasswordChange = {
    username: '',
    newPassword: '',
  };
  confirmNewPassword = '';
  token = '';

  constructor(
    private statusMessageService: StatusMessageService,
    private tokenmngService: TokenmngService,
    private changePasswordService: ChangePasswordService
  ) {}

  ngOnInit(): void {
    const userData = this.tokenmngService.getUserData();
    if (userData) {
      this.passwordChangeData.username = userData.username;
      this.token = userData.token!;
    }
  }

  changePassword(): void {
    if (this.passwordChangeData.newPassword !== this.confirmNewPassword) {
      this.statusMessageService.changeMessage(
        'Passwords do not match',
        'error'
      );
      return;
    }
    if (!this.passwordChangeData.newPassword || !this.confirmNewPassword) {
      this.statusMessageService.changeMessage(
        'Please fill up the fields',
        'error'
      );
      return;
    }

    this.changePasswordService
      .changePassword(this.passwordChangeData, this.token)
      .subscribe({
        next: (response) => {
          this.statusMessageService.changeMessage(
            'Password successfully changed',
            'success'
          );
          this.passwordChangeData.newPassword = '';
          this.confirmNewPassword = '';
        },
        error: (error) => {
          this.statusMessageService.changeMessage(
            'Error while changing password',
            'error'
          );
          this.passwordChangeData.newPassword = '';
          this.confirmNewPassword = '';
        },
      });
  }
}
