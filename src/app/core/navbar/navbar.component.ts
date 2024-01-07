import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenmngService } from '../../../shared/services/tokenmng.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private tokenmngService: TokenmngService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.tokenmngService.isLoggedIn;
  }

  logout(): void {
    this.tokenmngService.clearToken();
  }
}
