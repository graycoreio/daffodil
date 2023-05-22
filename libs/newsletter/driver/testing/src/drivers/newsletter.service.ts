import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';
import { delay } from 'rxjs/operators';

import { DaffNewsletterResponse, DaffNewsletterSubmission } from "@daffodil/newsletter";
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

@Injectable({
  providedIn: 'root',
})

export class DaffTestingNewsletterService implements DaffNewsletterServiceInterface {
  send(payload: DaffNewsletterSubmission): Observable<DaffNewsletterResponse>{
    return of('Success').pipe(delay<DaffNewsletterResponse>(10));
  }
}
