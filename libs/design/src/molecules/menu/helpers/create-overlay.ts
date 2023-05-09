import {
  Overlay,
  OverlayConfig,
} from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';

export function daffMenuCreateOverlay(overlay: Overlay, element: ElementRef, config: OverlayConfig = {}) {
  return overlay.create({
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-transparent-backdrop',
    scrollStrategy: overlay.scrollStrategies.block(),
    disposeOnNavigation: true,
    positionStrategy: overlay
      .position()
      .flexibleConnectedTo(element)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 0,
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
        },
      ]),
    ...config,
  });
};
