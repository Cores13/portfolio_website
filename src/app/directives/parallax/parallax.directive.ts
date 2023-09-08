import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 9
  initialTop : number = 1

  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(){
    this.eleRef.nativeElement.style.top = (this.initialTop + ((window.scrollY * this.parallaxRatio) * 2)) + 'px'
  }

}
