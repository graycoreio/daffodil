import {
  ConnectedPosition,
  Overlay,
  OverlayConfig,
  STANDARD_DROPDOWN_ADJACENT_POSITIONS,
  STANDARD_DROPDOWN_BELOW_POSITIONS,
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

export const daffMenuCreateOverlay = (
  overlay: Overlay,
  element: ElementRef,
  xPosition: DaffMenuXPosition = 'after',
  yPosition: DaffMenuYPosition = 'below',
  nested = false,
  config: OverlayConfig = {},
) => overlay.create({
  hasBackdrop: !nested,
  backdropClass: 'cdk-overlay-transparent-backdrop',
  panelClass: 'daff-menu-overlay',
  scrollStrategy: nested ? overlay.scrollStrategies.reposition() : overlay.scrollStrategies.block(),
  disposeOnNavigation: true,
  positionStrategy: overlay
    .position()
    .flexibleConnectedTo(element)
    .withFlexibleDimensions(true)
    .withPush(false)
    .withViewportMargin(24)
    .withPositions(
      nested
        ? STANDARD_DROPDOWN_ADJACENT_POSITIONS
        : [
          daffMenuConnectedPosition(xPosition, yPosition),
          ...STANDARD_DROPDOWN_BELOW_POSITIONS,
        ],
    ),
  ...config,
});
