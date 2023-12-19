import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersServiceService } from '../shared/services/users-service.service';
import { ScoresComponent } from './scores/scores.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { TokenmngService } from '../shared/services/tokenmng.service';

@NgModule({
  declarations: [AppComponent, ScoresComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UsersServiceService, LoginService, TokenmngService],
  bootstrap: [AppComponent],
})
export class AppModule {}
