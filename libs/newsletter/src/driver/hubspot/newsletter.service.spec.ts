import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaffNewsletterConfig } from '../injection-tokens/newsletter-config.token';
import { DaffNewsletterTransformer } from '../injection-tokens/newsletter-transformer.token';
import { DaffNewsletterHubspotTransformer } from './transformers/newsletter.transformer';

import { Title } from '@angular/platform-browser';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { DaffNewsletterHubspotService } from './newsletter.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DaffNewsletterHubspotService', () => {
  let newsletterService: DaffNewsletterHubspotService;
  let httpMock: HttpTestingController;
  let doc: Document;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        DaffNewsletterHubspotService,
        { provide: DaffNewsletterConfig, useValue: {} },
        { provide: DaffNewsletterTransformer, useExisting: DaffNewsletterHubspotTransformer }
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    newsletterService = TestBed.get(DaffNewsletterHubspotService);
    doc = TestBed.get(DOCUMENT);
    httpClient = TestBed.get(HttpClient);
  });
  afterEach(() => {
    httpMock.verify();
    document.cookie = 'hubspotutk=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  });
  it('should be created', () => {
    expect(newsletterService).toBeTruthy();
  });

  describe('sending a newsletter submission to hubspot', () => {
    it('should take Hubspot configuration from the module configuration', async(inject([HttpClient, DaffNewsletterConfig], (http, config) => {
      spyOn(http, 'post').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      let version = config.version === undefined ? 'v3' : config.version;
      const submissionString = 'https://api.hsforms.com/submissions/' + version + '/integration/submit/'
        + config.portalId + '/' + config.guid
      newsletterService.send(submission).subscribe(() => {
        expect(http.post).toHaveBeenCalledWith(submissionString, jasmine.any(Object));
      });

      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');

      req.flush('');
    })));
    it('should transform a request send to hubspot', async(inject([DaffNewsletterTransformer], (transformer) => {
      spyOn(transformer, 'transformOut').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      newsletterService.send(submission).subscribe(() => {
        expect(transformer.transformOut).toHaveBeenCalled();
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');

      req.flush('');
    })));
    it('should transform the response recieved from Hubspot', async(inject([DaffNewsletterTransformer], (transformer) => {
      spyOn(transformer, 'transformIn').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      newsletterService.send(submission).subscribe(() => {
        expect(transformer.transformIn).toHaveBeenCalled();
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');

      req.flush('');
    })));
    it('should include a the hubspot UTK in the request, if it hubspot cookie exists', () => {
      doc.cookie = 'hubspotutk=mycookie;'
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      newsletterService.send(submission).subscribe();

      const req = httpMock.expectOne((req: HttpRequest<any>) => {
        expect(req.url).toEqual('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');
        expect(req.body.context.hutk).toEqual('mycookie');
        return req.url == 'https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined' && req.body.context.hutk == 'mycookie';
      });

      req.flush('');
    });
    it('should not include a the hubspot UTK in the request, if the hubspot cookie exists', () => {
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      newsletterService.send(submission).subscribe();

      const req = httpMock.expectOne((req: HttpRequest<any>) => {
        expect(req.url).toEqual('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');
        expect(req.body.context.hutk).toEqual(null);
        return req.url == 'https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined' && req.body.context.hutk == null;
      });
      req.flush('');
    });
    it('should include the pageUri in the request', async(inject([HttpClient, Router], (http, route) => {

      spyOn(http, 'post').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      const containingObject = jasmine.objectContaining({
        'pageUri': route.url
      });
      newsletterService.send(submission).subscribe(() => {
        expect(http.post).toHaveBeenCalledWith('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined', jasmine.objectContaining({
          'context': containingObject
        }));
      });

      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');

      req.flush('');
    })));
    it('should include the pageName in the request', async(inject([HttpClient, Title], (http, title) => {
      spyOn(http, 'post').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      const containingObject = jasmine.objectContaining({
        'pageName': title.getTitle()
      });

      newsletterService.send(submission).subscribe(() => {
        expect(http.post).toHaveBeenCalledWith('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined', jasmine.objectContaining({
          'context': containingObject
        }));
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/undefined/undefined');
      req.flush('');
    })));
  });
})
