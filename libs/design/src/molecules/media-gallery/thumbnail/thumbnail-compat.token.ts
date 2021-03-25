import { InjectionToken } from '@angular/core';

/**
 * A multi provider injection token that marks a component as renderable for the `DaffMediaRendererComponent`.
 */
export const daffThumbnailCompatToken = new InjectionToken<unknown>('thumbnailCompatToken');
