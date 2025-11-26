import {
  inject,
  InjectionToken,
  Type,
} from '@angular/core';

import { _DYNAMIC_COMPONENT } from './component-providers';
import { ComponentRegistration } from './component-registration';

const flattenRegistrations = (registrations: ComponentRegistration[]): ComponentRegistration[] => {
  const result: ComponentRegistration[] = [];
  const stack = [...registrations];
  while (stack.length > 0) {
    const registration = stack.pop();
    result.push(registration);
    if (registration.children) {
      stack.push(...registration.children);
    }
  }
  return result;
};

/**
 * @docs-private
 */
export const _DAFF_CONTENT_COMPONENT_MAP = new InjectionToken<{ [key: string]: Type<any> }>(
  'DAFF_CONTENT_COMPONENT_MAP',
  {
    providedIn: 'root',
    factory: () => {
      const registrations = inject<ComponentRegistration[]>(_DYNAMIC_COMPONENT, { optional: true }) || [];
      const map: { [key: string]: Type<any> } = {};
      for (const registration of flattenRegistrations(registrations)) {
        map[registration.name] = registration.componentType;
      }
      return map;
    },
  },
);
