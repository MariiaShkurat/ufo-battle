import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { PreferencesService } from '../../shared/services/preferences.service';
import { GameStateService } from '../../shared/services/game-state.service';
import { UfoService } from '../../shared/services/ufo.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrl: './play.component.css',
})
export class PlayComponent implements OnInit {
  ufos = this.ufoService.ufos;
  private moveUfosInterval: any;

  constructor(
    private preferencesService: PreferencesService,
    private ufoService: UfoService,
    private gameStateService: GameStateService
  ) {}

  ngOnInit(): void {
    this.gameStateService.startGame();

    const preferences = this.preferencesService.getPreferences();
    const gameArea = {
      width: 800,
      height: 600,
    };
    this.ufoService.createUFOs(preferences.ufosNumber, gameArea);
    this.moveUfosInterval = setInterval(() => this.ufoService.moveUFOs(), 25);
  }

  ngOnDestroy(): void {
    if (this.moveUfosInterval) {
      clearInterval(this.moveUfosInterval);
    }

    this.gameStateService.stopGame();
  }
}
