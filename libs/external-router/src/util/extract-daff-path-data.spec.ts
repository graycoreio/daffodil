import { ActivatedRouteSnapshot } from '@angular/router';

import { daffExtractDaffPathData } from './extract-daff-path-data';

describe('@daffodil/external-router | daffExtractDaffPathData', () => {
  let snapshot: ActivatedRouteSnapshot;

  beforeEach(() => {
    snapshot = <ActivatedRouteSnapshot><unknown>{
      data: {
        daffPaths: {
          '00/01/02/10/11/12': {
            test: 'test',
          },
        },
      },
      pathFromRoot: [
        {
          url: [],
        },
        {
          url: [
            { path: '00' },
            { path: '01' },
            { path: '02' },
          ],
        },
        {
          url: [
            { path: '10' },
            { path: '11' },
            { path: '12' },
          ],
        },
        {
          url: [],
        },
      ],
    };
  });

  it('should return the correct data', () => {
    expect(daffExtractDaffPathData(snapshot, 'test')).toEqual('test');
  });
});
