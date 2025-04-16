import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffContainerModule } from '@daffodil/design/container';
import {
  DaffNewsletterStateTestingModule,
  MockDaffNewsletterFacade,
} from '@daffodil/newsletter/state/testing';

import { NewsletterComponent } from './newsletter.component';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;
  let facade: MockDaffNewsletterFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewsletterComponent,
      ],
      imports: [
        DaffContainerModule,
        ReactiveFormsModule,
        DaffNewsletterStateTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(MockDaffNewsletterFacade);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when intialized', () => {
    let newsletterElement;

    beforeEach(() => {
      facade.loading$.next(false);
      facade.success$.next(false);
      fixture.detectChanges();

      newsletterElement = fixture.debugElement.query(By.css('.demo-newsletter__right'));
    });

    it('should render class .demo-newsletter__right', () => {
      expect(newsletterElement).not.toBeNull();
    });

    it('should call onNewsletterSubmit on click', () => {
      spyOn(component, 'onNewsletterSubmit');

      newsletterElement = fixture.debugElement.nativeElement.querySelector('button');
      newsletterElement.click();
      expect(component.onNewsletterSubmit).toHaveBeenCalled();
    });
  });

  describe('when loading$ is true', () => {
    let newsletterElement;

    beforeEach(() => {
      facade.loading$.next(true);
      facade.success$.next(false);
      fixture.detectChanges();

      newsletterElement = fixture.debugElement.nativeElement.querySelector('.demo-newsletter__loading');
    });

    it('should render .demo-newsletter__loading', () => {
      expect(newsletterElement).not.toBeNull();
    });

    it('should call onNewsletterCancel on click', () => {
      spyOn(component, 'onNewsletterCancel');

      newsletterElement = fixture.debugElement.nativeElement.querySelector('button');
      newsletterElement.click();
      expect(component.onNewsletterCancel).toHaveBeenCalled();
    });
  });

  describe('when success$ is true', () => {
    let newsletterElement;

    beforeEach(() => {
      facade.loading$.next(false);
      facade.success$.next(true);
      fixture.detectChanges();

      newsletterElement = fixture.debugElement.nativeElement.querySelector('.demo-newsletter__success');
    });

    it('should render .demo-newsletter__success', () => {
      expect(newsletterElement).not.toBeNull();
    });
  });

  describe('when an error is thrown', () => {
    let newsletterElement;

    beforeEach(() => {
      facade.loading$.next(false);
      facade.success$.next(false);
      facade.error$.next([{ code: 'code', message: 'message' }]);
      fixture.detectChanges();

      newsletterElement = fixture.debugElement.nativeElement.querySelector('.demo-newsletter__retry');
    });

    it('should render .demo-newsletter__retry', () => {
      expect(newsletterElement).not.toBeNull();
    });

    it('should call onNewsletterRetry on click', () => {
      spyOn(component, 'onNewsletterRetry');

      newsletterElement = fixture.debugElement.nativeElement.querySelector('button');
      newsletterElement.click();
      expect(component.onNewsletterRetry).toHaveBeenCalled();
    });
  });
});
