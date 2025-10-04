import { TestBed } from '@angular/core/testing';

import { DaffioSitemapService } from './sitemap.service';

describe('DaffioSitemapService', () => {
  let service: DaffioSitemapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaffioSitemapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateSitemap', () => {
    it('should generate valid sitemap XML', () => {
      const urls = [
        {
          loc: '/',
          lastmod: '2025-10-03',
          changefreq: 'weekly' as const,
          priority: 1.0,
        },
        {
          loc: '/docs',
          changefreq: 'monthly' as const,
          priority: 0.8,
        },
      ];

      const sitemap = service.generateSitemap(urls);

      expect(sitemap).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(sitemap).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
      expect(sitemap).toContain('<loc>https://next.daff.io</loc>');
      expect(sitemap).toContain('<lastmod>2025-10-03</lastmod>');
      expect(sitemap).toContain('<changefreq>weekly</changefreq>');
      expect(sitemap).toContain('<priority>1.0</priority>');
      expect(sitemap).toContain('<loc>https://next.daff.io/docs</loc>');
      expect(sitemap).toContain('</urlset>');
    });
  });

  describe('getStaticRoutes', () => {
    it('should return an array of static routes', () => {
      const routes = service.getStaticRoutes();

      expect(Array.isArray(routes)).toBe(true);
      expect(routes.length).toBeGreaterThan(0);
      expect(routes[0].loc).toBeDefined();
    });

    it('should include home page', () => {
      const routes = service.getStaticRoutes();
      const homePage = routes.find(route => route.loc === '/');

      expect(homePage).toBeDefined();
      expect(homePage?.priority).toBe(1.0);
    });
  });
});
