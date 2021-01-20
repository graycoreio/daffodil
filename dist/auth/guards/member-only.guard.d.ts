import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { DaffAuthFacade } from '../facades/auth.facade';
export declare class MemberOnlyGuard implements CanActivate {
    private facade;
    private actions$;
    constructor(facade: DaffAuthFacade, actions$: Actions);
    canActivate(): Observable<boolean>;
    isAuthenticated(): Observable<boolean>;
}
