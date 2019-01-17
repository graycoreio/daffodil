import { HostListener, Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[demo-view-cart]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewCartComponent {

  @HostListener('click') onClick() {
    this.router.navigateByUrl('/cart');
  }

  constructor(
    private router: Router
  ) { }
}
