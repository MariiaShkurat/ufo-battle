import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../../shared/services/users-service.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css',
})
export class ScoresComponent {
  scoresList: Array<any> = [];

  constructor(private scores: UsersServiceService) {}

  listScores(): void {
    this.scores.getRecords().subscribe({
      next: (values) => {
        this.scoresList = values;
      },
      error: (error) => {
        console.log('There was an error');
      },
    });
  }

  ngOnInit(): void {
    this.listScores();
  }
}
