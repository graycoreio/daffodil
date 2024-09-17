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

import { DaffMenuService } from '../services/menu.service';

@Directive({
  selector: '[daffMenuActivator]',
})
export class DaffMenuActivatorDirective implements OnDestroy {

  private _destroyed$ = new Subject<boolean>();
  private _open: boolean;

  @HostBinding('class.open') get openClass() {
    return this._open;
  }

  @Input() daffMenuActivator: Type<unknown> | TemplateRef<unknown>;

  constructor(
    private service: DaffMenuService,
    private viewContainerRef: ViewContainerRef,
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
    this.service.open(this.viewContainerRef, this.daffMenuActivator);
  }
}
