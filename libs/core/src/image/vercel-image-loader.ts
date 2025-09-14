
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
} from '@angular/common';
import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

/**
 * Configuration interface for Vercel image optimization settings.
 */
export interface VercelAssetsConfig {
  /**
   * Default width to use when no width is specified in the image config.
   */
  defaultWidth: number;
  /**
   * Image quality setting (0-100) for Vercel image optimization.
   */
  quality: number;
}

/**
 * Creates a Vercel image loader function that optimizes images through Vercel's image optimization service.
 *
 * @param domain The domain to match against image URLs for transformation
 * @param configuration Configuration options for image optimization
 * @returns An image loader function that transforms URLs for Vercel image optimization
 */
export const createVercelImageLoader = (domain: string, configuration: VercelAssetsConfig) =>
  (config: ImageLoaderConfig): string => {
    if (!config.src.startsWith(domain + '/')) {
      return config.src;
    }

    const baseUrl = domain + '/_vercel/image';
    const path = config.src.replace(domain, '');
    const url = encodeURIComponent(path);
    const width = config.width || configuration.defaultWidth;
    const quality = configuration.quality;

    return `${baseUrl}?url=${url}&w=${width}&q=${quality}`;
  };

/**
 * Provides a Vercel image loader as an Angular environment provider.
 *
 * @param domain The domain to match against image URLs for transformation
 * @param configuration Configuration options for image optimization
 * @returns Environment providers array containing the Vercel image loader
 */
export const provideVercelImageLoader = (domain: string, configuration: VercelAssetsConfig): EnvironmentProviders => makeEnvironmentProviders([{
  provide: IMAGE_LOADER,
  useFactory: () => createVercelImageLoader(domain, configuration),
}]);
