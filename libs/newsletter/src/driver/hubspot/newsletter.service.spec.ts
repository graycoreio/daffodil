import { TestBed, async,  inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaffHubspotNewsletterService } from './newsletter.service'
import { DaffNewsletterConfig } from '../injection-tokens/newsletter-config.token';
import { DaffNewsletterTransformer } from '../injection-tokens/newsletter-transformer.token';
import { DaffNewsletterHubspotTransformer } from './transformers/newsletter.transformer';

import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

describe('DaffHubspotNewsletterService', () => {
  let newsletterService: DaffHubspotNewsletterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffHubspotNewsletterService,
        { provide: DaffNewsletterConfig, useValue: {} },
        { provide: DaffNewsletterTransformer, useExisting: DaffNewsletterHubspotTransformer }
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    newsletterService = TestBed.get(DaffHubspotNewsletterService);
  });
  it('should be created', () => {
    expect(newsletterService).toBeTruthy();
  });

  describe('when sending', () => {
    it('should return a response', () => {
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      expect(newsletterService.send(submission)).not.toBeNull();
      expect(newsletterService.send(submission)).not.toBeUndefined();
    });
   
    it('should be called with the arguments', async(inject([HttpClient], (http) => {
      spyOn(http, 'post').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      newsletterService.send(submission).subscribe(() => {
        expect(http.post).toHaveBeenCalledWith('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined', jasmine.any(Object));
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');

      req.flush('');
    })));
    it('should call the DaffNewsletterTransformer', async(inject([DaffNewsletterTransformer], (transformer) => {
      spyOn(transformer, 'transformOut').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      newsletterService.send(submission).subscribe(() => {
        expect(transformer.transformOut).toHaveBeenCalled();
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');

      req.flush('');
    })));
    it('should call the Title service', async(inject([Title], (title) => {
      spyOn(title, 'getTitle').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      newsletterService.send(submission).subscribe(() => {
        expect(title.getTitle).toHaveBeenCalled();
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');

      req.flush('');
    })));
  });

})