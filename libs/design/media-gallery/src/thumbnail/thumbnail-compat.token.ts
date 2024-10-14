import { createSingleInjectionToken } from '@daffodil/core';

export const {
  /**
   * A multi provider injection token that marks a component as renderable for the `DaffMediaRendererComponent`.
   */
  token: daffThumbnailCompatToken,
  provider: daffProvidedaffThumbnailCompatToken,
} = createSingleInjectionToken<unknown>('thumbnailCompatToken');
