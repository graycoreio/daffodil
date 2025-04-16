import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffContactDriver,
  DaffContactServiceInterface,
} from '@daffodil/contact/driver';
import { DaffContactHubSpotDriverModule } from '@daffodil/contact/driver/hubspot';
import { HubspotResponse } from '@daffodil/driver/hubspot';

const stubHubspotResponse: HubspotResponse = { inlineMessage: 'Success!', errors: []};

describe('DaffContactHubspotDriver', () => {
  let service: DaffContactServiceInterface;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffContactHubSpotDriverModule.forRoot({
          portalId: '123123',
          guid: '123123',
        }),
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffContactDriver);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when sending', () => {
    it('should send a submission', () => {
      const submission = { email: 'test@email.com' };
      service.send(submission).subscribe((resp) => {
        expect(resp).toEqual({ message: 'Success!' });
      });
      const req = httpMock.expectOne(
        'https://api.hsforms.com/submissions/v3/integration/submit/123123/123123',
      );
      expect(req.request.body).toEqual(jasmine.objectContaining({
        fields: [Object({ name: 'email', value: 'test@email.com' })],
        context: jasmine.objectContaining({ pageUri: '/', pageName: jasmine.any(String) }),
      }));
      req.flush(stubHubspotResponse);
    });

  });
});
