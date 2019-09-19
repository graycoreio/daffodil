import { DaffNewsletterEffects } from "./newsletter.effects";
import { DaffNewsletterSubmission } from "../models/newsletter.model";
import { Observable, of } from "rxjs";
import { DaffNewsletterServiceInterface } from "../driver/interfaces/newsletter-service.interface";
import { TestBed } from "@angular/core/testing";
import { DaffNewsletterDriver } from "../driver/injection-tokens/newsletter-driver.token";
import { provideMockActions } from "@ngrx/effects/testing";
import { isObject } from "util";
import { DaffNewsletterSubscribe } from "../actions/newsletter.actions";

describe('NewsletterEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffNewsletterEffects<DaffNewsletterSubmission, any>;//come back to this
  let mockNewsletter: DaffNewsletterSubmission;
  let daffNewsletterDriver: DaffNewsletterServiceInterface<DaffNewsletterSubmission, any>;//and this

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffNewsletterDriver,
        },
        DaffNewsletterEffects,
        provideMockActions(() => actions$)
      ]
    })
    effects = TestBed.get(DaffNewsletterEffects);
    daffNewsletterDriver = TestBed.get(DaffNewsletterDriver);
  });


  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when NewsletterSubscribe is triggered', () => {
    let expected;
    const newsletterSubscribe = new DaffNewsletterSubscribe(mockNewsletter);

    describe('and the call to NewsletterService is successful', () => {
      beforeEach(() => {
        spyOn(daffNewsletterDriver, 'send').and.returnValue(of("mystring"))
      });
    });
  });
});