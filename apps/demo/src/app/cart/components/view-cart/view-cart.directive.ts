import {
  HostListener,
  Directive,
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[demoViewCart]',
})
export class ViewCartDirective {

  @HostListener('click') onClick() {
    this.router.navigateByUrl('/cart');
  }

  constructor(
    private router: Router,
  ) { }
}
