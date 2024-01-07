import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores-table',
  templateUrl: './scores-table.component.html',
  styleUrl: './scores-table.component.css',
})
export class ScoresTableComponent implements OnInit {
  @Input() scores: any[] = [];
  @Input() headers: string[] = ['#', 'User', 'Points', 'UFOs', 'Secs.', 'Date'];

  ngOnInit(): void {}
}
