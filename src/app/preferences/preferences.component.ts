import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { UserPreferences } from '../../shared/models/user-preferences.model';
import { PreferencesService } from '../../shared/services/preferences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PreferencesComponent implements OnInit {
  preferences: UserPreferences = {
    ufosNumber: 1,
    time: 60,
    rememberPref: false,
  };

  constructor(
    private preferencesService: PreferencesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.preferences = this.preferencesService.getPreferences();
  }

  onSubmit(): void {
    this.preferencesService.savePreferences(this.preferences);
    this.router.navigate(['/play']);
  }
}
