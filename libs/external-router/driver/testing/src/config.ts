import { InjectionToken } from '@angular/core';

export type DaffExternalRouterType = string;

export interface DaffExternalRouterDriverTestingConfig {
	[url: string]: DaffExternalRouterType;
}
export const DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG = new InjectionToken<
	DaffExternalRouterDriverTestingConfig
>('DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG', {providedIn: 'root', factory: () => ({})});
