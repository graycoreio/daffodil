import {
  Component,
  OnInit,
} from '@angular/core';
import {
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import {
  DaffNewsletterFacade,
  DaffNewsletterSubscribe,
  DaffNewsletterCancel,
  DaffNewsletterRetry,
} from '@daffodil/newsletter/state';

@Component({
  selector: 'demo-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  standalone: false,
})
export class NewsletterComponent implements OnInit {

  success$ = this.newsletterFacade.success$;
  error$ = this.newsletterFacade.error$;
  loading$ = this.newsletterFacade.loading$;
  hasError$: Observable<boolean>;

  email: UntypedFormControl = new UntypedFormControl('', Validators.email);

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
