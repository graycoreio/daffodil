import {
  Observable,
  of,
} from 'rxjs';

import { latest } from './latest';

describe('@daffodil/core/state | latest', () => {
  let ob: Observable<number>;
  let result: Observable<number>;

  describe('when an observable emitting many values is passed', () => {
    beforeEach(() => {
      ob = of(0, 1, 2, 3);
      result = latest(ob);
    });

    it('should emit the last value', (done) => {
      result.subscribe(val => {
        expect(val).toEqual(3);
        done();
      });
    });
  });

  describe('when an observable emitting one value is passed', () => {
    beforeEach(() => {
      ob = of(0);
      result = latest(ob);
    });

    it('should emit that value', (done) => {
      result.subscribe(val => {
        expect(val).toEqual(0);
        done();
      });
    });
  });
});
