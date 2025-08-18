import {
  InjectionToken,
  Type,
} from '@angular/core';

export const KNOWN_DYNAMIC_FORM_COMPONENTS = new InjectionToken<ReadonlyMap<string, Type<any>>>('KNOWN_DYNAMIC_FORM_COMPONENTS', {
  providedIn: 'root',
  factory: () => new Map(),
});
