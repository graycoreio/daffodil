/*
 * Public API Surface of @daffodil/external-router/driver/in-memory
 */

export { DaffExternalRouterInMemoryDriver } from './in-memory.service';
export { DaffExternalRouterDriverInMemoryModule } from './in-memory.module';

export {
  DaffExternalRouterDriverInMemoryConfig,
  DaffExternalRouterDriverInMemoryResolver,
} from './config';

export { provideDaffExternalRouterInMemoryDriver } from './provider';
