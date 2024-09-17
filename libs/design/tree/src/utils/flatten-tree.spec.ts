import { flattenTree } from './flatten-tree';
import { hydrateTree } from './hydrate-tree';
import { DaffTreeUi } from '../interfaces/tree-ui';

describe('@daffodil/design/tree - flattenTree', () => {
  it('should flatten a root into an empty array ', () => {
    const data = { title: '', url: '', id: '', items: [], data: {}};
    const flat =  [];

    expect(flattenTree(hydrateTree(data))).toEqual(flat);
  });

  it('should flatten a root into an empty array when removeNodes is true', () => {
    const data = { title: '', url: '', id: '', items: [], data: {}};
    const flat =  [];

    expect(flattenTree(hydrateTree(data), true)).toEqual(flat);
  });

  it('should flatten a data tree into a tree with an open first layer and closed lower layers', () => {
    const data = { title: 'Root', url: '', id: '', items: [
      { title: 'Child A', url: '', id: '', items: [
        { title: 'Child Aa', url: '', id: '', items: [], data: {}},
      ], data: {}},
      { title: 'Child B', url: '', id: '', items: [
        { title: 'Child Bb', url: '', id: '', items: [], data: {}},
      ], data: {}},
    ], data: {}};

    const flat =  flattenTree(hydrateTree(data));

    expect(flat[0].title).toEqual('Child A');
    expect(flat[0].visible).toEqual(true);
    expect(flat[1].title).toEqual('Child Aa');
    expect(flat[1].visible).toEqual(false);

    const flatRemoved =  flattenTree(hydrateTree(data), true);

    expect(flatRemoved[0].title).toEqual('Child A');
    expect(flatRemoved[1].title).toEqual('Child B');
  });

  it('should flatten an open ui tree', () => {
    const root: DaffTreeUi<any> = {
      title: 'Root',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };

    const childA = {
      title: 'Child A',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };

    const childAa = {
      title: 'Child Aa',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };
    const childB = {
      title: 'Child B',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };
    const childBb = {
      title: 'Child Bb',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };

    root.items = [childA, childB];
    childA.parent = root;
    childB.parent = root;
    childA.items = [childAa];
    childAa.parent = childA;
    childB.items = [childBb];
    childBb.parent = childB;

    const flat = flattenTree(root);

    expect(flat[0].title).toEqual('Child A');
    expect(flat[0].visible).toEqual(true);
    expect(flat[1].title).toEqual('Child Aa');
    expect(flat[1].visible).toEqual(true);
    expect(flat[2].title).toEqual('Child B');
    expect(flat[2].visible).toEqual(true);
    expect(flat[3].title).toEqual('Child Bb');
    expect(flat[3].visible).toEqual(true);


    const flatRemoved = flattenTree(root, true);

    expect(flatRemoved[0].title).toEqual('Child A');
    expect(flatRemoved[1].title).toEqual('Child Aa');
    expect(flatRemoved[2].title).toEqual('Child B');
    expect(flatRemoved[3].title).toEqual('Child Bb');
  });

  it('should clip closed branches', () => {
    const root: DaffTreeUi<any> = {
      title: 'Root',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };

    const childA = {
      title: 'Child A',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: false,
      data: {},
    };

    const childAa = {
      title: 'Child Aa',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };
    const childAa1 = {
      title: 'Child Aa1',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };
    const childB = {
      title: 'Child B',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };
    const childBb = {
      title: 'Child Bb',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };

    root.items = [childA, childB];
    childA.parent = root;
    childB.parent = root;
    childA.items = [childAa];
    childAa.parent = childA;
    childAa.items = [childAa1];
    childAa1.parent = childAa;
    childB.items = [childBb];
    childBb.parent = childB;


    const flatRemoved = flattenTree(root, true);

    expect(flatRemoved[0].title).toEqual('Child A');
    expect(flatRemoved[1].title).toEqual('Child Aa1');
    expect(flatRemoved[2].title).toEqual('Child B');
    expect(flatRemoved[3].title).toEqual('Child Bb');

    const flat = flattenTree(root);

    expect(flat[0].title).toEqual('Child A');
    expect(flat[0].visible).toEqual(true);
    expect(flat[1].title).toEqual('Child Aa');
    expect(flat[1].visible).toEqual(false);
    expect(flat[2].title).toEqual('Child Aa1');
    expect(flat[2].visible).toEqual(false);
    expect(flat[3].title).toEqual('Child B');
    expect(flat[3].visible).toEqual(true);
    expect(flat[4].title).toEqual('Child Bb');
    expect(flat[4].visible).toEqual(true);
  });

  it('should handle deep trees correctly', () => {
    const root: DaffTreeUi<any> = {
      title: 'Root',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };

    const childA = {
      title: 'Child A',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };

    const childAa = {
      title: 'Child Aa',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };
    const childAaA = {
      title: 'Child AaA',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
      data: {},
    };
    const childAaAa = {
      title: 'Child AaAa',
      url: '',
      id: '',
      items: [],
      parent: undefined,
      open: true,
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


    const flat = flattenTree(root, true);

    expect(flat[0].title).toEqual('Child A');
    expect(flat[1].title).toEqual('Child Aa');
    expect(flat[2].title).toEqual('Child AaA');
    expect(flat[3].title).toEqual('Child AaAa');
  });
});
