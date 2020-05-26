import { TestBed } from '@angular/core/testing';

import { DaffRadioRegistry } from './radio-registry';
import { DaffRadioModule } from '../radio.module';

describe('DaffRadioRegistry', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      DaffRadioModule
    ]
  }));

  it('should be created', () => {
    const service: DaffRadioRegistry = TestBed.get(DaffRadioRegistry);
    expect(service).toBeTruthy();
  });
});
