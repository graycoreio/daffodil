import { ElementRef } from '@angular/core';

import { daffMenuCreateOverlay } from './create-overlay';

describe('@daffodil/design/menu | daffMenuCreateOverlay', () => {
  let overlay: any;
  let positionStrategy: any;
  let element: ElementRef;

  const rect = {
    top: 100,
    bottom: 140,
    left: 0,
    right: 50,
    width: 50,
    height: 40,
  };

  const config = () => overlay.create.calls.mostRecent().args[0];
  const position = () => positionStrategy.withPositions.calls.mostRecent().args[0][0];

  beforeEach(() => {
    positionStrategy = {};
    for (const method of ['flexibleConnectedTo', 'withFlexibleDimensions', 'withPush', 'withPositions']) {
      positionStrategy[method] = jasmine.createSpy(method).and.returnValue(positionStrategy);
    }

    overlay = {
      create: jasmine.createSpy('create').and.returnValue({}),
      position: jasmine.createSpy('position').and.returnValue(positionStrategy),
      scrollStrategies: {
        block: jasmine.createSpy('block').and.returnValue('block'),
      },
    };

    element = new ElementRef(<any>{
      getBoundingClientRect: () => rect,
    });
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

  describe('when yPosition is below', () => {
    beforeEach(() => {
      daffMenuCreateOverlay(overlay, element, 'after', 'below');
    });

    it('should drop the menu from the activator bottom edge', () => {
      expect(position()).toEqual(jasmine.objectContaining({ originY: 'bottom', overlayY: 'top' }));
    });

    it('should cap the height to the space below the activator', () => {
      expect(config().maxHeight).toBe('calc(100% - 140px)');
    });
  });

  describe('when yPosition is above', () => {
    beforeEach(() => {
      daffMenuCreateOverlay(overlay, element, 'after', 'above');
    });

    it('should raise the menu from the activator top edge', () => {
      expect(position()).toEqual(jasmine.objectContaining({ originY: 'top', overlayY: 'bottom' }));
    });

    it('should cap the height to the space above the activator', () => {
      expect(config().maxHeight).toBe('100px');
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
});
