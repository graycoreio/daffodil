import { TestBed } from '@angular/core/testing';

import { DaffViewportService } from './viewport.service';

describe('@daffodil/design/viewport | DaffViewportService', () => {
  let service: DaffViewportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(DaffViewportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default both sidebars to undefined', () => {
    expect(service.state()).toEqual({
      sidebar: {
        left: undefined,
        right: undefined,
      },
    });
  });

  describe('open', () => {
    it('should open the left sidebar', () => {
      service.open('left');

      expect(service.state().sidebar.left).toEqual({ open: true });
    });

    it('should open the right sidebar', () => {
      service.open('right');

      expect(service.state().sidebar.right).toEqual({ open: true });
    });

    it('should not affect the other side', () => {
      service.open('left');

      expect(service.state().sidebar.right).toBeUndefined();
    });
  });

  describe('close', () => {
    it('should close the left sidebar', () => {
      service.open('left');
      service.close('left');

      expect(service.state().sidebar.left).toEqual({ open: false });
    });

    it('should close the right sidebar', () => {
      service.open('right');
      service.close('right');

      expect(service.state().sidebar.right).toEqual({ open: false });
    });

    it('should set `open` to false when closing a side that was never opened', () => {
      service.close('left');

      expect(service.state().sidebar.left).toEqual({ open: false });
    });

    it('should not affect the other side', () => {
      service.open('right');
      service.close('left');

      expect(service.state().sidebar.right).toEqual({ open: true });
    });
  });
});
