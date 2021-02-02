import { ActivatedRouteSnapshot } from '@angular/router';

import { computeDeepestSidebarMode } from './computeDeepestSidebarMode';

describe('computeDeepestSidebarMode', () => {
  it('should compute the deepest `sidebarMode` of an ActivatedRouteSnapshot tree', () => {
    const tree = <ActivatedRouteSnapshot><unknown>{
      data: { sidebarMode: 'other' },
      firstChild: {
        data: {
          sidebarMode: 'push',
        },
      },
    };

    expect(computeDeepestSidebarMode(tree)).toEqual('push');
  });

  it('should return undefined if there are no `sidebarMode`s in the tree', () => {
    const tree = <ActivatedRouteSnapshot><unknown>{ data: {}, firstChild: { data: { }}};
    expect(computeDeepestSidebarMode(tree)).toEqual(undefined);
  });
});
