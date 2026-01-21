import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnDestroy,
  signal,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {
  Subject,
  takeUntil,
} from 'rxjs';

import { DaffMenuService } from '../services/menu.service';

/**
 * Directive that triggers the menu to open/close. Applied to the button that activates the menu. The selector doubles as an input for the menu content to display.
 *
 * @example
 * ```html
 * <button [daffMenuActivator]="menu">
 *   Open Menu
 * </button>
 * ```
 */
@Directive({
  selector: '[daffMenuActivator]',
  host: {
    '(click)': 'onClick($event)',
    'aria-haspopup': 'menu',
    '[attr.aria-expanded]': 'ariaExpanded',
  },
  exportAs: 'daffMenuActivator',
})
export class DaffMenuActivatorDirective implements OnDestroy {

  private _destroyed$ = new Subject<boolean>();
  private _open: boolean;
  readonly isOpen = signal(false);

  /**
   * The menu content to display when activated.
   */
  @Input() daffMenuActivator: Type<unknown> | TemplateRef<unknown>;

  /**
   * @docs-private
   */
  get ariaExpanded() {
    return this._open ? 'true' : 'false';
  }

  constructor(
    private service: DaffMenuService,
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef,
  ) {
    this.service.open$.pipe(
      takeUntil(this._destroyed$),
    ).subscribe((val: boolean) => {
      this._open = val;
      this.isOpen.set(this._open);
      this.cdRef.markForCheck();
    });
  }

  /**
   * @docs-private
   */
  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  /**
   * @docs-private
   */
  focus() {
    this.viewContainerRef.element.nativeElement.focus();
  }

  /**
   * @docs-private
   */
  onClick(event: MouseEvent) {
    event.preventDefault();
    this.service.open(this.viewContainerRef, this.daffMenuActivator);
  }
}
