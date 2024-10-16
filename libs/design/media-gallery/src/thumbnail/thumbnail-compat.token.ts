import { createSingleInjectionToken } from '@daffodil/core';

export const {
  /**
   * A multi provider injection token that marks a component as renderable for the `DaffMediaRendererComponent`.
   */
  token: daffThumbnailCompatToken,
  /**
   * Provider function for {@link daffThumbnailCompatToken}.
   */
  provider: provideDaffThumbnailCompatToken,
} = createSingleInjectionToken<unknown>('thumbnailCompatToken');
