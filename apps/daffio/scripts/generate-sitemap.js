import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  const baseUrl = 'https://next.daff.io';

  // Static routes
  const staticUrls = [
    { loc: '/', lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
    { loc: '/why-pwa', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/support', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
  ];

  // Documentation routes
  const docUrls = [
    { loc: '/docs', lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: '/docs/guides', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { loc: '/docs/api', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { loc: '/docs/packages', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { loc: '/docs/design', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
  ];

  const urls = [...staticUrls, ...docUrls];

  const urlEntries = urls
    .map(url => {
      const lastmod = `\n    <lastmod>${url.lastmod}</lastmod>`;
      const changefreq = `\n    <changefreq>${url.changefreq}</changefreq>`;
      const priority = `\n    <priority>${url.priority}</priority>`;

      return `  <url>
    <loc>${baseUrl}${url.loc}</loc>${lastmod}${changefreq}${priority}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Generate and write sitemap
const sitemap = generateSitemap();
const outputPath = join(__dirname, '../src/assets/sitemap.xml');

writeFileSync(outputPath, sitemap, 'utf-8');
console.log('Sitemap generated successfully at:', outputPath);