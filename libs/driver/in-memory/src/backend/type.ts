import { InMemoryDbService } from 'angular-in-memory-web-api';

import { DaffInMemoryRouteableBackend } from './routeable.type';

/**
 * An interface for defining in memory backends that use the angular in memory web api.
 */
export type DaffInMemoryBackendInterface = InMemoryDbService & DaffInMemoryRouteableBackend;
