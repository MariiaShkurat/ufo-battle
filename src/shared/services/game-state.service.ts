import { Injectable } from '@angular/core';
import { UfoService } from './ufo.service';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private gameIsRunning = false;
  private score = 0;

  constructor(private ufoService: UfoService) {}

  startGame(): void {
    this.gameIsRunning = true;
  }

  stopGame(): void {
    this.gameIsRunning = false;
    this.ufoService.clearUFOs();
  }

  isGameRunning(): boolean {
    return this.gameIsRunning;
  }

  addScore(points: number): void {
    this.score += points;
  }

  getScore(): number {
    return this.score;
  }
}
