import { ImageLoaderConfig } from '@angular/common';

import {
  createVercelImageLoader,
  provideVercelImageLoader,
  VercelAssetsConfig,
} from './vercel-image-loader';

describe('@daffodil/core | Image | createVercelImageLoader', () => {
  let domain: string;
  let configuration: VercelAssetsConfig;
  let imageLoader: (config: ImageLoaderConfig) => string;

  beforeEach(() => {
    domain = 'https://assets.daff.io';
    configuration = {
      defaultWidth: 256,
      quality: 75,
    };
    imageLoader = createVercelImageLoader(domain, configuration);
  });

  describe('when src starts with the domain', () => {
    it('should transform the URL using Vercel image optimization', () => {
      const config: ImageLoaderConfig = {
        src: 'https://assets.daff.io/images/test.jpg',
        width: 400,
      };

      const result = imageLoader(config);

      expect(result).toBe('https://assets.daff.io/_vercel/image?url=%2Fimages%2Ftest.jpg&w=400&q=75');
    });

    it('should use default width when width is not provided', () => {
      const config: ImageLoaderConfig = {
        src: 'https://assets.daff.io/images/test.jpg',
      };

      const result = imageLoader(config);

      expect(result).toBe('https://assets.daff.io/_vercel/image?url=%2Fimages%2Ftest.jpg&w=256&q=75');
    });

    it('should encode the URL path correctly', () => {
      const config: ImageLoaderConfig = {
        src: 'https://assets.daff.io/images/folder with spaces/test.jpg',
        width: 300,
      };

      const result = imageLoader(config);

      expect(result).toBe('https://assets.daff.io/_vercel/image?url=%2Fimages%2Ffolder%20with%20spaces%2Ftest.jpg&w=300&q=75');
    });

    it('should handle root level images', () => {
      const config: ImageLoaderConfig = {
        src: 'https://assets.daff.io/logo.png',
        width: 150,
      };

      const result = imageLoader(config);

      expect(result).toBe('https://assets.daff.io/_vercel/image?url=%2Flogo.png&w=150&q=75');
    });

    it('should use the configured quality setting', () => {
      const highQualityConfig: VercelAssetsConfig = {
        defaultWidth: 256,
        quality: 90,
      };
      const highQualityLoader = createVercelImageLoader(domain, highQualityConfig);

      const config: ImageLoaderConfig = {
        src: 'https://assets.daff.io/images/test.jpg',
        width: 400,
      };

      const result = highQualityLoader(config);

      expect(result).toBe('https://assets.daff.io/_vercel/image?url=%2Fimages%2Ftest.jpg&w=400&q=90');
    });
  });

  describe('when src does not start with the domain', () => {
    it('should return the original src unchanged for external URLs', () => {
      const config: ImageLoaderConfig = {
        src: 'https://example.com/images/test.jpg',
        width: 400,
      };

      const result = imageLoader(config);

      expect(result).toBe('https://example.com/images/test.jpg');
    });

    it('should return the original src unchanged for relative URLs', () => {
      const config: ImageLoaderConfig = {
        src: '/local/image.jpg',
        width: 400,
      };

      const result = imageLoader(config);

      expect(result).toBe('/local/image.jpg');
    });

    it('should return the original src unchanged for data URLs', () => {
      const config: ImageLoaderConfig = {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
        width: 400,
      };

      const result = imageLoader(config);

      expect(result).toBe('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==');
    });
  });

  describe('with different domain configurations', () => {
    it('should work with different domain', () => {
      const customDomain = 'https://cdn.example.com';
      const customLoader = createVercelImageLoader(customDomain, configuration);

      const config: ImageLoaderConfig = {
        src: 'https://cdn.example.com/images/test.jpg',
        width: 400,
      };

      const result = customLoader(config);

      expect(result).toBe('https://cdn.example.com/_vercel/image?url=%2Fimages%2Ftest.jpg&w=400&q=75');
    });

    it('should not transform URLs that do not match the exact domain', () => {
      const config: ImageLoaderConfig = {
        src: 'https://assets.daff.io.fake.com/images/test.jpg',
        width: 400,
      };

      const result = imageLoader(config);

      expect(result).toBe('https://assets.daff.io.fake.com/images/test.jpg');
    });
  });

  describe('edge cases', () => {
    it('should handle zero width', () => {
      const config: ImageLoaderConfig = {
        src: 'https://assets.daff.io/images/test.jpg',
        width: 0,
      };

      const result = imageLoader(config);

      expect(result).toBe('https://assets.daff.io/_vercel/image?url=%2Fimages%2Ftest.jpg&w=256&q=75');
    });

    it('should handle undefined width', () => {
      const config: ImageLoaderConfig = {
        src: 'https://assets.daff.io/images/test.jpg',
        width: undefined,
      };

      const result = imageLoader(config);

      expect(result).toBe('https://assets.daff.io/_vercel/image?url=%2Fimages%2Ftest.jpg&w=256&q=75');
    });

    it('should handle empty path', () => {
      const config: ImageLoaderConfig = {
        src: 'https://assets.daff.io/',
        width: 400,
      };

      const result = imageLoader(config);

      expect(result).toBe('https://assets.daff.io/_vercel/image?url=%2F&w=400&q=75');
    });
  });
});

describe('Core | Image | provideVercelImageLoader', () => {
  it('should provide IMAGE_LOADER with custom domain and configuration', () => {
    const customDomain = 'https://custom.domain.com';
    const customConfig: VercelAssetsConfig = {
      defaultWidth: 512,
      quality: 90,
    };

    const providers = provideVercelImageLoader(customDomain, customConfig);
    expect(providers).toBeDefined();
    expect(typeof providers).toEqual('object');
  });
});
