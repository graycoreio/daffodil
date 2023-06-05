import { TestBed } from '@angular/core/testing';

import { DaffTestingContactService } from './contact.service';
import { cold, hot } from "jasmine-marbles";

describe('The DaffTestingContactService', () => {
  let contactService: DaffTestingContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingContactService,
      ],
    });
    contactService = TestBed.inject<DaffTestingContactService>(DaffTestingContactService);
  });

  it('should be created',() =>{
    expect(contactService).toBeTruthy();
  });

  describe('when sending', () => {
    it('should return an observable of DaffContactResponse', () => {
      const payload = { email: 'email@email.edu' };
      const expected = { message: 'success' };

      contactService.send(payload).subscribe((response) => {
        expect(response).toEqual(expected);
      });
    });
  });
});
