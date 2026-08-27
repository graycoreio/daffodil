
import { DaffJson } from './daff-json.type';
import { syncProjects } from './sync-projects';

const mockPackages = {
  magento: {
    'some-package': [<const>'2.4.5'],
  },
};

const buildWorkspace = (projectName: string) => {
  const targets = new Map([['build', { options: <Record<string, any>>{}}]]);
  const projects = new Map([[projectName, { targets }]]);
  return <any>{ projects };
};

describe('@daffodil/commerce/versioning | syncProjects', () => {
  const projectName = 'app';

  it('writes the magento condition derived from daff.json', () => {
    const angular = buildWorkspace(projectName);
    const daff: DaffJson = { drivers: { magento: '2.4.5' }};

    syncProjects(daff, { name: 'name', angular: angular.projects.get(projectName) }, mockPackages);

    expect(angular.projects.get(projectName).targets.get('build').options.conditions).toEqual(['some-package-magento-2.4.5']);
  });

  it('overwrites an existing conditions array', () => {
    const angular = buildWorkspace(projectName);
    angular.projects.get(projectName).targets.get('build').options.conditions = ['magento-2.4.1', 'some-other-condition'];
    const daff: DaffJson = { drivers: { magento: '2.4.5' }};

    syncProjects(daff, { name: 'name', angular: angular.projects.get(projectName) }, mockPackages);

    expect(angular.projects.get(projectName).targets.get('build').options.conditions).toEqual(['some-package-magento-2.4.5']);
  });

  it('throws when a project is missing a driver version', () => {
    const angular = buildWorkspace(projectName);
    const daff: DaffJson = { drivers: { magento: <any>'' }};

    expect(() => syncProjects(daff, { name: 'name', angular: angular.projects.get(projectName) }, mockPackages)).toThrowError(/missing a driver version/);
  });

  it('throws when the project has no build target', () => {
    const projects = new Map([[projectName, { targets: new Map() }]]);
    const angular = <any>{ projects };
    const daff: DaffJson = { drivers: { magento: '2.4.5' }};

    expect(() => syncProjects(daff, { name: 'name', angular: angular.projects.get(projectName) }, mockPackages)).toThrowError(/Build configuration not found/);
  });
});
