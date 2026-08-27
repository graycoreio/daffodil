import {
  STANDARD_DROPDOWN_ADJACENT_POSITIONS,
  STANDARD_DROPDOWN_BELOW_POSITIONS,
} from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';

import { daffMenuCreateOverlay } from './create-overlay';

describe('@daffodil/design/menu | daffMenuCreateOverlay', () => {
  let overlay: any;
  let positionStrategy: any;
  let element: ElementRef;

  const config = () => overlay.create.calls.mostRecent().args[0];
  const positions = () => positionStrategy.withPositions.calls.mostRecent().args[0];
  const position = () => positions()[0];

  beforeEach(() => {
    element = new ElementRef(<any>{});

    positionStrategy = {};
    for (const method of ['flexibleConnectedTo', 'withFlexibleDimensions', 'withPush', 'withViewportMargin', 'withPositions']) {
      positionStrategy[method] = jasmine.createSpy(method).and.returnValue(positionStrategy);
    }

    overlay = {
      create: jasmine.createSpy('create').and.returnValue({}),
      position: jasmine.createSpy('position').and.returnValue(positionStrategy),
      scrollStrategies: {
        block: jasmine.createSpy('block').and.returnValue('block'),
        reposition: jasmine.createSpy('reposition').and.returnValue('reposition'),
      },
    };
  });

  it('should default to the after/below position', () => {
    daffMenuCreateOverlay(overlay, element);

    expect(position()).toEqual(jasmine.objectContaining({
      originX: 'start',
      overlayX: 'start',
      originY: 'bottom',
      overlayY: 'top',
    }));
  });

  it('should scope a pane class so the menu can dissolve its wrapper and scroll', () => {
    daffMenuCreateOverlay(overlay, element);

    expect(config().panelClass).toBe('daff-menu-overlay');
  });

  it('should let the CDK cap the panel to the viewport on the side it opens', () => {
    daffMenuCreateOverlay(overlay, element);

    expect(positionStrategy.withFlexibleDimensions).toHaveBeenCalledWith(true);
  });

  it('should keep the menu anchored rather than pushing it off the activator', () => {
    daffMenuCreateOverlay(overlay, element);

    expect(positionStrategy.withPush).toHaveBeenCalledWith(false);
  });

  it('should keep the menu clear of the viewport edges', () => {
    daffMenuCreateOverlay(overlay, element);

    expect(positionStrategy.withViewportMargin).toHaveBeenCalledWith(jasmine.any(Number));
  });

  it('should append the CDK standard dropdown positions as fallbacks after the requested one', () => {
    daffMenuCreateOverlay(overlay, element);

    expect(positions().slice(1)).toEqual(STANDARD_DROPDOWN_BELOW_POSITIONS);
  });

  describe('vertical placement', () => {
    it('should drop below when below is requested', () => {
      daffMenuCreateOverlay(overlay, element, 'after', 'below');

      expect(position()).toEqual(jasmine.objectContaining({ originY: 'bottom', overlayY: 'top' }));
    });

    it('should rise above when above is requested', () => {
      daffMenuCreateOverlay(overlay, element, 'after', 'above');

      expect(position()).toEqual(jasmine.objectContaining({ originY: 'top', overlayY: 'bottom' }));
    });
  });

  describe('when xPosition is after', () => {
    it('should line up the left edges', () => {
      daffMenuCreateOverlay(overlay, element, 'after', 'below');

      expect(position()).toEqual(jasmine.objectContaining({ originX: 'start', overlayX: 'start' }));
    });
  });

  describe('when xPosition is before', () => {
    it('should line up the right edges', () => {
      daffMenuCreateOverlay(overlay, element, 'before', 'below');

      expect(position()).toEqual(jasmine.objectContaining({ originX: 'end', overlayX: 'end' }));
    });
  });

  describe('a top-level (non-nested) menu', () => {
    it('should own a backdrop', () => {
      daffMenuCreateOverlay(overlay, element);

      expect(config().hasBackdrop).toBe(true);
    });

    it('should block page scroll', () => {
      daffMenuCreateOverlay(overlay, element);

      expect(overlay.scrollStrategies.block).toHaveBeenCalled();
      expect(config().scrollStrategy).toBe('block');
    });
  });

  describe('a nested submenu', () => {
    it('should not own a backdrop', () => {
      daffMenuCreateOverlay(overlay, element, 'after', 'below', true);

      expect(config().hasBackdrop).toBe(false);
    });

    it('should reposition rather than block scroll so it tracks its parent item', () => {
      daffMenuCreateOverlay(overlay, element, 'after', 'below', true);

      expect(overlay.scrollStrategies.reposition).toHaveBeenCalled();
      expect(config().scrollStrategy).toBe('reposition');
    });

    it('should use the CDK standard adjacent positions', () => {
      daffMenuCreateOverlay(overlay, element, 'after', 'below', true);

      expect(positions()).toEqual(STANDARD_DROPDOWN_ADJACENT_POSITIONS);
    });

    it('should open to the right of the item, top-aligned, as its first choice', () => {
      daffMenuCreateOverlay(overlay, element, 'after', 'below', true);

      expect(position()).toEqual(jasmine.objectContaining({
        originX: 'end',
        overlayX: 'start',
        originY: 'top',
        overlayY: 'top',
      }));
    });

    it('should fall back to the left side of the item', () => {
      daffMenuCreateOverlay(overlay, element, 'after', 'below', true);

      expect(positions()).toContain(jasmine.objectContaining({ originX: 'start', overlayX: 'end' }));
    });
  });
});
