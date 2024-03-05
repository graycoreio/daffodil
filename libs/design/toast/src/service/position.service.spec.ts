import { BreakpointObserver } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';

import { DaffToastPositionService } from './position.service';

describe('@daffodil/design/toast | DaffToastPositionService', () => {
  let service: DaffToastPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        DaffToastPositionService,
      ],
    });

    service = new DaffToastPositionService(
      {
        position: {
          horizontal: 'right',
          vertical: 'bottom',
        },
        useParent: false,
      },
      TestBed.inject(BreakpointObserver),
    );
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
