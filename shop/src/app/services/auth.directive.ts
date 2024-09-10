import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  @HostListener('window:scroll', ['$event'])

  onScroll() {
    window.scroll(0, 0)
  }

  constructor() { }

}
