import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberOnlyGuard } from './member-only.guard';
import { DaffAuthFacade } from '../facades/auth.facade';
export declare class GuestOnlyGuard implements CanActivate {
    private facade;
    private memberOnlyGuard;
    constructor(facade: DaffAuthFacade, memberOnlyGuard: MemberOnlyGuard);
    canActivate(): Observable<boolean>;
    isUnauthenticated(): Observable<boolean>;
}
