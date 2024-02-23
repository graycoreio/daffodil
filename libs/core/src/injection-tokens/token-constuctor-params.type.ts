import { InjectionToken } from '@angular/core';

export type TokenDesc<T> = ConstructorParameters<typeof InjectionToken<T>>[0];
export type TokenOptions<T> = ConstructorParameters<typeof InjectionToken<T>>[1];
