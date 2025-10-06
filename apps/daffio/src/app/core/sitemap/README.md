# Daffio Sitemap Module

This module provides sitemap generation functionality for the daffio application to improve SEO and search engine discoverability.

## Overview

The sitemap module generates XML sitemaps following the [sitemaps.org protocol](https://www.sitemaps.org/protocol.html) specification. It includes both static routes and extensible documentation routes.

## Services

### DaffioSitemapService

Core service for generating sitemap XML content.

**Key Features:**
- Generates XML sitemap following sitemaps.org protocol
- Configurable base URL (`https://next.daff.io`)
- Supports metadata: `lastmod`, `changefreq`, `priority`
- Manages static application routes

**Usage:**

```typescript
import { DaffioSitemapService } from './sitemap.service';

const sitemapService = inject(DaffioSitemapService);

// Get static routes
const routes = sitemapService.getStaticRoutes();

// Generate sitemap XML
const xml = sitemapService.generateSitemap(routes);
```

### DaffioDocsSitemapService

Extension service for managing documentation routes in the sitemap.

**Key Features:**
- Manages documentation section URLs
- Provides extensible structure for adding more doc pages
- Follows same metadata conventions as static routes

**Usage:**

```typescript
import { DaffioDocsSitemapService } from './docs-sitemap.service';

const docsSitemapService = inject(DaffioDocsSitemapService);

// Get documentation routes
const docRoutes = docsSitemapService.getDocsRoutes();
```

## URL Configuration

### SitemapUrl Interface

```typescript
interface SitemapUrl {
  loc: string;                    // Relative path (e.g., '/', '/docs')
  lastmod?: string;               // ISO 8601 date (e.g., '2025-10-03')
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;              // 0.0 to 1.0
}
```

### Current Routes

**Static Routes (via DaffioSitemapService):**
- `/` - Homepage (priority: 1.0, weekly)
- `/why-pwa` - Why PWA page (priority: 0.8, monthly)
- `/support` - Support page (priority: 0.7, monthly)
- `/docs` - Documentation landing (priority: 0.9, weekly)

**Documentation Routes (via DaffioDocsSitemapService):**
- `/docs/getting-started` (priority: 0.9, weekly)
- `/docs/installation` (priority: 0.9, weekly)
- `/docs/guides` (priority: 0.8, weekly)
- `/docs/api` (priority: 0.8, monthly)

## Server Integration

The sitemap is served via the Express SSR server at `/sitemap.xml`:

```typescript
// In apps/daffio/server/server.ts
import { DaffioSitemapService, DaffioDocsSitemapService } from '../src/app/core/sitemap';

app.get('/sitemap.xml', (req, res) => {
  const sitemapService = new DaffioSitemapService();
  const docsSitemapService = new DaffioDocsSitemapService();
  
  const staticRoutes = sitemapService.getStaticRoutes();
  const docRoutes = docsSitemapService.getDocsRoutes();
  const allRoutes = [...staticRoutes, ...docRoutes];
  
  const xml = sitemapService.generateSitemap(allRoutes);
  
  res.header('Content-Type', 'application/xml');
  res.send(xml);
});
```

## Development vs Production

### Production (SSR Server - Port 4000)
- Sitemap dynamically generated at `/sitemap.xml`
- Run with: `npm run build:ssr && npm run serve:ssr`
- Access: `http://localhost:4000/sitemap.xml`

### Development (Dev Server - Port 4200)
- Static sitemap available at `/assets/sitemap.xml`
- Run with: `npm run dev:ssr`
- Access: `http://localhost:4200/assets/sitemap.xml`

## Adding New Routes

### Static Routes

Update `DaffioSitemapService.getStaticRoutes()`:

```typescript
getStaticRoutes(): SitemapUrl[] {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return [
    // ...existing routes
    {
      loc: '/new-page',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
    },
  ];
}
```

### Documentation Routes

Update `DaffioDocsSitemapService.getDocsRoutes()`:

```typescript
getDocsRoutes(): SitemapUrl[] {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return [
    // ...existing routes
    {
      loc: '/docs/new-section',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
    },
  ];
}
```

## SEO Files

```
User-agent: *
Allow: /

Sitemap: https://next.daff.io/sitemap.xml
```

### HTML Meta Tag

Added to `apps/daffio/src/index.html`:

```html
<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
```

## Testing

Run the test suite:

```bash
npm test apps/daffio
```

Test the sitemap manually:

```bash
# Build and serve SSR
npm run build:ssr
npm run serve:ssr

# In another terminal
curl http://localhost:4000/sitemap.xml
```

## Deployment Checklist

After deploying to production:

1. ✅ Verify sitemap is accessible at `https://next.daff.io/sitemap.xml`
3. ✅ Submit sitemap to [Google Search Console](https://search.google.com/search-console)
4. ✅ Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
5. ✅ Monitor indexing status in search console

## Best Practices

### Priority Guidelines
- **1.0**: Homepage, most important pages
- **0.8-0.9**: Key features, main documentation
- **0.6-0.7**: Secondary pages, support pages
- **0.4-0.5**: Less important content

### Change Frequency Guidelines
- **daily/weekly**: Frequently updated content (homepage, active docs)
- **monthly**: Regularly updated content (feature pages)
- **yearly**: Rarely updated content (about, contact)

### Last Modified
- Update `lastmod` when page content changes
- Use ISO 8601 format: `YYYY-MM-DD`
- Consider automating based on file modification dates

## Troubleshooting

### Sitemap not accessible in development
- Development server serves static assets from `/assets`
- Access sitemap at `/assets/sitemap.xml` in dev mode
- For dynamic sitemap, use SSR build: `npm run build:ssr && npm run serve:ssr`

### Sitemap shows wrong base URL
- Update `baseUrl` in `DaffioSitemapService`
- Currently set to `https://next.daff.io`
- Rebuild after changing

### XML validation errors
- Verify all URLs are properly escaped
- Check that XML structure follows sitemaps.org protocol
- Use online validators: [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

## References

- [Sitemaps.org Protocol](https://www.sitemaps.org/protocol.html)
- [Google Sitemap Guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Bing Sitemap Guidelines](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed)

## Future Enhancements

- [ ] Dynamic route generation from file system
- [ ] Automatic `lastmod` based on git commit dates
- [ ] Sitemap index for large sites (>50,000 URLs)
- [ ] Image sitemap for product images
- [ ] News sitemap for blog posts
- [ ] Multilingual sitemap support