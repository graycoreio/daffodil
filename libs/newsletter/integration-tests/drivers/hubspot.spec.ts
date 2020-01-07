import { TestBed } from '@angular/core/testing';

import { 
	DaffNewsletterHubSpotDriverModule, 
	DaffNewsletterDriver, 
	DaffNewsletterServiceInterface 
} from '@daffodil/newsletter';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('DaffNewsletterHubspotDriver', () => {
	let newsletterService: DaffNewsletterServiceInterface<any, any>;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				DaffNewsletterHubSpotDriverModule.forRoot({
					portalId: '123123',
					guid: '123123',
				}),
			],
		});

		httpMock = TestBed.get(HttpTestingController);

		newsletterService = TestBed.get<DaffNewsletterServiceInterface<any, any>>(
			DaffNewsletterDriver
		);
  });
  
	it('should provide an instance of the DaffNewsletterDriver', () => {
		expect(newsletterService).toBeTruthy();
	});
	
	it('should allow a developer to configure and send newsletter subscription requests to the HubspotForms API', () => {
		const newsletterSubmission = { email: 'test@email.com' };
		newsletterService.send(newsletterSubmission).subscribe();
		const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/123123/123123');
		req.flush(newsletterSubmission);
		httpMock.verify();
	})
});
