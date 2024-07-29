import { DaffSeoPageHookRouterEffects } from '../effects/page-hook.effects';

export const initializeRouterService = (effects: DaffSeoPageHookRouterEffects<any, any, any>) => () => {
  effects.getData$().subscribe();
  effects.emptyRestoreCache$().subscribe();
  effects.remove$().subscribe();
  effects.restore$().subscribe();
};
