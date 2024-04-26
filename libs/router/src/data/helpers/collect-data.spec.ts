import { ActivatedRouteSnapshot } from '@angular/router';

import { daffRouterDataCollect } from './collect-data';

describe('@daffodil/router | daffRouterDataCollect', () => {
  let route: ActivatedRouteSnapshot;
  let result: any;

  beforeEach(() => {
    route = <ActivatedRouteSnapshot><unknown>{
      data: {
        root: 'TestClass',
        overwrite: 'TestClass',
      },
      children: [
        <ActivatedRouteSnapshot><unknown>{
          data: {
            '00': 'TestClass',
          },
          children: [
            <ActivatedRouteSnapshot><unknown>{
              data: {
                10: 'TestClass',
              },
              children: [],
            },
            <ActivatedRouteSnapshot><unknown>{
              data: {
                11: 'TestClass',
                overwrite: 'TestClass1',
              },
              children: [
                <ActivatedRouteSnapshot><unknown>{
                  data: {
                    20: 'TestClass',
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        <ActivatedRouteSnapshot><unknown>{
          data: {
            '01': 'TestClass',
          },
          children: [],
        },
      ],
    };

    result = daffRouterDataCollect(route);
  });

  it('should collect all the named views and combine them into a single dict', () => {
    expect(result['root']).toBeDefined();
    expect(result['00']).toBeDefined();
    expect(result['01']).toBeDefined();
    expect(result[10]).toBeDefined();
    expect(result[11]).toBeDefined();
    expect(result[20]).toBeDefined();
    expect(result['overwrite']).toBeDefined();
  });

  it('should give precedence to more deeply nested routes when there is a collision', () => {
    expect(result['overwrite']).toEqual('TestClass1');
  });
});
