import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationsService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  animateGlitter(element: HTMLElement) {
    this.renderer.setStyle(element, 'transition', 'none');
    this.renderer.setStyle(element, 'webkitMaskPosition', '0');
    this.renderer.setStyle(element, 'maskPosition', '0');

    setTimeout(() => {
      this.renderer.setStyle(
        element,
        'transition',
        '-webkit-mask-position 2s ease, mask-position 2s ease'
      );
      this.renderer.setStyle(element, 'webkitMaskPosition', '120%');
      this.renderer.setStyle(element, 'maskPosition', '120%');
    }, 10);
  }
}
