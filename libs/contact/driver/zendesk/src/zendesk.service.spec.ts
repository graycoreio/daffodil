import { TestBed } from '@angular/core/testing';

import { DaffContactZendeskService } from './zendesk.service';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import {
	DaffContactZendeskConfigToken,
	DaffContactZendeskConfig,
} from './config';
import { DaffContactZendeskConfigService } from './config.service';

describe('DaffContactZendeskService', () => {
	let service: DaffContactZendeskService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		const config: DaffContactZendeskConfig = {
			subdomain: 'test',
		};

		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				{
					provide: DaffContactZendeskConfigService,
					useValue: {
						getEndpoint() {
							return 'https://testzendesk.com';
						},
					},
				},
				DaffContactZendeskService,
			],
		});

		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(DaffContactZendeskService);
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
					 email: 'test@example.com'
				},
				subject: 'Contact Form Request',
				comment: { body: undefined },
			}
		});
	});
});
