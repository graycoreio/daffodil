import {
  ConnectedPosition,
  Overlay,
  OverlayConfig,
} from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';

import {
  DaffMenuXPosition,
  DaffMenuYPosition,
} from './menu-position';

/**
 * The CDK connected position for a menu. `yPosition` controls whether the menu drops
 * below or rises above the activator; `xPosition` controls which edges line up. The menu
 * stays anchored to the activator, so this is a single placement rather than a set of
 * fallbacks.
 */
const daffMenuConnectedPosition = (xPosition: DaffMenuXPosition, yPosition: DaffMenuYPosition): ConnectedPosition => {
  const x = xPosition === 'before' ? 'end' : 'start';

  return {
    originX: x,
    overlayX: x,
    originY: yPosition === 'above' ? 'top' : 'bottom',
    overlayY: yPosition === 'above' ? 'bottom' : 'top',
  };
};

/**
 * The tallest the menu can be without running past the edge of the viewport in the
 * direction it opens, so the panel scrolls in place while staying anchored to the
 * activator. `above` grows upward from the activator's top edge; `below` grows downward
 * from the bottom edge.
 */
function daffMenuMaxHeight(yPosition: DaffMenuYPosition, rect: DOMRect): string {
  return yPosition === 'above'
    ? `${rect.top}px`
    : `calc(100% - ${rect.bottom}px)`;
}

export function daffMenuCreateOverlay(overlay: Overlay, element: ElementRef, xPosition: DaffMenuXPosition = 'after', yPosition: DaffMenuYPosition = 'below', config: OverlayConfig = {}) {
  const rect = element.nativeElement.getBoundingClientRect();

  return overlay.create({
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-transparent-backdrop',
    scrollStrategy: overlay.scrollStrategies.block(),
    disposeOnNavigation: true,
    maxHeight: daffMenuMaxHeight(yPosition, rect),
    positionStrategy: overlay
      .position()
      .flexibleConnectedTo(element)
      // Use exact positioning so `maxHeight` is applied directly to the panel, and don't
      // let the CDK push the panel to fit its natural height — both would detach it from
      // the activator in the chosen direction.
      .withFlexibleDimensions(false)
      .withPush(false)
      .withPositions([daffMenuConnectedPosition(xPosition, yPosition)]),
    ...config,
  });
};
