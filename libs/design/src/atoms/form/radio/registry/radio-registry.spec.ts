import { TestBed } from '@angular/core/testing';

import { DaffRadioModule } from '../radio.module';
import { DaffRadioRegistry } from './radio-registry';

describe('DaffRadioRegistry', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      DaffRadioModule,
    ],
  }));

  it('should be created', () => {
    const service: DaffRadioRegistry = TestBed.inject(DaffRadioRegistry);
    expect(service).toBeTruthy();
  });
});
