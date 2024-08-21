import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs';

import { DaffSidebarService } from './sidebar.service';

@Injectable({
  providedIn: 'root',
})
class TestService extends DaffSidebarService {
  constructor() {
    super('defaultId');
  }
}

describe('@daffodil/design/sidebar | DaffSidebarService', () => {
  let service: TestService;

  beforeEach(() => {
    service = TestBed.inject(TestService);
  });

  it('should init id to the default ID', (done) => {
    service.id$.pipe(
      take(1),
    ).subscribe((id) => {
      expect(id).toEqual('defaultId');
      done();
    });
  });

  describe('open', () => {
    let id: string;

    beforeEach(() => {
      id = 'id';
      service.open(id);
    });

    it('should set the ID', (done) => {
      service.id$.pipe(
        take(1),
      ).subscribe((v) => {
        expect(v).toEqual(id);
        done();
      });
    });

    it('should set isOpen to true', () => {
      expect(service.isOpen()).toBeTrue();
    });
  });

  describe('close', () => {
    beforeEach(() => {
      service.close();
    });

    it('should set isOpen to false', () => {
      expect(service.isOpen()).toBeFalse();
    });
  });
});
