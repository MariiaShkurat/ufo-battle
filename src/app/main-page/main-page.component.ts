import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationsService } from '../../shared/services/animations.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  @ViewChild('ufo') ufo!: ElementRef;
  @ViewChild('playUfo') playUfo!: ElementRef;

  constructor(
    private animationsService: AnimationsService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  animateGlitter() {
    this.animationsService.animateGlitter(this.playUfo.nativeElement);
  }

  navigateToPlay() {
    this.renderer.setStyle(
      this.ufo.nativeElement,
      'transition',
      'transform 2s ease'
    );
    this.renderer.setStyle(
      this.ufo.nativeElement,
      'transform',
      'translateY(50px) translateX(100%) translateY(-30px)'
    );

    this.renderer.setStyle(
      this.playUfo.nativeElement,
      'transition',
      'opacity 0.1s ease'
    );
    this.renderer.setStyle(this.playUfo.nativeElement, 'opacity', '0');

    setTimeout(() => {
      this.router.navigate(['/play']);
    }, 1000);
  }
}
