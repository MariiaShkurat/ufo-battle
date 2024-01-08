import { Component, OnInit, Input } from '@angular/core';
import { Missile } from '../../../shared/models/missile.model';

@Component({
  selector: 'app-missile',
  templateUrl: './missile.component.html',
  styleUrl: './missile.component.css',
})
export class MissileComponent implements OnInit {
  @Input() missile!: Missile;

  ngOnInit(): void {}
}
