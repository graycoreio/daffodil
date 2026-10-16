import { Provider } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffMenuStack } from '../services/menu-stack';
import { DaffMenuService } from '../services/menu.service';

type PublicPart<T> = {[K in keyof T]: T[K]};

export class DummyMenuService implements PublicPart<DaffMenuService>{
  open$ = new BehaviorSubject(true);
  isNested = false;
  menuStack = new DaffMenuStack();

  open() {
    this.open$.next(true);
  }
  toggle() {
    this.open$.next(true);
  }
  close() {
    this.open$.next(false);
  }
  closeAll() {
    this.open$.next(false);
  }
  registerPanel() {}
  focusFirstItem() {}
  ngOnDestroy() {}
}

export function provideTestMenuService(): Provider {
  return {
    provide: DaffMenuService,
    useClass: DummyMenuService,
  };
}
