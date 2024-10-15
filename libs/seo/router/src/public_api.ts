export { DaffSeoUpdateEventPair } from './model/update-event-pair.interface';
export {
  DAFF_SEO_META_ROUTER_UPDATES,
  provideDaffMetaRouterUpdates,
} from './meta/updates.token';
export {
  DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES,
  provideDaffCanonicalUrlRouterUpdates,
} from './canonical/updates.token';
export {
  DAFF_SEO_TITLE_ROUTER_UPDATES,
  provideDaffTitleRouterUpdates,
} from './title/updates.token';
export { daffSeoRouterTitleProvider } from './providers/title-provider';
export { daffSeoRouterMetaProvider } from './providers/meta-provider';
export { daffSeoRouterCanonicalProvider } from './providers/canonical-provider';
