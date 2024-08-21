import {
  Signal,
  signal,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { DaffSidebarRegistration } from './registration.type';

/**
 * A service that stores the open state and ID of the currently opened sidebar.
 *
 * A default sidebar ID can be passed to the constructor that will be the initial value of `$id`.
 */
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

  /**
   * Opens the specified sidebar.
   *
   * @param id The optional sidebar ID. If omitted the most recently passed opened sidebar ID will persist (or the default if none was passed).
   */
  open(id?: DaffSidebarRegistration['id']) {
    if (id) {
      this._id$.next(id);
    }
    this._open.set(true);
  };

  /**
   * Closes the sidebar. Does not clear the ID.
   */
  close() {
    this._open.set(false);
  }
}
