import { Component, Input, OnInit } from '@angular/core';
import { StatusMessageService } from '../../../shared/services/status-message.service';

@Component({
  selector: 'app-status-message',
  templateUrl: './status-message.component.html',
  styleUrl: './status-message.component.css',
})
export class StatusMessageComponent implements OnInit {
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private statusMessageService: StatusMessageService) {}

  ngOnInit(): void {
    this.statusMessageService.currentMessage.subscribe((msgData) => {
      if (msgData && (msgData.type === 'success' || msgData.type === 'error')) {
        this.messageType = msgData.type;
        this.message = msgData.message;
      }
    });
  }
}
