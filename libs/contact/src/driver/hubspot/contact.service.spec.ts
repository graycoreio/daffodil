import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaffHubspotFormsService, daffHubspotFormsServiceFactory } from '@daffodil/driver/hubspot';
import { DaffContactHubspotService } from './contact.service';
import { DaffContactConfigToken } from './config/contact-config.interface';
import { DaffContactDriver } from '../public_api';



describe('DaffContactHubspotService', () => {
  let contactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {provide: DaffContactDriver, useClass: DaffContactHubspotService},
        {provide: DaffContactConfigToken, useValue: {portalId:'123123', guid: '123123'}},
        {
          provide: DaffHubspotFormsService,
          useFactory: daffHubspotFormsServiceFactory,
          deps: [
            HttpClient,
            DOCUMENT, 
            Router, 
            Title, 
            DaffContactConfigToken
          ],
        }
      ]
    })
    contactService = TestBed.get(DaffContactDriver);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(contactService).toBeTruthy();
  });
  describe('when sending', () => {
    it('should return an observable of HubspotResponse', () => {
      const payload = { email: 'email@email.edu' };
      contactService.send(payload).subscribe((resp) => {
        expect(resp).toBeObservable();
      });
      const req = httpMock.expectOne(
        `${'https://api.hsforms.com/submissions/v3/integration/submit/123123/123123'}`,
      );
      req.flush(req);
      httpMock.verify();
    });
  })
});