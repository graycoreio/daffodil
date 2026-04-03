import { InjectionToken } from '@angular/core';
import { Action } from '@ngrx/store';

import { ActionDirectInjection } from './direct.type';
import { ActionTransformedInjection } from './transformed.type';
import { ActionInjection } from './type';

const defaultFactory = () => [];

/**
 * Creates a token provider pair for an injectable action.
 */
export const createInjectableAction = <Payload>(tokenName: string) => {
  const token = new InjectionToken<Array<ActionInjection<Payload>>>(
    tokenName,
    {
      factory: defaultFactory,
    },
  );
  const provider = <T extends Action>(value: T extends Payload ? ActionDirectInjection<T> : ActionTransformedInjection<Payload, T>) => ({
    provide: token,
    useValue: value,
    multi: true,
  });

  return {
    token,
    provider,
  };
};
