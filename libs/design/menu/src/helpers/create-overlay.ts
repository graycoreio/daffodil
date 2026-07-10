import {
  ConnectedPosition,
  HorizontalConnectionPos,
  Overlay,
  OverlayConfig,
  VerticalConnectionPos,
} from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';

import {
  DaffMenuXPosition,
  DaffMenuYPosition,
} from './menu-position';

/**
 * How close, in pixels, the activator is allowed to sit to an edge of the viewport before the
 * menu switches to the opposite side. The menu otherwise stays on its requested side and
 * scrolls when it's too tall, rather than flipping just because it doesn't fully fit — so this only kicks in when the activator itself is near the edge.
 */
const DAFF_MENU_FLIP_THRESHOLD = 128;

/**
 * The gap, in pixels, the CDK keeps between the menu and every edge of the viewport so the
 * panel never sits flush against the screen.
 */
const DAFF_MENU_VIEWPORT_MARGIN = 24;

/**
 * Resolves which side the menu opens on. It keeps the requested `yPosition` unless the
 * activator is within {@link DAFF_MENU_VIEWPORT_MARGIN} of that side's edge — a menu requested
 * below an activator that sits too close to the bottom of the viewport opens above instead.
 * When the viewport height is unknown (e.g. server-side) the requested side is kept as-is.
 */
const daffMenuResolveYPosition = (yPosition: DaffMenuYPosition, rect: DOMRect, viewportHeight: number): DaffMenuYPosition => {
  if (!viewportHeight) {
    return yPosition;
  }

  return yPosition === 'above'
    ? (rect.top < DAFF_MENU_FLIP_THRESHOLD ? 'below' : 'above')
    : (viewportHeight - rect.bottom < DAFF_MENU_FLIP_THRESHOLD ? 'above' : 'below');
};

/**
 * The CDK connected positions for a menu, ordered by preference. The menu opens on the given
 * `yPosition` — `above` rises from the activator's top edge, `below` drops from its bottom —
 * and the two entries flip only the horizontal edges the menu lines up against, so the CDK can
 * shift a menu near the left or right of the viewport onto the opposite side without changing
 * which way it opens.
 */
const daffMenuConnectedPositions = (xPosition: DaffMenuXPosition, yPosition: DaffMenuYPosition): ConnectedPosition[] => {
  const preferredX = xPosition === 'before' ? 'end' : 'start';
  const oppositeX = preferredX === 'end' ? 'start' : 'end';
  const originY: VerticalConnectionPos = yPosition === 'above' ? 'top' : 'bottom';
  const overlayY: VerticalConnectionPos = originY === 'top' ? 'bottom' : 'top';

  const at = (x: HorizontalConnectionPos): ConnectedPosition => ({
    originX: x,
    overlayX: x,
    originY,
    overlayY,
  });

  return [at(preferredX), at(oppositeX)];
};

export function daffMenuCreateOverlay(overlay: Overlay, element: ElementRef, xPosition: DaffMenuXPosition = 'after', yPosition: DaffMenuYPosition = 'below', config: OverlayConfig = {}) {
  const rect = element.nativeElement.getBoundingClientRect();
  const viewportHeight = element.nativeElement.ownerDocument?.defaultView?.innerHeight ?? 0;
  const resolvedYPosition = daffMenuResolveYPosition(yPosition, rect, viewportHeight);

  return overlay.create({
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-transparent-backdrop',
    panelClass: 'daff-menu-overlay',
    scrollStrategy: overlay.scrollStrategies.block(),
    disposeOnNavigation: true,
    positionStrategy: overlay
      .position()
      .flexibleConnectedTo(element)
      .withFlexibleDimensions(true)
      .withPush(false)
      .withViewportMargin(24)
      .withPositions(daffMenuConnectedPositions(xPosition, resolvedYPosition)),
    ...config,
  });
};
