import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  // @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'red';

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background', 'red')
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
    // this.backgroundColor = 'yellow';
    //this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
    // this.backgroundColor = 'blue';
    //this.highlight('blue');
  }

  // private highlight(color: string) {
  //   this.renderer.setStyle(this.eleRef.nativeElement, 'background', color)
  //   //this.eleRef.nativeElement.style.backgroundColor = color;
  // }
}
