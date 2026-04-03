import { Action } from '@ngrx/store';

export enum DaffioDocsSearchActionTypes {
  STORE_RESULT = '[@daffodil/daffio] Docs Search Store Result',
}

export class DaffDocsSearchStoreResult implements Action {
  readonly type = DaffioDocsSearchActionTypes.STORE_RESULT;

  constructor(public result: string) {}
}

export type DaffioDocsSearchActions =
| DaffDocsSearchStoreResult;
