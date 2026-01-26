import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
} from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import {
  readFile,
  writeFile,
} from 'node:fs/promises';
import {
  resolve,
  join,
} from 'node:path';
import { create } from 'xmlbuilder2';

const PROJECT_ROOT = resolve(__dirname, '../../../..');

interface RoutesSitemap extends JsonObject {
  routes: string;
}

interface PrerenderedRoutesSitemap extends JsonObject {
  prerenderedRoutes: string;
}

interface Options extends JsonObject {
  sitemaps: Record<string, RoutesSitemap | PrerenderedRoutesSitemap>;
  output: string;
  domain: string;
  baseUrl: string;
}

const success = () => ({ success: true });
const failure = error => ({
  success: false,
  error,
});

const createSitemapIndex = (sitemaps: Array<string>, base: string) => sitemaps.reduce(
  (acc, sitemap) =>
    acc.ele('sitemap')
      .ele('loc').txt(`${base}/${sitemap}.xml`).up()
      .up(),
  create({ version: '1.0', encoding: 'UTF-8' }).ele('sitemapindex', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' }),
).end({ prettyPrint: true });

const createSitemap = (paths: Array<string>, base: string) => paths.reduce(
  (acc, path) =>
    acc.ele('url')
      .ele('loc').txt(`${base}${path}`).up()
      // .ele('lastmod').txt(path).up()
      .ele('changefreq').txt('monthly').up()
      .up(),
  create({ version: '1.0' }).ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' }),
).end({ prettyPrint: true });

export default createBuilder(async (
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> => {
  context.reportRunning();
  const base = `${options.domain}${options.baseUrl || ''}`;
  for (const name in options.sitemaps) {
    if (!Object.hasOwn(options.sitemaps, name)) {
      continue;
    }

    const sitemap = options.sitemaps[name];
    if ('prerenderedRoutes' in sitemap) {
      try {
        const routes = Object.keys(JSON.parse(await readFile(join(PROJECT_ROOT, <string>sitemap.prerenderedRoutes), 'utf-8')).routes);
        const outputPath = join(PROJECT_ROOT, options.output, `${name}.xml`);
        context.reportStatus(`Found ${routes.length} routes for ${name} sitemap`);
        await writeFile(outputPath, createSitemap(routes, base));
        context.reportStatus(`Wrote ${name} sitemap to disk at ${outputPath}`);
      } catch (error) {
        return failure(error.toString());
      }
    } else {
      try {
        const file = await readFile(join(PROJECT_ROOT, sitemap.routes), 'utf-8');
        const routes = file.split('\n').filter(route => route.trim().length > 0);
        const outputPath = join(PROJECT_ROOT, options.output, `${name}.xml`);
        context.reportStatus(`Found ${routes.length} routes for ${name} sitemap`);
        await writeFile(outputPath, createSitemap(routes, base));
        context.reportStatus(`Wrote ${name} sitemap to disk at ${outputPath}`);
      } catch (error) {
        return failure(error.toString());
      }
    }
  }
  const output = join(PROJECT_ROOT, options.output, 'sitemap.xml');
  await writeFile(output, createSitemapIndex(Object.keys(options.sitemaps), base));
  context.reportStatus(`Wrote sitemap index to disk at ${output}`);

  return success();
});
