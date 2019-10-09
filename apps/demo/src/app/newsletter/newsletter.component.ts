import { Component, OnInit } from '@angular/core';
import { DaffNewsletterFacade, DaffNewsletterActionTypes, DaffNewsletterSubmission } from '@daffodil/newsletter';
import { Observable } from 'rxjs';
import { DaffNewsletterSubscribe } from '@daffodil/newsletter';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'demo-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent{

  success$ = this.newsletterFacade.success$;
  error$ = this.newsletterFacade.error$;
  loading$ = this.newsletterFacade.loading$;

  email: FormControl = new FormControl('');

  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }
  onNewsletterSubmit() {
    this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<DaffNewsletterSubmission>(this.email.value));
    console.log('test2')
  }
}
