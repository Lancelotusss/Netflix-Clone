import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appnext]',
})

export class SliderDirective {

  constructor(private el: ElementRef) {

  }
  @HostListener('click')
  nextSlide() {

    var elm = this.el.nativeElement.parentElement.parentElement
    var item = elm.getElementsByClassName("slider-main")

      elm.append(item[0])
  }
}
