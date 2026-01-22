import { group } from './group';

interface Foo {
  type: 'foo';
  foo: string;
}

interface Bar {
  type: 'bar';
  bar: string;
}

describe('@daffodil/core | group', () => {
  const values: Array<Foo | Bar> = [
    {
      type: 'bar',
      bar: 'test',
    },
    {
      type: 'foo',
      foo: '5',
    },
    {
      type: 'foo',
      foo: 'asdefasdf',
    },
    {
      type: 'bar',
      bar: 'one',
    },
    {
      type: 'foo',
      foo: 'test',
    },
    {
      type: 'bar',
      bar: 'dddd',
    },
  ];

  it('should group the value according to their type', () => {
    const result = group(values, (val) => val.type);
    expect(result.foo).toEqual(jasmine.arrayContaining(values.filter(({ type }) => type === 'foo')));
    expect(result.bar).toEqual(jasmine.arrayContaining(values.filter(({ type }) => type === 'bar')));
  });
});
