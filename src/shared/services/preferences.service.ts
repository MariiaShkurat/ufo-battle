import { Injectable } from '@angular/core';
import { UserPreferences } from '../models/user-preferences.model';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  private preferences: UserPreferences;

  constructor() {
    this.preferences = this.loadPreferences();
  }

  savePreferences(preferences: UserPreferences): void {
    this.preferences = preferences;
    if (preferences.rememberPref) {
      localStorage.setItem('userPreferences', JSON.stringify(preferences));
      sessionStorage.removeItem('userPreferences');
    } else {
      sessionStorage.setItem('userPreferences', JSON.stringify(preferences));
      localStorage.removeItem('userPreferences');
    }
  }

  getPreferences(): UserPreferences {
    return this.preferences;
  }

  private loadPreferences(): UserPreferences {
    const preferencesJSON =
      localStorage.getItem('userPreferences') ??
      sessionStorage.getItem('userPreferences');
    let preferences = preferencesJSON ? JSON.parse(preferencesJSON) : null;
    if (!preferences) {
      preferences = { ufosNumber: 1, time: 60, rememberPref: false };
    }
    return preferences;
  }
}
