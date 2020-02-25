import { DaffNewsletterSubmission, DaffNewsletterUnion } from '@daffodil/newsletter';
import { Observable, of, BehaviorSubject, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DaffTestingNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any>{
  send(payload: DaffNewsletterUnion): Observable<any>{
    return of('Success').pipe(delay(10));
  }
}