import { Component } from '@angular/core';
import { DaffNewsletterFacade, DaffNewsletterActionTypes, DaffNewsletterSubmission, DaffNewsletterCancel, DaffNewsletterRetry } from '@daffodil/newsletter';
import { DaffNewsletterSubscribe } from '@daffodil/newsletter';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'demo-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {

  success$ = this.newsletterFacade.success$;
  error$ = this.newsletterFacade.error$;
  loading$ = this.newsletterFacade.loading$;

  email: FormControl = new FormControl('');

  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }
  onNewsletterSubmit() {
    if (this.email.value !== '') {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<DaffNewsletterSubmission>(this.email.value));
    }
  }
  onNewsletterCancel() {
    this.newsletterFacade.dispatch(new DaffNewsletterCancel);
  }
  onNewsletterRetry() {
    this.newsletterFacade.dispatch(new DaffNewsletterRetry<DaffNewsletterSubmission>(this.email.value));
  }
}
