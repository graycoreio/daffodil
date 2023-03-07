import { shallowCompare } from './shallow-compare';

interface Test {
  str?: string;
  num?: number;
}

describe('@daffodil/core | shallowCompare', () => {
  let obj1: Test;
  let obj2: Test;
  let props: (keyof Test)[];
  let result: boolean;

  describe('when one of the objects is nully', () => {
    beforeEach(() => {
      obj1 = {
        str: 'str',
        num: 5,
      };
      obj2 = null;
      props = [
        'str',
        'num',
      ];
      result = shallowCompare(obj1, obj2, props);
    });

    it('should return false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when both of the objects are nully', () => {
    beforeEach(() => {
      obj1 = undefined;
      obj2 = null;
      props = [
        'str',
        'num',
      ];
      result = shallowCompare(obj1, obj2, props);
    });

    it('should return false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when the objects have truthy values but are not equal', () => {
    beforeEach(() => {
      obj1 = {
        str: 'str',
        num: 5,
      };
      obj2  = {
        str: 'str',
        num: 6,
      };
      props = [
        'str',
        'num',
      ];
      result = shallowCompare(obj1, obj2, props);
    });

    it('should return false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when the objects are not fully equal but equal over the list of props', () => {
    beforeEach(() => {
      obj1 = {
        str: 'str',
        num: 5,
      };
      obj2 = {
        str: 'str',
        num: 6,
      };
      props = [
        'str',
      ];
      result = shallowCompare(obj1, obj2, props);
    });

    it('should return true', () => {
      expect(result).toBeTrue();
    });
  });

  describe('when the objects are equal with truthy values', () => {
    beforeEach(() => {
      obj1 = {
        str: 'str',
        num: 5,
      };
      obj2 = {
        str: 'str',
        num: 5,
      };
      props = [
        'str',
        'num',
      ];
      result = shallowCompare(obj1, obj2, props);
    });

    it('should return true', () => {
      expect(result).toBeTrue();
    });
  });

  describe('when the objects are equal with some nully values', () => {
    beforeEach(() => {
      obj1 = {
        str: undefined,
        num: 5,
      };
      obj2 = {
        str: null,
        num: 5,
      };
      props = [
        'str',
        'num',
      ];
      result = shallowCompare(obj1, obj2, props);
    });

    it('should return true', () => {
      expect(result).toBeTrue();
    });
  });

  describe('when the type is a union type', () => {
    it('should compile without a type error for keys that may or may not be on the type', () => {
      interface A { a?: string; c: string };
      interface B { b?: string; c: string };
      type UserUnion = A | B;
      const exampleB: () => UserUnion = () => ({ b: '', c: '' });
      const exampleA: () => UserUnion = () => ({ a: '', c: '' });
      shallowCompare(exampleB(), exampleA(), ['a','b']);
      expect(shallowCompare(exampleB(), exampleA(), ['a','b'])).toBe(false);
    });
  });
});
