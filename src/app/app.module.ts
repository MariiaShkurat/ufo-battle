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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UsersServiceService, LoginService, TokenmngService],
  bootstrap: [AppComponent],
})
export class AppModule {}
