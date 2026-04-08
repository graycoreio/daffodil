import { daffCreateableMostRecent } from './most-recent';
import { DaffCreateable } from './type';

describe('@daffodil/core | daffCreateableMostRecent', () => {
  let oldT: DaffCreateable;
  let newT: DaffCreateable;

  beforeEach(() => {
    oldT = {
      createdAt: new Date('1999').toDateString(),
    };
    newT = {
      createdAt: new Date('2020').toDateString(),
    };
  });

  it('should return the most recently created entity', () => {
    expect(daffCreateableMostRecent([oldT, newT])).toEqual(newT);
  });
});
