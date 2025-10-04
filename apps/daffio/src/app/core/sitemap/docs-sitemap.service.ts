import { Injectable } from '@angular/core';
import { SitemapUrl } from './sitemap.service';

/**
 * Extended sitemap service for dynamic documentation routes
 * This can be expanded to fetch and generate sitemap entries for all doc pages
 */
@Injectable({
  providedIn: 'root',
})
export class DaffioDocsSitemapService {
  /**
   * Get documentation routes for sitemap
   * This is a starting point - can be expanded to dynamically generate
   * routes from the docs structure
   */
  getDocsRoutes(): SitemapUrl[] {
    const currentDate = new Date().toISOString().split('T')[0];

    return [
      // Main docs sections
      {
        loc: '/docs',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        loc: '/docs/guides',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/docs/api',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/docs/packages',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/docs/design',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
      },
      // Add more specific doc routes as needed
    ];
  }

  /**
   * In a more advanced implementation, this could:
   * 1. Read the docs structure from the file system
   * 2. Parse guide index files
   * 3. Query API documentation
   * 4. Generate sitemap entries dynamically
   */
}
