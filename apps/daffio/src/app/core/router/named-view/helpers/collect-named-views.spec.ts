import { routerNamedViewsCollect } from './collect-named-views';
import { DaffActivatedRouteSnapshotWithNamedViews } from '../models/activated-route-snapshot.type';
import { DaffRouterNamedViews } from '../models/named-views.type';

class TestClass {}
class TestClass1 {}

describe('routerNamedViewsCollect', () => {
  let route: DaffActivatedRouteSnapshotWithNamedViews;
  let result: DaffRouterNamedViews;

  beforeEach(() => {
    route = <DaffActivatedRouteSnapshotWithNamedViews><unknown>{
      data: {
        namedViews: {
          root: TestClass,
          overwrite: TestClass,
        },
      },
      children: [
        <DaffActivatedRouteSnapshotWithNamedViews><unknown>{
          data: {
            namedViews: {
              '00': TestClass,
            },
          },
          children: [
            <DaffActivatedRouteSnapshotWithNamedViews><unknown>{
              data: {
                namedViews: {
                  10: TestClass,
                },
              },
              children: [],
            },
            <DaffActivatedRouteSnapshotWithNamedViews><unknown>{
              data: {
                namedViews: {
                  11: TestClass,
                  overwrite: TestClass1,
                },
              },
              children: [
                <DaffActivatedRouteSnapshotWithNamedViews><unknown>{
                  data: {
                    namedViews: {
                      20: TestClass,
                    },
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        <DaffActivatedRouteSnapshotWithNamedViews><unknown>{
          data: {
            namedViews: {
              '01': TestClass,
            },
          },
          children: [],
        },
      ],
    };

    result = routerNamedViewsCollect(route);
  });

  it('should collect all the named views and combine them into a single dict', () => {
    expect(result.root).toBeDefined();
    expect(result['00']).toBeDefined();
    expect(result['01']).toBeDefined();
    expect(result[10]).toBeDefined();
    expect(result[11]).toBeDefined();
    expect(result[20]).toBeDefined();
    expect(result.overwrite).toBeDefined();
  });

  it('should give precedence to more deeply nested routes when there is a collision', () => {
    expect(result.overwrite).toEqual(TestClass1);
  });
});
