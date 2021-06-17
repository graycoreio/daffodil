import { Dict } from '../types/dict.type';
import { daffIdentifiableArrayToDict } from './array-to-dict';
import { DaffIdentifiable } from './identifiable.interface';

describe('@daffodil/core | daffIdentifiableArrayToDict', () => {
  let items: DaffIdentifiable[];
  let result: Dict<DaffIdentifiable>;

  beforeEach(() => {
    items = [
      { id: '0' },
      { id: '1' },
      { id: '2' },
    ];

    result = daffIdentifiableArrayToDict(items);
  });

  it('should transform the array to a dict keyed by ID', () => {
    items.forEach(e => {
      expect(result[e.id]).toEqual(e);
    });
  });
});
