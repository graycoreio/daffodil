import { daffTransformResolvedRouteToInsertionStrategy } from './resolved-route-to-insertion-strategy';

describe('@daffodil/external-router | daffTransformResolvedRouteToInsertionStrategy', () => {
  it('transforms a DaffExternallyResolvableUrl into an inserter.', () => {
    expect(
      daffTransformResolvedRouteToInsertionStrategy(
        { url: 'some-url', type: 'some-type', id: 'id' },
        [{ type: 'some-type', route: { redirectTo: '/' }, insertionStrategy: () => []}],
      ),
    ).toEqual({
      path: 'some-url',
      redirectTo: '/',
      insertionStrategy: () => [],
    });
  });
});
