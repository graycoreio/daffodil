import { InjectionToken } from '@angular/core';
import { register } from 'swiper/element/bundle';

let registered = false;

/**
 * Injection token for DaffSfCarouselComponent initialization
 * Automatically registers Swiper custom elements once globally when first injected
 */
export const DAFF_SF_CAROUSEL_INIT = new InjectionToken<true>(
  'DAFF_SF_CAROUSEL_INIT',
  {
    providedIn: 'root',
    factory: () => {
      if (!registered) {
        register();
        registered = true;
      }
      return true;
    },
  },
);

