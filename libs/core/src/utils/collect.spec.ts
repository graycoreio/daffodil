import { collect } from './collect';

interface Type {
  children?: Type[];
}

const getChildren = (obj: Type) => obj?.children || [];

describe('@daffodil/core | collect', () => {
  let root: Type;
  let obj00: Type;
  let obj01: Type;
  let obj10: Type;
  let obj11: Type;
  let obj20: Type;
  let obj21: Type;
  let obj30: Type;
  let obj31: Type;
  let result: Type[];

  beforeEach(() => {
    obj30 = {};
    obj31 = {};
    obj20 = {};
    obj21 = {
      children: [obj30, obj31],
    };
    obj10 = {
      children: [obj20],
    };
    obj11 = {
      children: [obj21],
    };
    obj00 = {
      children: [obj10, obj11],
    };
    obj01 = {};
    root = {
      children: [obj00, obj01],
    };
  });

  describe('when depth is not specified', () => {
    beforeEach(() => {
      result = collect(root, getChildren);
    });

    it('should return the root and all children', () => {
      expect(result).toContain(root);
      expect(result).toContain(obj00);
      expect(result).toContain(obj01);
      expect(result).toContain(obj10);
      expect(result).toContain(obj11);
      expect(result).toContain(obj20);
      expect(result).toContain(obj21);
      expect(result).toContain(obj30);
      expect(result).toContain(obj31);
    });
  });

  describe('when depth is equal to the depth of the tree', () => {
    beforeEach(() => {
      result = collect(root, getChildren, 3);
    });

    it('should return the root and all children', () => {
      expect(result).toContain(root);
      expect(result).toContain(obj00);
      expect(result).toContain(obj01);
      expect(result).toContain(obj10);
      expect(result).toContain(obj11);
      expect(result).toContain(obj20);
      expect(result).toContain(obj21);
      expect(result).toContain(obj30);
      expect(result).toContain(obj31);
    });
  });

  describe('when depth is more than the depth of the tree', () => {
    beforeEach(() => {
      result = collect(root, getChildren, 5);
    });

    it('should return the root and all children', () => {
      expect(result).toContain(root);
      expect(result).toContain(obj00);
      expect(result).toContain(obj01);
      expect(result).toContain(obj10);
      expect(result).toContain(obj11);
      expect(result).toContain(obj20);
      expect(result).toContain(obj21);
      expect(result).toContain(obj30);
      expect(result).toContain(obj31);
    });
  });

  describe('when depth is less than the depth of the tree', () => {
    beforeEach(() => {
      result = collect(root, getChildren, 2);
    });

    it('should return the root and all children up to the specified depth', () => {
      expect(result).toContain(root);
      expect(result).toContain(obj00);
      expect(result).toContain(obj01);
      expect(result).toContain(obj10);
      expect(result).toContain(obj11);
      expect(result).toContain(obj20);
      expect(result).toContain(obj21);
    });

    describe('and there is a circular reference', () => {
      beforeEach(() => {
        obj00.children = [...obj00.children, root];
        result = collect(root, getChildren, 2);
      });

      it('should return the root and all children up to the specified depth and should not infinitely recurse', () => {
        expect(result).toContain(root);
        expect(result).toContain(obj00);
        expect(result).toContain(obj01);
        expect(result).toContain(obj10);
        expect(result).toContain(obj11);
        expect(result).toContain(obj20);
        expect(result).toContain(obj21);
      });
    });
  });
});
