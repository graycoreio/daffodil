
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import {
  DaffContactZendeskDriverConfig,
  DaffContactZendeskDriverConfigToken,
} from './config';
import { DaffContactZendeskDriverService } from './zendesk.service';

describe('DaffContactZendeskDriverService', () => {
  let service: DaffContactZendeskDriverService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    const config: DaffContactZendeskDriverConfig = {
      domain: 'test',
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: DaffContactZendeskDriverConfigToken,
          useValue: {
            domain: 'https://my-domain.zendesk.com',
          },
        },
        DaffContactZendeskDriverService,
      ],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DaffContactZendeskDriverService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a form submission as a POST to the zendesk request api', () => {
    service.send({ email: 'test@example.com' }).subscribe(() => {});

    const req = httpTestingController.expectOne(
      'https://testzendesk.com/api/v2/requests.json',
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({
      request: {
        requester: {
          name: undefined,
          email: 'test@example.com',
        },
        subject: 'Contact Form Request',
        comment: { body: undefined },
      },
    });
  });
});
