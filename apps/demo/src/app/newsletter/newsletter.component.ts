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

  send_email: FormControl = new FormControl('');
  submission : DaffNewsletterSubmission = { email: ""};


  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }
  onNewsletterSubmit() {
    this.submission.email = this.send_email.value;
    if (this.send_email.value !== '') {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<DaffNewsletterSubmission>(this.submission));
    }
  }
  onNewsletterCancel() {
    this.newsletterFacade.dispatch(new DaffNewsletterCancel);
  }
  onNewsletterRetry() {
    this.newsletterFacade.dispatch(new DaffNewsletterRetry<DaffNewsletterSubmission>(this.submission));
  }
}
