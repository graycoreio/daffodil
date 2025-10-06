# Daffio Sitemap Generation

This directory contains the build-time script for generating the sitemap for the daffio application.

## Overview

The sitemap is **statically generated** at build time using a Node.js script. This approach provides:
- ✅ Zero runtime overhead (no server-side generation)
- ✅ Simple maintenance and updates
- ✅ Fast serving as a static asset
- ✅ No additional dependencies required

## How It Works

### Build-Time Generation

The sitemap is automatically generated before each build via a `prebuild` npm script:

```json
{
  "scripts": {
    "generate:sitemap": "node scripts/generate-sitemap.js",
    "prebuild": "npm run generate:sitemap",
    "build": "ng build daffio --configuration production"
  }
}
```

**Flow:**
1. Run `npm run build` or `nx build daffio`
2. `prebuild` hook triggers `generate:sitemap`
3. Script generates `src/assets/sitemap.xml`
4. Angular build includes sitemap in output
5. Final sitemap available at `/sitemap.xml`

### Script: `generate-sitemap.js`

**Location:** `apps/daffio/scripts/generate-sitemap.js`

**What it does:**
- Generates XML sitemap following [sitemaps.org protocol](https://www.sitemaps.org/protocol.html)
- Includes static routes (homepage, why-pwa, support)
- Includes documentation routes (docs sections)
- Outputs to `apps/daffio/src/assets/sitemap.xml`
- Uses base URL: `https://next.daff.io`

## Current Sitemap Structure

### Static Routes (3)
```
/ (priority: 1.0, weekly)
/why-pwa (priority: 0.8, monthly)
/support (priority: 0.7, monthly)
```

### Documentation Routes (5)
```
/docs (priority: 0.9, weekly)
/docs/guides (priority: 0.8, weekly)
/docs/api (priority: 0.8, weekly)
/docs/packages (priority: 0.8, weekly)
/docs/design (priority: 0.8, weekly)
```

**Total URLs:** 8

## Adding New Routes

To add new routes to the sitemap, edit `generate-sitemap.js`:

### Add Static Route

```javascript
const staticUrls = [
  // ...existing routes
  { 
    loc: '/new-page', 
    lastmod: currentDate, 
    changefreq: 'monthly', 
    priority: 0.8 
  },
];
```

### Add Documentation Route

```javascript
const docUrls = [
  // ...existing routes
  { 
    loc: '/docs/new-section', 
    lastmod: currentDate, 
    changefreq: 'weekly', 
    priority: 0.8 
  },
];
```

### URL Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| `loc` | string | Relative path | `'/docs/api'` |
| `lastmod` | string | ISO 8601 date | `'2025-10-06'` |
| `changefreq` | string | Update frequency | `'weekly'`, `'monthly'`, `'yearly'` |
| `priority` | number | Relative priority (0.0-1.0) | `0.8` |

### Priority Guidelines
- **1.0**: Homepage, most critical pages
- **0.8-0.9**: Important features, main documentation
- **0.6-0.7**: Secondary pages, support pages
- **0.4-0.5**: Less important content

### Change Frequency Guidelines
- **daily/weekly**: Frequently updated (homepage, active docs)
- **monthly**: Regularly updated (feature pages, guides)
- **yearly**: Rarely updated (about, static pages)

## Manual Generation

Generate the sitemap without building:

```bash
# From daffio directory
npm run generate:sitemap

# From root directory
cd apps/daffio && npm run generate:sitemap
```

Output: `apps/daffio/src/assets/sitemap.xml`

## Testing

### Local Testing

```bash
# Generate sitemap
npm run generate:sitemap

# Verify output
cat src/assets/sitemap.xml

# Build and serve
npm run build
npm run serve:ssr

# Test in browser or curl
curl http://localhost:4000/sitemap.xml
```

### Validate XML

Use online validators:
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Google Search Console](https://search.google.com/search-console)

### Check Output

The generated XML should look like:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://next.daff.io/</loc>
    <lastmod>2025-10-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- more URLs... -->
</urlset>
```

## Related Files

```
apps/daffio/
├── scripts/
│   ├── generate-sitemap.js      # Sitemap generator script
│   └── README.md                 # This file
├── src/
│   ├── assets/
│   │   └── sitemap.xml          # Generated sitemap (output)
│   ├── robots.txt               # Robots.txt with sitemap reference
│   └── index.html               # Includes sitemap meta tag
└── package.json                 # Scripts configuration
```

### HTML Meta Tag
```html
<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
```

### Footer Link
The sitemap is also linked in the footer for user accessibility.