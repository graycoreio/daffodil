/*
 * Public API Surface of @daffodil/external-router/driver/in-memory
 */

export { DaffExternalRouterInMemoryDriver } from './in-memory.service';

export {
  DaffExternalRouterDriverInMemoryConfig,
  DaffExternalRouterDriverInMemoryResolver,
} from './config';

export { provideDaffExternalRouterInMemoryDriver } from './provider';
