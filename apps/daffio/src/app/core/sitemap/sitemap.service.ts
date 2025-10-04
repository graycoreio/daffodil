import { Injectable } from '@angular/core';

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

@Injectable({
  providedIn: 'root',
})
export class DaffioSitemapService {
  private readonly baseUrl = 'https://next.daff.io';

  /**
   * Generates sitemap XML content
   */
  generateSitemap(urls: SitemapUrl[]): string {
    const urlEntries = urls
      .map(url => this.createUrlEntry(url))
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
  }

  /**
   * Creates a single URL entry for the sitemap
   */
  private createUrlEntry(url: SitemapUrl): string {
    const lastmod = url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : '';
    const changefreq = url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : '';
    const priority = url.priority !== undefined ? `\n    <priority>${url.priority}</priority>` : '';

    return `  <url>
    <loc>${this.baseUrl}${url.loc}</loc>${lastmod}${changefreq}${priority}
  </url>`;
  }

  /**
   * Gets all static routes for the application
   */
  getStaticRoutes(): SitemapUrl[] {
    const currentDate = new Date().toISOString().split('T')[0];

    return [
      {
        loc: '/',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 1.0,
      },
      {
        loc: '/why-pwa',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: '/support',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/docs',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.9,
      },
      // Add more static routes as needed
    ];
  }
}
