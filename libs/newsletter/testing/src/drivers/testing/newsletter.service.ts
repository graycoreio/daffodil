import { DaffNewsletterSubmission } from "@daffodil/newsletter";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { DaffNewsletterServiceInterface } from "@daffodil/newsletter";

@Injectable({
  providedIn: 'root'
})

export class DaffTestingNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterSubmission, any>{
  send(email: DaffNewsletterSubmission): Observable<any>{
    return of('Success');
  }
}