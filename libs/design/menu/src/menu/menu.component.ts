import {
  ConfigurableFocusTrapFactory,
  ConfigurableFocusTrap,
} from '@angular/cdk/a11y';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  NgZone,
} from '@angular/core';
import {
  filter,
  fromEvent,
} from 'rxjs';

import { daffFocusableElementsSelector } from '@daffodil/design';

import { DaffMenuItemComponent } from '../menu-item/menu-item.component';
import { DaffMenuService } from '../services/menu.service';

@Component({
  selector: 'daff-menu',
  template: '<ng-content select="[daff-menu-item]"></ng-content>',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffMenuItemComponent,
  ],
})
export class DaffMenuComponent implements AfterContentInit, AfterViewInit {
  @HostBinding('class.daff-menu') class = true;
  @HostBinding('tabindex') tabindex = 0;
  @HostBinding('attr.role') role = 'menu';

  private _focusTrap: ConfigurableFocusTrap;

  constructor(
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    private _ngZone: NgZone,
    private _elementRef: ElementRef<HTMLElement>,
    private menuService: DaffMenuService,
  ) {
    /**
     * Listen to `keydown` events outside the zone so that change detection is not run every
     * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed.
     *
     */
    this._ngZone.runOutsideAngular(() => {
      fromEvent<KeyboardEvent>(this._elementRef.nativeElement, 'keyup')
        .pipe(
          filter((event) => event.key === 'Escape'),
        )
        .subscribe((event) =>
          this._ngZone.run(() => {
            this.menuService.close();
            event.stopPropagation();
          }),
        );
    });
  }

  ngAfterContentInit() {
    this._focusTrap = this._focusTrapFactory.create(
      this._elementRef.nativeElement,
    );
  }

  ngAfterViewInit() {
    const focusableChild = (<HTMLElement>this._elementRef.nativeElement.querySelector(
      daffFocusableElementsSelector)
    );

    if(focusableChild) {
      focusableChild.focus();
    } else {
      // There's a timing condition when computing HostBindings afterContentInit
      // so to allow the menu to be focused, we manually set the tabindex.
      this._elementRef.nativeElement.tabIndex = 0;
      (<HTMLElement>this._elementRef.nativeElement).focus();
    }
  }
}
