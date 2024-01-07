import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TokenmngService } from '../../shared/services/tokenmng.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrl: './records.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class RecordsComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private tokenmngService: TokenmngService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.tokenmngService.isLoggedIn;
  }
}
