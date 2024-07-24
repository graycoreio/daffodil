import {
  ChangeDetectorRef,
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {
  Subject,
  takeUntil,
} from 'rxjs';

import { DaffComponentWithMenu } from '../component-with-menu';
import { DaffMenuService } from '../services/menu.service';

@Directive({
  selector: '[daffMenuActivator]',
})
export class DaffMenuActivatorDirective implements OnDestroy {

  private _destroyed$ = new Subject<boolean>();
  private _open: boolean;

  @HostBinding('attr.aria-haspopup') ariaHasPopup = 'menu';

  @HostBinding('attr.aria-expanded') get ariaExpanded() {
    return this._open ? 'true' : 'false';
  }

  @Input() daffMenuActivator: Type<DaffComponentWithMenu> | TemplateRef<unknown>;

  _ariaControls = null;

  @HostBinding('attr.aria-controls') get ariaControls() {
    return this._ariaControls;
  } set ariaControls(value: string) {
    this._ariaControls = value;
  }

  constructor(
    private service: DaffMenuService,
    public viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef,
  ) {
    this.service.open$.pipe(
      takeUntil(this._destroyed$),
    ).subscribe((val: boolean) => {
	    this._open = val;
	    this.cdRef.markForCheck();
	  });
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  focus() {
    this.viewContainerRef.element.nativeElement.focus();
  }

  @HostListener('click', ['$event'])
  openMenu(event) {
	  event.preventDefault();
	  this.service.open(this, this.daffMenuActivator);
  }
}
