import {
	HttpTestingController,
	HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffContactDriver } from '@daffodil/contact';
import { DaffContactZendeskDriverModule } from '@daffodil/contact/driver/zendesk';

describe('Integration | DaffContactZendeskDriver', () => {
	let contactService;
	let httpMock: HttpTestingController;
	beforeEach(() => {
		
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				DaffContactZendeskDriverModule.forRoot({
					subdomain: 'test'
				}),
			],
		});

		httpMock = TestBed.get(HttpTestingController);
		contactService = TestBed.get(DaffContactDriver);
	});
	afterEach(() => {
		httpMock.verify();
	});

	it('should be created', () => {
		expect(contactService).toBeTruthy();
	});

	describe('when sending', () => {
		it('should send a submission', () => {
			const formSubmission = { email: 'test@email.com', name: "name", message: "My message!" };
			const mockReq = of(formSubmission);
			contactService.send(formSubmission).subscribe();
			const req = httpMock.expectOne(
				`${'https://test.zendesk.com/api/v2/requests.json'}`,
			);
			expect(req.request.body).toEqual({
				"request": {
					"requester": {"name": formSubmission.name, "email": formSubmission.email},
					"subject": "Contact Form Request",
					"comment": {"body": formSubmission.message }
				}
			});
			req.flush(mockReq);
			httpMock.verify();
		});
	});
});
