import { DaffJsonProject } from './daff-json.type';
import { daffVersioningGetConditions } from './get-conditions';
import { DaffPackagePlatformVersions } from './packages.type';

describe('@daffodil/commerce/versioning | daffVersioningGetConditions', () => {
  it('returns a condition for each package supporting the driver version', () => {
    const daff: DaffJsonProject = { drivers: { magento: '2.4.5' }};
    const packages: DaffPackagePlatformVersions = {
      magento: {
        'some-package': [<const>'2.4.5'],
        'other-package': [<const>'2.4.5'],
      },
    };

    expect(daffVersioningGetConditions(daff, packages)).toEqual([
      'some-package-magento-2.4.5',
      'other-package-magento-2.4.5',
    ]);
  });

  it('ignores drivers with an undefined version', () => {
    const daff: DaffJsonProject = { drivers: { magento: undefined }};
    const packages: DaffPackagePlatformVersions = {
      magento: { 'some-package': [<const>'2.4.5']},
    };

    expect(daffVersioningGetConditions(daff, packages)).toEqual([]);
  });

  it('throws when a driver version is empty', () => {
    const daff: DaffJsonProject = { drivers: { magento: <any>'' }};

    expect(() => daffVersioningGetConditions(daff, {})).toThrowError(
      /Platform magento is missing a driver version; cannot sync\./,
    );
  });

  it('throws when a driver platform is unsupported', () => {
    const daff = <DaffJsonProject><unknown>{ drivers: { bogus: '1.0.0' }};

    expect(() => daffVersioningGetConditions(daff, {})).toThrowError(
      /bogus is unsupported\. Supported platforms are magento, shopify/,
    );
  });

  it('returns no conditions when packages has no entry for the platform', () => {
    const daff: DaffJsonProject = { drivers: { magento: '2.4.5' }};

    expect(daffVersioningGetConditions(daff, {})).toEqual([]);
  });

  it('skips packages that have no supported version and warns', () => {
    spyOn(console, 'warn');
    const daff: DaffJsonProject = { drivers: { magento: '2.4.5' }};
    const packages: DaffPackagePlatformVersions = {
      magento: { 'some-package': [<const>'2.4.6']},
    };

    expect(daffVersioningGetConditions(daff, packages)).toEqual([]);
    expect(console.warn).toHaveBeenCalledWith(
      jasmine.stringMatching('No supported magento version found for @daffodil/some-package'),
    );
  });

  it('does not build conditions for non-magento platforms', () => {
    const daff: DaffJsonProject = { drivers: { shopify: '1.0.0' }};
    const packages: DaffPackagePlatformVersions = {
      shopify: { 'some-package': [<const>'1.0.0']},
    };

    expect(daffVersioningGetConditions(daff, packages)).toEqual([]);
  });

  it('accumulates conditions across multiple platforms', () => {
    const daff: DaffJsonProject = { drivers: { magento: '2.4.5', shopify: '1.0.0' }};
    const packages: DaffPackagePlatformVersions = {
      magento: { 'some-package': [<const>'2.4.5']},
      shopify: { 'other-package': [<const>'1.0.0']},
    };

    expect(daffVersioningGetConditions(daff, packages)).toEqual([
      'some-package-magento-2.4.5',
    ]);
  });
});
