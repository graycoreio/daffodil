/**
 * A non-exhaustive list of feature kinds that exist for {@link provideMagentoDriver}.
 */
export enum MagentoDriverFeatureKind {
  CacheableOperations = 'DaffMagentoDriverCacheableOperationsFeature',
  CacheHeader = 'DaffMagentoDriverCacheHeaderFeature',
  ErrorHandler = 'DaffMagentoDriverErrorHandlerFeature',
  TransferState = 'DaffMagentoDriverTransferStateFeature',
  ExtraApolloOptions = 'DaffMagentoDriverExtraApolloOptionsFeature',
}
