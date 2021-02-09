import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
  DaffNewsletterFacade,
  DaffNewsletterSubscribe,
  DaffNewsletterSubmission,
  DaffNewsletterCancel,
  DaffNewsletterRetry,
} from '@daffodil/newsletter';

@Component({
  selector: 'demo-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {

  success$ = this.newsletterFacade.success$;
  error$ = this.newsletterFacade.error$;
  loading$ = this.newsletterFacade.loading$;
  hasError$: Observable<boolean>;

  email: FormControl = new FormControl('', Validators.email);

  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }

  ngOnInit() {
    this.hasError$ = this.error$.pipe(
      map(error => !!error),
    );
  }

  onNewsletterSubmit() {
    if (this.email.valid) {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<DaffNewsletterSubmission>(this._makeSubmission(this.email.value)));
    }
  }
  onNewsletterCancel() {
    this.newsletterFacade.dispatch(new DaffNewsletterCancel());
  }
  onNewsletterRetry() {
    this.newsletterFacade.dispatch(new DaffNewsletterRetry<DaffNewsletterSubmission>(this._makeSubmission(this.email.value)));
  }

  private _makeSubmission(email: string): DaffNewsletterSubmission {
    return { email };
  }
}
