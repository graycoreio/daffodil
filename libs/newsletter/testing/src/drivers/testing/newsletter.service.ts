import { DaffNewsletterServiceInterface } from "libs/newsletter/src/driver/interfaces/newsletter-service.interface";
import { DaffNewsletterSubmission } from "libs/newsletter/src/models/newsletter.model";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DaffTestingNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterSubmission, any>{
  send(email: DaffNewsletterSubmission): Observable<any>{
    return of('Success');
  }
}