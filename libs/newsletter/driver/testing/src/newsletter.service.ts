import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, timer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DaffNewsletterSubmission, DaffNewsletterUnion } from '@daffodil/newsletter';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

@Injectable({
  providedIn: 'root'
})

export class DaffTestingNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any>{
  send(payload: DaffNewsletterUnion): Observable<any>{
    return of('Success').pipe(delay(10));
  }
}