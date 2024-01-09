import { Component, ViewEncapsulation } from '@angular/core';
import { GameStateService } from '../../../shared/services/game-state.service';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrl: './game-panel.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GamePanelComponent {
  score: number = 0;

  constructor(private gameStateService: GameStateService) {}

  ngOnInit(): void {
    this.score = this.gameStateService.getScore();
  }
}
