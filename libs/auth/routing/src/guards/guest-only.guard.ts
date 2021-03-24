import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffAuthFacade,
  DaffAuthGuardCheck,
} from '@daffodil/auth/state';

import { MemberOnlyGuard } from './member-only.guard';

@Injectable({
  providedIn: 'root',
})
export class GuestOnlyGuard implements CanActivate {
  constructor(
    private facade: DaffAuthFacade,
    private memberOnlyGuard: MemberOnlyGuard,
  ) {}

  canActivate(): Observable<boolean> {
    const ret = this.isUnauthenticated();

    this.facade.dispatch(new DaffAuthGuardCheck());

    return ret;
  }

  isUnauthenticated(): Observable<boolean> {
    return this.memberOnlyGuard.isAuthenticated().pipe(
      map(authenticated => !authenticated),
    );
  }
}
