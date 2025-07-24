import {
  ChangeDetectorRef,
  Directive,
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
  host: {
    '(click)': 'onClick($event)',
  },
})
export class DaffMenuActivatorDirective implements OnDestroy {

  private _destroyed$ = new Subject<boolean>();
  private _open: boolean;

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

  /**
   * @docs-private
   */
  onClick(event: MouseEvent) {
    event.preventDefault();
    this.service.open(this.viewContainerRef, this.daffMenuActivator);
  }
}
