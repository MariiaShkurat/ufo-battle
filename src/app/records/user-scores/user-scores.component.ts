import { Component, OnInit } from '@angular/core';
import { TokenmngService } from '../../../shared/services/tokenmng.service';
import { UsersServiceService } from '../../../shared/services/users-service.service';

@Component({
  selector: 'app-user-scores',
  templateUrl: './user-scores.component.html',
  styleUrl: './user-scores.component.css',
})
export class UserScoresComponent implements OnInit {
  userRecords: Array<any> = [];
  username: string = '';
  token: string = '';

  constructor(
    private userService: UsersServiceService,
    private tokenMngService: TokenmngService
  ) {}

  ngOnInit(): void {
    const userData = this.tokenMngService.getUserData();
    if (userData && userData.token && userData.username) {
      this.username = userData.username;
      this.token = userData.token;
      this.loadUserRecords();
    }
  }

  loadUserRecords(): void {
    this.userService.getRecordsByUsername(this.username, this.token).subscribe({
      next: (records) => {
        this.userRecords = records;
        this.tokenMngService.refreshTokenTimeout();
      },
      error: (error) => {
        console.error('Error fetching user records', error);
      },
    });
  }
}
