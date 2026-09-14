import { FocusOrigin } from '@angular/cdk/a11y';
import {
  Provider,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffMenuConfig } from '../config/menu-config';
import {
  DaffMenuService,
  DaffMenuSlot,
} from '../services/menu.service';

type PublicPart<T> = {[K in keyof T]: T[K]};

export class DummyMenuService implements PublicPart<DaffMenuService>{
  open$ = new BehaviorSubject(true);
  origin: FocusOrigin = 'program';
  open(activator?: ViewContainerRef, component?: DaffMenuSlot, config?: DaffMenuConfig, origin: FocusOrigin = 'program') {
    this.origin = origin;
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
