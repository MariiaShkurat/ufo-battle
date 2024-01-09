import { Injectable } from '@angular/core';
import { Missile } from '../models/missile.model';
import { UfoService } from './ufo.service';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class MissileService {
  missile: Missile = {
    position: { x: 700, y: 0 },
    velocity: 5,
    isLaunched: false,
    imageUrl: '../../assets/pngs/misil.png',
    width: 40,
    height: 70,
  };
  private launchIntervalId: any;

  constructor(
    private ufoService: UfoService,
    private GameStateService: GameStateService
  ) {}

  moveRight(): void {
    const rightLimit = window.innerWidth - 40;
    if (this.missile.position.x < rightLimit) {
      this.missile.position.x += this.missile.velocity;
    }
  }

  moveLeft(): void {
    if (this.missile.position.x > 0) {
      this.missile.position.x -= this.missile.velocity;
    }
  }

  launch(): void {
    if (!this.missile.isLaunched) {
      this.missile.isLaunched = true;
      this.launchIntervalId = setInterval(() => {
        this.missile.position.y += this.missile.velocity;

        const hitUfo = this.ufoService.hitCheck(this.missile);
        if (hitUfo) {
          this.GameStateService.addScore(100);
          this.resetMissile();
        }

        if (this.missile.position.y > window.innerHeight) {
          this.resetMissile();
          this.GameStateService.subtractScore(25);
        }
      }, 10);
    }
  }
  resetMissile(): void {
    clearInterval(this.launchIntervalId);
    this.missile.isLaunched = false;
    this.missile.position.y = 0;
  }

  getMessile(): any {
    return this.missile;
  }
}
