import { TestBed } from '@angular/core/testing';

import { AddToCartNotificationService } from './add-to-cart-notification.service';

describe('AddToCartNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddToCartNotificationService = TestBed.get(AddToCartNotificationService);
    expect(service).toBeTruthy();
  });
});
