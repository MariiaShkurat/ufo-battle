import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Renderer2,
} from '@angular/core';
import { PreferencesService } from '../../shared/services/preferences.service';
import { GameStateService } from '../../shared/services/game-state.service';
import { UfoService } from '../../shared/services/ufo.service';
import { MissileService } from '../../shared/services/missile.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrl: './play.component.css',
})
export class PlayComponent implements OnInit {
  ufos = this.ufoService.ufos;
  missile = this.missileService.missile;
  private moveUfosInterval: any;

  constructor(
    private renderer: Renderer2,
    private preferencesService: PreferencesService,
    private ufoService: UfoService,
    private gameStateService: GameStateService,
    private missileService: MissileService
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'hide-footer');
    this.gameStateService.startGame();

    const preferences = this.preferencesService.getPreferences();
    const gameArea = {
      width: 800,
      height: 600,
    };
    this.ufoService.createUFOs(preferences.ufosNumber, gameArea);
    this.moveUfosInterval = setInterval(() => this.ufoService.moveUFOs(), 25);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.gameStateService.isGameRunning()) {
      if (event.key === 'ArrowRight') {
        this.missileService.moveRight();
      } else if (event.key === 'ArrowLeft') {
        this.missileService.moveLeft();
      } else if (event.key === ' ' && !this.missile.isLaunched) {
        this.missileService.launch();
      }
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'hide-footer');
    if (this.moveUfosInterval) {
      clearInterval(this.moveUfosInterval);
    }

    this.gameStateService.stopGame();
  }
}
