import {
  Signal,
  signal,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { DaffSidebarRegistration } from './registration.type';

export abstract class DaffSidebarService {
  protected _id$: BehaviorSubject<DaffSidebarRegistration['id']>;
  protected _open = signal(false);

  readonly id$: Observable<DaffSidebarRegistration['id']>;

  get isOpen(): Signal<boolean> {
    return this._open.asReadonly();
  }

  constructor(
    defaultId: DaffSidebarRegistration['id'] = null,
  ) {
    this._id$ = new BehaviorSubject<DaffSidebarRegistration['id']>(defaultId);

    this.id$ = this._id$.asObservable();
  }

  open(id?: DaffSidebarRegistration['id']) {
    if (id) {
      this._id$.next(id);
    }
    this._open.set(true);
  };

  close() {
    this._open.set(false);
  }
}
