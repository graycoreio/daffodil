import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaffContactConfig } from '../injection-tokens/contact-config.token';
import { DaffContactHubspotTransformer } from './transformers/contact.transformer';

import { Title } from '@angular/platform-browser';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { DaffContactHubspotService } from './contact.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DaffContactHubspotConfig } from './models/config';
import { DaffContactTransformer } from '../injection-tokens/contact-transfomer.token';

describe('DaffContactHubspotService', () => {

  let contactService: DaffContactHubspotService;
  let httpMock: HttpTestingController;
  let doc: Document;
  let httpClient: HttpClient;
  let config: DaffContactHubspotConfig;
  let transformer: DaffContactHubspotTransformer;
  let route: Router;
  let title: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        DaffContactHubspotService,
        { provide: DaffContactConfig, useValue: { portalId: '999', guid: '999', version: 'v3' } },
        { provide: DaffContactTransformer, useExisting: DaffContactHubspotTransformer }
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    contactService = TestBed.get(DaffContactHubspotService);
    doc = TestBed.get(DOCUMENT);
    httpClient = TestBed.get(HttpClient);
    config = TestBed.get(DaffContactConfig)
    transformer = TestBed.get(DaffContactHubspotTransformer);
    route = TestBed.get(Router);
    title = TestBed.get(Title);
  });
  it('should be created', () => {
    expect(contactService).toBeTruthy();
  });

  describe('sending a contact submission to hubspot', () => {
    it('should take Hubspot configuration from the module configuration', () => {
      spyOn(httpClient, 'post').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      const submissionString = 'https://api.hsforms.com/submissions/' + config.version + '/integration/submit/'
        + config.portalId + '/' + config.guid
      contactService.send(submission).subscribe(() => {
        expect(httpClient.post).toHaveBeenCalledWith(submissionString, jasmine.any(Object));
      });

      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/999/999');

      req.flush('');
    });
    it('should transform a request sent to hubspot', () => {
      spyOn(transformer, 'transformOut').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      contactService.send(submission).subscribe(() => {
        expect(transformer.transformOut).toHaveBeenCalled();
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/999/999');

      req.flush('');
    });
    it('should transform the response received from Hubspot', () => {
      spyOn(transformer, 'transformIn').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      contactService.send(submission).subscribe(() => {
        expect(transformer.transformIn).toHaveBeenCalled();
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/999/999');

      req.flush('');
    });
    it('should include the hubspot UTK in the request, if it hubspot cookie exists', () => {
      doc.cookie = 'hubspotutk=mycookie;'
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      contactService.send(submission).subscribe();

      const req = httpMock.expectOne((testReq: HttpRequest<any>) => {
        expect(testReq.url).toEqual('https://api.hsforms.com/submissions/v3/integration/submit/999/999');
        expect(testReq.body.context.hutk).toEqual('mycookie');
        return testReq.url === 'https://api.hsforms.com/submissions/v3/integration/submit/999/999' && testReq.body.context.hutk === 'mycookie';
      });
      httpMock.verify();
      document.cookie = 'hubspotutk=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      req.flush('');
    });
    it('should not include the hubspot UTK in the request, if the hubspot does not cookie exists', () => {
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      contactService.send(submission).subscribe();

      const req = httpMock.expectOne((testReq: HttpRequest<any>) => {
        expect(testReq.url).toEqual('https://api.hsforms.com/submissions/v3/integration/submit/999/999');
        expect(testReq.body.context.hutk).toEqual(null);
        return testReq.url === 'https://api.hsforms.com/submissions/v3/integration/submit/999/999' && testReq.body.context.hutk === null;
      });
      req.flush('');
    });
    it('should include the pageUri in the request', () => {

      spyOn(httpClient, 'post').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      const containingObject = jasmine.objectContaining({
        'pageUri': route.url
      });
      contactService.send(submission).subscribe(() => {
        expect(httpClient.post).toHaveBeenCalledWith('https://api.hsforms.com/submissions/v3/integration/submit/999/999', jasmine.objectContaining({
          'context': containingObject
        }));
      });

      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/999/999');

      req.flush('');
    });
    it('should include the pageName in the request', () => {
      spyOn(httpClient, 'post').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      const containingObject = jasmine.objectContaining({
        'pageName': title.getTitle()
      });

      contactService.send(submission).subscribe(() => {
        expect(httpClient.post).toHaveBeenCalledWith('https://api.hsforms.com/submissions/v3/integration/submit/999/999', jasmine.objectContaining({
          'context': containingObject
        }));
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/999/999');
      req.flush('');
    });
  });
})