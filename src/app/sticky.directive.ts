import { Directive, ElementRef, Host, HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';
import { elementAt } from 'rxjs';

@HostListener('window:scroll', ['$event'])
@Directive({
  selector: '[appSticky]',
})
export class StickyDirective {
  constructor() {}
  @HostBinding('class.updated-nav') updatedNav: boolean;
  @HostListener('window:scroll') onScroll() {
    if (window.scrollY >= 50) {
      this.updatedNav = true;
    } else {
      this.updatedNav = false;
    }
  }
}
