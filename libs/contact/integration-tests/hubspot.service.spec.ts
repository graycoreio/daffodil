import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DaffContactHubSpotDriverModule } from '../src/driver/hubspot/hubspot-driver.module';
import { of } from 'rxjs';
import { DaffContactDriver } from '../src';


describe('DaffContactHubspotDriver', () => {
  let contactService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DaffContactHubSpotDriverModule.forRoot({ portalId: '123123', guid: '123123' })
      ]
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
      const forumSubmission = { email: 'test@email.com' };
      const mockReq = of(forumSubmission);
      contactService.send(forumSubmission).subscribe();
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