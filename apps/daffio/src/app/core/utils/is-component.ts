import {
  reflectComponentType,
  Type,
} from '@angular/core';

export function isComponent(maybeComp: any): maybeComp is Type<any> {
  try {
    return !!reflectComponentType(maybeComp);
  } catch {
    return false;
  }
}
