import { ElementRef } from '@angular/core';

import { daffMenuCreateOverlay } from './create-overlay';

describe('@daffodil/design/menu | daffMenuCreateOverlay', () => {
  let overlay: any;
  let positionStrategy: any;

  const config = () => overlay.create.calls.mostRecent().args[0];
  const positions = () => positionStrategy.withPositions.calls.mostRecent().args[0];
  const position = () => positions()[0];

  // Builds an activator whose rect and viewport height can be varied to exercise the
  // proximity-based side resolution. The default sits with ample room on every side.
  const elementAt = (rect: Partial<DOMRect> = {}, innerHeight = 1000): ElementRef =>
    new ElementRef(<any>{
      getBoundingClientRect: () => (<DOMRect>{ top: 100, bottom: 140, left: 0, right: 50, width: 50, height: 40, ...rect }),
      ownerDocument: { defaultView: { innerHeight }},
    });

  beforeEach(() => {
    positionStrategy = {};
    for (const method of ['flexibleConnectedTo', 'withFlexibleDimensions', 'withPush', 'withViewportMargin', 'withPositions']) {
      positionStrategy[method] = jasmine.createSpy(method).and.returnValue(positionStrategy);
    }

    overlay = {
      create: jasmine.createSpy('create').and.returnValue({}),
      position: jasmine.createSpy('position').and.returnValue(positionStrategy),
      scrollStrategies: {
        block: jasmine.createSpy('block').and.returnValue('block'),
      },
    };
  });

  it('should default to the after/below position', () => {
    daffMenuCreateOverlay(overlay, elementAt());

    expect(position()).toEqual(jasmine.objectContaining({
      originX: 'start',
      overlayX: 'start',
      originY: 'bottom',
      overlayY: 'top',
    }));
  });

  it('should scope a pane class so the menu can dissolve its wrapper and scroll', () => {
    daffMenuCreateOverlay(overlay, elementAt());

    expect(config().panelClass).toBe('daff-menu-overlay');
  });

  it('should let the CDK cap the panel to the viewport on the side it opens', () => {
    daffMenuCreateOverlay(overlay, elementAt());

    expect(positionStrategy.withFlexibleDimensions).toHaveBeenCalledWith(true);
  });

  it('should keep the menu anchored rather than pushing it off the activator', () => {
    daffMenuCreateOverlay(overlay, elementAt());

    expect(positionStrategy.withPush).toHaveBeenCalledWith(false);
  });

  it('should keep the menu clear of the viewport edges', () => {
    daffMenuCreateOverlay(overlay, elementAt());

    expect(positionStrategy.withViewportMargin).toHaveBeenCalledWith(jasmine.any(Number));
  });

  it('should offer a horizontal fallback so a menu near the side of the viewport flips edges', () => {
    daffMenuCreateOverlay(overlay, elementAt());

    expect(positions()).toContain(jasmine.objectContaining({ originX: 'end', overlayX: 'end', originY: 'bottom' }));
  });

  describe('vertical placement', () => {
    it('should drop below when the activator has room beneath it', () => {
      daffMenuCreateOverlay(overlay, elementAt({ bottom: 140 }, 1000), 'after', 'below');

      expect(position()).toEqual(jasmine.objectContaining({ originY: 'bottom', overlayY: 'top' }));
    });

    it('should rise above when the activator sits too close to the bottom edge', () => {
      daffMenuCreateOverlay(overlay, elementAt({ bottom: 995 }, 1000), 'after', 'below');

      expect(position()).toEqual(jasmine.objectContaining({ originY: 'top', overlayY: 'bottom' }));
    });

    it('should rise above when the activator has room over it', () => {
      daffMenuCreateOverlay(overlay, elementAt({ top: 500 }, 1000), 'after', 'above');

      expect(position()).toEqual(jasmine.objectContaining({ originY: 'top', overlayY: 'bottom' }));
    });

    it('should drop below when the activator sits too close to the top edge', () => {
      daffMenuCreateOverlay(overlay, elementAt({ top: 5 }, 1000), 'after', 'above');

      expect(position()).toEqual(jasmine.objectContaining({ originY: 'bottom', overlayY: 'top' }));
    });

    it('should keep the requested side when the viewport height is unknown', () => {
      daffMenuCreateOverlay(overlay, elementAt({ bottom: 995 }, 0), 'after', 'below');

      expect(position()).toEqual(jasmine.objectContaining({ originY: 'bottom', overlayY: 'top' }));
    });
  });

  describe('when xPosition is after', () => {
    it('should line up the left edges', () => {
      daffMenuCreateOverlay(overlay, elementAt(), 'after', 'below');

      expect(position()).toEqual(jasmine.objectContaining({ originX: 'start', overlayX: 'start' }));
    });
  });

  describe('when xPosition is before', () => {
    it('should line up the right edges', () => {
      daffMenuCreateOverlay(overlay, elementAt(), 'before', 'below');

      expect(position()).toEqual(jasmine.objectContaining({ originX: 'end', overlayX: 'end' }));
    });
  });
});
