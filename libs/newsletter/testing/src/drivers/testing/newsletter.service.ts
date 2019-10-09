import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import { Observable, of, BehaviorSubject, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DaffTestingNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterSubmission, any>{
  send(payload: DaffNewsletterSubmission): Observable<any>{
    return of('Success').pipe(delay(100));
  }
}