import { Provider } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffMenuService } from '../service/menu.service';

type PublicPart<T> = {[K in keyof T]: T[K]};

export class DummyMenuService implements PublicPart<DaffMenuService>{
  open$ = new BehaviorSubject(true);
  open() {
    this.open$.next(true);
  }
  close() {
    this.open$.next(false);
  }
}

export function provideTestMenuService(): Provider {
  return {
    provide: DaffMenuService,
    useClass: DummyMenuService,
  };
}
