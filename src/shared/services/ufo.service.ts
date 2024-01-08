import { Injectable } from '@angular/core';
import { UFO } from '../models/ufo.model';

@Injectable({
  providedIn: 'root',
})
export class UfoService {
  ufos: UFO[] = [];

  constructor() {}

  createUFOs(
    quantity: number,
    gameArea: { width: number; height: number }
  ): void {
    for (let i = 0; i < quantity; i++) {
      const newLeft = Math.random() * gameArea.width;
      const newBottom = Math.random() * (gameArea.height - 100) + 50; // 100 and 50 are arbitrary numbers for offset

      const ufo: UFO = {
        position: {
          x: newLeft,
          y: newBottom,
        },
        imageUrl: '../../assets/pngs/ufo.png',
        class: 'setOfUfos',
        horStep: 5,
      };

      this.ufos.push(ufo);
    }
  }

  moveUFOs(): void {
    const rightLimit = window.innerWidth;

    this.ufos.forEach((ufo) => {
      ufo.position.x += ufo.horStep;
      const widthUfo = 60;
      if (ufo.position.x + widthUfo > rightLimit || ufo.position.x < 0) {
        ufo.horStep = -ufo.horStep;
      }
    });
  }

  clearUFOs(): void {
    this.ufos = [];
  }
}
