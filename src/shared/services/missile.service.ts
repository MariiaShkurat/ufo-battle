import { Injectable } from '@angular/core';
import { Missile } from '../models/missile.model';

@Injectable({
  providedIn: 'root',
})
export class MissileService {
  missile: Missile = {
    position: { x: 700, y: 0 },
    velocity: 5,
    isLaunched: false,
    imageUrl: '../../assets/pngs/misil.png',
  };
  private launchIntervalId: any;

  constructor() {}

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

        if (this.missile.position.y > window.innerHeight) {
          this.resetMissile();
        }
      }, 10);
    }
  }

  resetMissile(): void {
    clearInterval(this.launchIntervalId);
    this.missile.isLaunched = false;
    this.missile.position.y = 10;
  }
}
