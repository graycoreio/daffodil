import {
  ChangeDetectorRef,
  Directive,
  HostBinding,
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
  host: {
    '(click)': 'onClick($event)',
    '[attr.aria-haspopup]': 'menu',
    '[attr.aria-expanded]': 'ariaExpanded',
  },
})
export class DaffMenuActivatorDirective implements OnDestroy {

  private _destroyed$ = new Subject<boolean>();
  private _open: boolean;

  get ariaExpanded() {
    return this._open ? 'true' : 'false';
  }

  @Input() daffMenuActivator: Type<DaffComponentWithMenu> | TemplateRef<unknown>;

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

  onClick(event: MouseEvent) {
	  event.preventDefault();
	  this.service.open(this, this.daffMenuActivator);
  }
}
