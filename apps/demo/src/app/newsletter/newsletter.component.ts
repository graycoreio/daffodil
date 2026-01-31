import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DaffContainerComponent } from '@daffodil/design/container';
import { DaffFormFieldComponent } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';
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
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    DaffInputComponent,
    DaffButtonComponent,
    DaffContainerComponent,
    DaffFormFieldComponent,
  ],
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
      map(error => error.length > 0),
    );
  }

  onNewsletterSubmit() {
    if (this.email.valid) {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe(this._makeSubmission(this.email.value)));
    }
  }
  onNewsletterCancel() {
    this.newsletterFacade.dispatch(new DaffNewsletterCancel());
  }
  onNewsletterRetry() {
    this.newsletterFacade.dispatch(new DaffNewsletterRetry(this._makeSubmission(this.email.value)));
  }

  private _makeSubmission(email: string): DaffNewsletterSubmission {
    return email;
  }
}
