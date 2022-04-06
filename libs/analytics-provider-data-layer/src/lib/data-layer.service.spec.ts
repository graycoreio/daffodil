import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import {
  DaffAnalyticsDataLayer,
  WindowWithDataLayer,
} from './data-layer.service';

describe('@daffodil/analytics-provider-data-layer | DataLayerService', () => {
  let service: DaffAnalyticsDataLayer;

  it('should be root injectable', () => {
    TestBed.configureTestingModule({});
    expect(TestBed.inject(DaffAnalyticsDataLayer)).toBeTruthy();
  });


  it('should append to the dataLayer', () => {
    TestBed.configureTestingModule({});
    expect(TestBed.inject(DaffAnalyticsDataLayer)).toBeTruthy();
  });

  it('should clear the commerce data layer when appending new events', () => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(DaffAnalyticsDataLayer);
    const document = TestBed.inject(DOCUMENT);

    const nullEcommerce = { ecommerce: null };
    const impression = { ecommerce: { impressions: []}};

    service.push(impression);
    expect((<WindowWithDataLayer>document.defaultView).dataLayer).toEqual([nullEcommerce, impression]);
  });
});
