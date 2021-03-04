import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffAuthGuardCheck } from '../actions/auth.actions';
import { DaffAuthFacade } from '../facades/auth.facade';
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
