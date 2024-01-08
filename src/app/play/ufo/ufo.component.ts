import { Component, Input, OnInit } from '@angular/core';
import { UFO } from '../../../shared/models/ufo.model';

@Component({
  selector: 'app-ufo',
  templateUrl: './ufo.component.html',
  styleUrl: './ufo.component.css',
})
export class UfoComponent implements OnInit {
  @Input() ufo!: UFO;

  ngOnInit(): void {}
}
