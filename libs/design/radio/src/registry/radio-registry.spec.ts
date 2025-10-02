import { TestBed } from '@angular/core/testing';

import { DaffRadioRegistry } from './radio-registry';
import { DaffRadioModule } from '../radio.module';

describe('@daffodil/design/radio | DaffRadioRegistry', () => {
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
