import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusMessageService {
  private messageSource = new BehaviorSubject<{
    message: string;
    type: string;
  }>({ message: '', type: '' });

  currentMessage = this.messageSource.asObservable();
  private messageTimeout?: ReturnType<typeof setTimeout>;

  constructor() {}

  changeMessage(message: string, type: 'success' | 'error'): void {
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }

    this.messageSource.next({ message, type });

    this.messageTimeout = setTimeout(() => {
      this.messageSource.next({ message: '', type: 'success' });
    }, 10000);
  }
}
