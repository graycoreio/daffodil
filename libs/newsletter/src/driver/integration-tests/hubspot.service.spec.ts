import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DaffNewsletterHubSpotDriverModule } from '../hubspot/hubspot-driver.module';
import { DaffHubspotNewsletterService } from '../hubspot/newsletter.service';

describe('DaffHubspotNewsletterDriver', () => {
  let newsletterService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DaffNewsletterHubSpotDriverModule.forRoot({ portalId: '123123', guid: '123123' })
      ],
      providers: [
        DaffHubspotNewsletterService
      ]
    });
    httpMock = TestBed.get(HttpTestingController);
    newsletterService = TestBed.get<DaffHubspotNewsletterService>(DaffHubspotNewsletterService);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(newsletterService).toBeTruthy();
  });
  describe('when sending', () => {
    it('should send a submission', () => {
      const forumSubmission = { email: 'test@email.com' };
      const mockReq = of(forumSubmission);
      newsletterService.send(forumSubmission).subscribe();
      const req = httpMock.expectOne(`${'https://api.hsforms.com/submissions/v3/integration/submit/123123/123123'}`);
      expect(req.request.body).toEqual(
        {
          fields: [Object({ 'name': 'email', 'value': 'test@email.com' })],
          context: Object({ hutk: null, pageUri: null, pageName: '' })
        }
      );
      req.flush(mockReq);
      httpMock.verify();
    });
  });
});
