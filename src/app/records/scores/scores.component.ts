import { Component } from '@angular/core';
import { UsersServiceService } from '../../../shared/services/users-service.service';
import { TokenmngService } from '../../../shared/services/tokenmng.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css',
})
export class ScoresComponent {
  scoresList: Array<any> = [];

  constructor(
    private scores: UsersServiceService,
    private tokenMngService: TokenmngService
  ) {}

  listScores(): void {
    this.scores.getRecords().subscribe({
      next: (values) => {
        this.scoresList = values;
        this.tokenMngService.refreshTokenTimeout();
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  ngOnInit(): void {
    this.listScores();
  }
}
