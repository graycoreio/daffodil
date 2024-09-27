import { walkUp } from './walk-up';
import { DaffTreeUi } from '../interfaces/tree-ui';

describe('@daffodil/design/tree - walkUp', () => {
  it('should walkup a tree, applying the visit function', () => {
    const root: DaffTreeUi<any> = {
      title: 'Root',
      url: '',
      id: 'root',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };

    const childA = {
      title: 'Child A',
      url: '',
      id: 'A',
      items: [],
      parent: undefined,
      open: false,
      data: {},
    };

    const childAa = {
      title: 'Child Aa',
      url: '',
      id: 'Aa',
      items: [],
      parent: undefined,
      open: false,
      data: {},
    };
    const childAaA = {
      title: 'Child AaA',
      url: '',
      id: 'AaA',
      items: [],
      parent: undefined,
      open: false,
      data: {},
    };
    const childAaAa = {
      title: 'Child AaAa',
      url: '',
      id: 'AaAa',
      items: [],
      parent: undefined,
      open: false,
      data: {},
    };

    const childB = {
      title: 'Child B',
      url: '',
      id: 'B',
      items: [],
      parent: undefined,
      open: false,
      data: {},
    };

    root.items = [childA];
    childA.parent = root;
    childA.items = [childAa];
    childAa.parent = childA;
    childAa.items = [childAaA];
    childAaA.parent = childAa;
    childAaA.items = [childAaAa];
    childAaAa.parent = childAaA;
    childB.parent = root;

    let count = 0;
    let path = '';

    walkUp(childAaAa,(node) => {
      count++;
      path = path + node.id;
      node.open = true;
      return node;
    });

    expect(count).toEqual(4);
    expect(path).toEqual('AaAaAaAAaA');
    expect(childAaAa.open).toEqual(true);
    expect(childAaA.open).toEqual(true);
    expect(childAa.open).toEqual(true);
    expect(childA.open).toEqual(true);
    expect(childB.open).toEqual(false);
  });
});
