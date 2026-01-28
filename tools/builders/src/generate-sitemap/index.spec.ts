import { Architect } from '@angular-devkit/architect';
import { TestingArchitectHost } from '@angular-devkit/architect/testing';
import { schema } from '@angular-devkit/core';
import { promises as fs } from 'fs';
import { join } from 'path';

const WORKSPACE_ROOT = join(__dirname, '..', '..', '..', '..');

describe('@daffodil/builders | generateSitemap', () => {
  let architect: Architect;
  let architectHost: TestingArchitectHost;

  beforeEach(async () => {
    const registry = new schema.CoreSchemaRegistry();
    registry.addPostTransform(schema.transforms.addUndefinedDefaults);
    // TestingArchitectHost() takes workspace and current directories.
    // Since we don't use those, both are the same in this case.
    architectHost = new TestingArchitectHost(WORKSPACE_ROOT);
    architect = new Architect(architectHost, registry);
    // This will either take a Node package name, or a path to the directory
    // for the package.json file.
    await architectHost.addBuilderFromPackage(join(WORKSPACE_ROOT, 'dist', 'builders'));
  });

  it('processes multiple sitemaps', async () => {
    const options = {
      domain: 'https://domain.test',
      output: 'tmp/builders/test-output',
      sitemaps: {
        'dynamic-sitemap': {
          routes: 'tools/builders/src/generate-sitemap/test-data/dynamic.txt',
        },
        'static-sitemap': {
          prerenderedRoutes: 'tools/builders/src/generate-sitemap/test-data/static.json',
        },
      },
    };
    // A "run" can have multiple outputs, and contains progress information.
    const run = await architect.scheduleBuilder('@daffodil/builders:generateSitemap', options);
    // The "result" member (of type BuilderOutput) is the next output.
    const output = await run.result;
    // Stop the builder from running. This stops Architect from keeping
    // the builder-associated states in memory, since builders keep waiting
    // to be scheduled.
    await run.stop();
    // Expect that the copied file is the same as its source.
    const sitemapIndex = await fs.readFile(join(WORKSPACE_ROOT, options.output, 'sitemap.xml'), 'utf8');
    const sitemapIndexGolden = await fs.readFile(join(__dirname, 'test-data', 'goldens', 'sitemap.xml'), 'utf8');
    const dynamicSitemap = await fs.readFile(join(WORKSPACE_ROOT, options.output, 'dynamic-sitemap.xml'), 'utf8');
    const dynamicSitemapGolden = await fs.readFile(join(__dirname, 'test-data', 'goldens', 'dynamic-sitemap.xml'), 'utf8');
    const staticSitemap = await fs.readFile(join(WORKSPACE_ROOT, options.output, 'static-sitemap.xml'), 'utf8');
    const staticSitemapGolden = await fs.readFile(join(__dirname, 'test-data', 'goldens', 'static-sitemap.xml'), 'utf8');
    expect(sitemapIndex).toEqual(sitemapIndexGolden);
    expect(dynamicSitemap).toEqual(dynamicSitemapGolden);
    expect(staticSitemap).toEqual(staticSitemapGolden);
  });
});
