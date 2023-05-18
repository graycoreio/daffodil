import { TestBed } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffNewsletterHubspotService } from './newsletter.service';
import { DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';
import { HttpTestingController } from '@angular/common/http/testing';

describe('DaffNewsletterHubspotService', () => {
	let newsletterService: DaffNewsletterHubspotService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DaffNewsletterHubspotService,
				{
					provide: DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN,
					useValue: {
						submit: () => 'test',
					},
				},
			],
		});
		httpMock = TestBed.inject(HttpTestingController);

		newsletterService = TestBed.inject(DaffNewsletterHubspotService);
	});

	describe('send | sending a newsletter', () => {
		it('should send an email to the hubspot forms api', () => {
			it('should allow a developer to configure and send newsletter subscription requests to the HubspotForms API', () => {
				const newsletterSubmission = { email: 'test@email.com' };
				newsletterService.send(newsletterSubmission).subscribe(resp => {
					expect(resp).toEqual(newsletterSubmission);
				});
				const req = httpMock.expectOne(
					'https://api.hsforms.com/submissions/v3/integration/submit/123123/123123',
				);
				expect(req.request.body).toEqual(
					jasmine.objectContaining({
						fields: [Object({ name: 'email', value: 'test@email.com' })],
						context: Object({
							hutk: null,
							pageUri: '/',
							pageName: jasmine.any(String),
						}),
					}),
				);
				req.flush(newsletterSubmission);
			});
		});
	});
});
