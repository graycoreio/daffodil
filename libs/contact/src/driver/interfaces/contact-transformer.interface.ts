import { InjectionToken } from '@angular/core';

export const DaffContactTransformer = new InjectionToken('DaffContactTransformer');
export interface DaffContactTransformerInterface<T, REQ, RES, V>{
	transformOut(newsletter: T): REQ;
	transformIn(newsletter: RES): V;
}
