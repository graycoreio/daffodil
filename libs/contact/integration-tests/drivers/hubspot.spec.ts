import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffContactDriver,
  DaffContactServiceInterface,
} from '@daffodil/contact/driver';
import { DaffContactHubSpotDriverModule } from '@daffodil/contact/driver/hubspot';
import { HubspotResponse } from '@daffodil/driver/hubspot/models/hubspot-response';

const stubHubspotResponse: HubspotResponse = { inlineMessage: 'Success!', errors: []};

describe('DaffContactHubspotDriver', () => {
  let contactService: DaffContactServiceInterface;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        DaffContactHubSpotDriverModule.forRoot({
          portalId: '123123',
          guid: '123123',
        }),
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    contactService = TestBed.inject(DaffContactDriver);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(contactService).toBeTruthy();
  });

  describe('when sending', () => {
    it('should send a submission', () => {
      const submission = { email: 'test@email.com' };
      contactService.send(submission).subscribe((resp) => {
        expect(resp).toEqual({ message: 'Success!' });
      });
      const req = httpMock.expectOne(
        'https://api.hsforms.com/submissions/v3/integration/submit/123123/123123',
      );
      expect(req.request.body).toEqual(jasmine.objectContaining({
        fields: [Object({ name: 'email', value: 'test@email.com' })],
        context: Object({ hutk: null, pageUri: '/', pageName: jasmine.any(String) }),
      }));
      req.flush(stubHubspotResponse);
      httpMock.verify();
    });

  });
});
