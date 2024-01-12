import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersServiceService } from '../shared/services/users-service.service';
import { ScoresComponent } from './records/scores/scores.component';
import { LoginComponent } from './access/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { TokenmngService } from '../shared/services/tokenmng.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { PlayComponent } from './play/play.component';
import { RegisterComponent } from './register/register.component';
import { RecordsComponent } from './records/records.component';
import { AccessComponent } from './access/access.component';
import { CardComponent } from './core/card/card.component';
import { ButtonComponent } from './core/button/button.component';
import { StatusMessageComponent } from './core/status-message/status-message.component';
import { UserScoresComponent } from './records/user-scores/user-scores.component';
import { ScoresTableComponent } from './core/scores-table/scores-table.component';
import { GamePanelComponent } from './play/game-panel/game-panel.component';
import { MissileComponent } from './play/missile/missile.component';
import { UfoComponent } from './play/ufo/ufo.component';
import { AnimationsService } from '../shared/services/animations.service';
import { GameStateService } from '../shared/services/game-state.service';
import { MissileService } from '../shared/services/missile.service';
import { PreferencesService } from '../shared/services/preferences.service';
import { RegisterService } from '../shared/services/register.service';
import { StatusMessageService } from '../shared/services/status-message.service';
import { UfoService } from '../shared/services/ufo.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    MainPageComponent,
    PreferencesComponent,
    PlayComponent,
    RegisterComponent,
    RecordsComponent,
    AccessComponent,
    CardComponent,
    ButtonComponent,
    StatusMessageComponent,
    UserScoresComponent,
    ScoresTableComponent,
    GamePanelComponent,
    MissileComponent,
    UfoComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    UsersServiceService,
    LoginService,
    TokenmngService,
    AnimationsService,
    GameStateService,
    MissileService,
    PreferencesService,
    RegisterService,
    StatusMessageService,
    UfoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
