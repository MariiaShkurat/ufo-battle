import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { AnimationsService } from '../../../shared/services/animations.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() btnText?: string;
  @Input() isDisabled: boolean = false;

  @ViewChild('buttonElement') buttonElement!: ElementRef;

  constructor(private animationsService: AnimationsService) {}

  animateGlitter() {
    this.animationsService.animateGlitter(this.buttonElement.nativeElement);
  }
}
