import {
  buildPackageTable,
  replacePackageTable,
} from './package-table';

describe('buildPackageTable', () => {
  it('builds a row for each package, matching the README format byte-for-byte', () => {
    expect(buildPackageTable([{ name: '@daffodil/analytics' }])).toEqual([
      '<!-- AUTOGENERATE_PACKAGE_START -->',
      '| Package | Version | Stability |',
      '|---|---|---|',
      '| [@daffodil/analytics](/libs/analytics/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fanalytics/latest.svg)](https://npmjs.com/package/@daffodil/analytics) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)',
      '<!-- AUTOGENERATE_PACKAGE_END -->',
    ].join('\n'));
  });

  it('skips private packages', () => {
    const table = buildPackageTable([
      { name: '@daffodil/analytics' },
      { name: '@daffodil/secret', private: true },
      { name: '@daffodil/auth' },
    ]);

    expect(table).not.toContain('@daffodil/secret');
    expect(table).toContain('@daffodil/analytics');
    expect(table).toContain('@daffodil/auth');
  });

  it('preserves the order of the given packages', () => {
    const table = buildPackageTable([
      { name: '@daffodil/analytics' },
      { name: '@daffodil/auth' },
    ]);

    expect(table.indexOf('@daffodil/analytics')).toBeLessThan(table.indexOf('@daffodil/auth'));
  });

  it('builds an empty table when there are no packages', () => {
    expect(buildPackageTable([])).toEqual([
      '<!-- AUTOGENERATE_PACKAGE_START -->',
      '| Package | Version | Stability |',
      '|---|---|---|',
      '<!-- AUTOGENERATE_PACKAGE_END -->',
    ].join('\n'));
  });
});

describe('replacePackageTable', () => {
  const table = buildPackageTable([{ name: '@daffodil/analytics' }]);

  it('replaces the existing table between the markers', () => {
    const readme = [
      '# Daffodil',
      '<!-- AUTOGENERATE_PACKAGE_START -->',
      '| stale | content |',
      '<!-- AUTOGENERATE_PACKAGE_END -->',
      'Footer',
    ].join('\n');

    expect(replacePackageTable(readme, table)).toEqual(`# Daffodil\n${table}\nFooter`);
  });

  it('is idempotent', () => {
    const readme = `# Daffodil\n<!-- AUTOGENERATE_PACKAGE_START -->\nold\n<!-- AUTOGENERATE_PACKAGE_END -->\nFooter`;
    const once = replacePackageTable(readme, table);

    expect(replacePackageTable(once, table)).toEqual(once);
  });

  it('leaves a README without markers untouched', () => {
    const readme = '# Daffodil\nNo markers here.';

    expect(replacePackageTable(readme, table)).toEqual(readme);
  });
});
