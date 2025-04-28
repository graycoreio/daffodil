import {
  Directive,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[daffioInterceptNavigation]',
})
export class DaffioInterceptNavigationDirective {
  constructor(
    private router: Router,
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const target = <HTMLElement>event.target;

    if (target.tagName.toLowerCase() === 'a') {
      const href = target.getAttribute('href');
      if (href && href.startsWith('/') && !(event.ctrlKey || event.metaKey || event.button === 1)) {
        // Normal left-click: handle with router
        event.preventDefault();
        this.router.navigateByUrl(href);
      }
    }
  }
}
