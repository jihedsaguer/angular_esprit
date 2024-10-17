import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'  // Custom directive name, will be used as an attribute in your HTML
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Mouse enters the element
  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlight('yellow');
  }

  // Mouse leaves the element
  @HostListener('mouseleave') onMouseLeave() {
    this.setHighlight(null);  // Reset the highlight
  }

  // Function to set the background color
  private setHighlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
