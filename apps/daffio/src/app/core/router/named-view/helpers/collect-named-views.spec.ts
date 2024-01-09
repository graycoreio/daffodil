import { daffioRouterNamedViewsCollect } from './collect-named-views';
import { ActivatedRouteSnapshotWithNamedViews } from '../models/activated-route.type';

class TestClass {}

describe('daffioRouterNamedViewsCollect', () => {
  let route: ActivatedRouteSnapshotWithNamedViews;

  beforeEach(() => {
    route = <ActivatedRouteSnapshotWithNamedViews><unknown>{
      data: {
        namedViews: {
          root: TestClass,
        },
      },
      children: [
        <ActivatedRouteSnapshotWithNamedViews><unknown>{
          data: {
            namedViews: {
              '00': TestClass,
            },
          },
          children: [
            <ActivatedRouteSnapshotWithNamedViews><unknown>{
              data: {
                namedViews: {
                  10: TestClass,
                },
              },
              children: [],
            },
            <ActivatedRouteSnapshotWithNamedViews><unknown>{
              data: {
                namedViews: {
                  11: TestClass,
                },
              },
              children: [
                <ActivatedRouteSnapshotWithNamedViews><unknown>{
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
        <ActivatedRouteSnapshotWithNamedViews><unknown>{
          data: {
            namedViews: {
              '01': TestClass,
            },
          },
          children: [],
        },
      ],
    };
  });

  it('should collect all the named views and combine them into a single dict', () => {
    const result = daffioRouterNamedViewsCollect(route);

    expect(result.root).toBeDefined();
    expect(result['00']).toBeDefined();
    expect(result['01']).toBeDefined();
    expect(result[10]).toBeDefined();
    expect(result[11]).toBeDefined();
    expect(result[20]).toBeDefined();
  });
});
