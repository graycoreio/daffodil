import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { DaffioApiDocReference } from '../models/api-doc-reference';
import { DaffioApiDocService } from '../services/api-doc.service';

@Injectable({
  providedIn: 'root'
})
export class DaffioApiListResolver implements Resolve<DaffioApiDocReference> {

  constructor(private docService: DaffioApiDocService, private router: Router) { }

  resolve(): Observable<any> | Promise<any> | any {
    return this.docService
      .list()
      .pipe(
        take(1),
        catchError(() => {
          this.router.navigate(['/404']);
          return EMPTY;
        })
      );
  }
}
