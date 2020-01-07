import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Title } from '@angular/platform-browser';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DaffHubspotFormsService } from './hubspot-forms.service';
import { DaffHubspotRequest } from './models/hubspot-request';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';
import { DaffHubspotFormsTransformer } from './transformers/hubspot-forms.transformer';

describe('DaffHubspotFormsService', () => {

  let config: DaffHubspotConfig;
  let formsService: DaffHubspotFormsService<DaffHubspotRequest>;
  let httpMock: HttpTestingController;
  let doc: Document;
  let httpClient: HttpClient;
  let transformer: DaffHubspotFormsTransformer;

  let route: Router;
  let title: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    doc = TestBed.get(DOCUMENT);
    httpClient = TestBed.get(HttpClient);
    config =  { portalId: '999', guid: '999', version: 'v3' };
    transformer = new DaffHubspotFormsTransformer();
    route = TestBed.get(Router);
    title = TestBed.get(Title);
    formsService = new DaffHubspotFormsService(httpClient, 
      config,
      transformer,
      doc,
      route,
      title
    )
  });
  it('should be created', () => {
    expect(formsService).toBeTruthy();
  });

  describe('sending a contact submission to hubspot', () => {
    it('should take Hubspot configuration from the module configuration', () => {
      spyOn(httpClient, 'post').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      const submissionString = 'https://api.hsforms.com/submissions/' + config.version + '/integration/submit/'
        + config.portalId + '/' + config.guid
      formsService.send(submission).subscribe(() => {
        expect(httpClient.post).toHaveBeenCalledWith(submissionString, jasmine.any(Object));
      });

      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/999/999');

      req.flush('');
    });
    it('should transform a request sent to hubspot', () => {
      spyOn(transformer, 'transformOut').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      formsService.send(submission).subscribe(() => {
        expect(transformer.transformOut).toHaveBeenCalled();
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/999/999');

      req.flush('');
    });
    it('should transform the response received from Hubspot', () => {
      spyOn(transformer, 'transformIn').and.callThrough();
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      formsService.send(submission).subscribe(() => {
        expect(transformer.transformIn).toHaveBeenCalled();
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/999/999');

      req.flush('');
    });
    it('should include the hubspot UTK in the request, if it hubspot cookie exists', () => {
      doc.cookie = 'hubspotutk=mycookie;'
      const submission = { email: 'email@email.com', firstName: 'John', lastName: 'Doe' };
      formsService.send(submission).subscribe();

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
      formsService.send(submission).subscribe();

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
      formsService.send(submission).subscribe(() => {
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

      formsService.send(submission).subscribe(() => {
        expect(httpClient.post).toHaveBeenCalledWith('https://api.hsforms.com/submissions/v3/integration/submit/999/999', jasmine.objectContaining({
          'context': containingObject
        }));
      });
      const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/999/999');
      req.flush('');
    });
  });
})