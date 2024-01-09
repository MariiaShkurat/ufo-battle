import { Component, ViewEncapsulation, OnDestroy, OnInit } from '@angular/core';
import { GameStateService } from '../../../shared/services/game-state.service';
import { Subscription, Observable } from 'rxjs';
import { TokenmngService } from '../../../shared/services/tokenmng.service';
import { RecordData } from '../../../shared/models/record-data.model';
import { UsersServiceService } from '../../../shared/services/users-service.service';
UsersServiceService;
import { PreferencesService } from '../../../shared/services/preferences.service';
import { StatusMessageService } from '../../../shared/services/status-message.service';
StatusMessageService;

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrl: './game-panel.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GamePanelComponent implements OnInit, OnDestroy {
  isLoggedIn$!: Observable<boolean>;
  score: number = 0;
  timeLeft: number = 0;
  gameIsRunning: boolean = false;
  private scoreSubscription?: Subscription;
  private timeSubscription?: Subscription;
  private gameRunningSubscription?: Subscription;
  private token: string = '';
  isButtonDisabled: boolean = false;

  constructor(
    private gameStateService: GameStateService,
    private tokenMngService: TokenmngService,
    private usersService: UsersServiceService,
    private preferencesService: PreferencesService,
    private statusMessageService: StatusMessageService
  ) {
    this.initializeUserData();
  }

  initializeUserData(): void {
    const userData = this.tokenMngService.getUserData();
    if (userData && userData.token) {
      this.token = userData.token;
    }
  }

  startNewGame(): void {
    window.location.reload();
  }

  onSaveRecords(): void {
    const preferences = this.preferencesService.getPreferences();

    const recordData: RecordData = {
      punctuation: this.score,
      ufos: preferences.ufosNumber,
      disposedTime: preferences.time,
    };

    if (this.token) {
      this.usersService.postRecord(recordData, this.token).subscribe({
        next: (response) => {
          this.isButtonDisabled = true;
          this.statusMessageService.changeMessage(
            'Records were saved successfully.',
            'success'
          );
          this.tokenMngService.refreshTokenTimeout();
        },
        error: (error) => {
          this.statusMessageService.changeMessage(
            'An error occurred while saving records.',
            'error'
          );
        },
      });
    } else {
      this.statusMessageService.changeMessage('Something went wrong.', 'error');
    }
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.tokenMngService.isLoggedIn;
    this.gameRunningSubscription = this.gameStateService
      .getGameRunningStatus()
      .subscribe((isRunning) => {
        this.gameIsRunning = isRunning;
      });

    this.scoreSubscription = this.gameStateService
      .getScore()
      .subscribe((score) => {
        this.score = score;
      });

    this.timeSubscription = this.gameStateService
      .getTimeLeft()
      .subscribe((time) => {
        this.timeLeft = time;
      });
  }

  ngOnDestroy(): void {
    this.scoreSubscription?.unsubscribe();
    this.timeSubscription?.unsubscribe();
    this.gameRunningSubscription?.unsubscribe();
  }
}
