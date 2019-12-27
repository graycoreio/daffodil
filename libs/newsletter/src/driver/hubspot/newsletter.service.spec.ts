import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaffHubspotNewsletterService } from './newsletter.service'
import { DaffNewsletterConfig } from '../injection-tokens/newsletter-config.token';
import { DaffNewsletterTransformer } from '../injection-tokens/newsletter-transformer.token';
import { DaffNewsletterHubspotTransformer } from './transformers/newsletter.transformer';

describe('DaffHubspotNewsletterService', () => {
  let newsletterService: DaffHubspotNewsletterService;
  let httpMock: HttpTestingController;
  //        expect(magentoCategoryResponseTransformerService.transform).toHaveBeenCalledWith(response.category);
  const hubspotTransformService = jasmine.createSpyObj('DaffNewsletterHubspotTransformer', ['transformOut', 'transformIn']);

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
    it('should call the DaffNewsletterTransformer', () => {
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      newsletterService.send(submission).subscribe(() => {
        expect(hubspotTransformService.transformOut).toHaveBeenCalled();
      });
    });
  });

})