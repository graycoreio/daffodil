import { Observable } from "rxjs";
import { Action } from "@ngrx/store";

import { DaffStoreFacade } from "@daffodil/core";

import { DaffNavigationTree } from "../models/navigation-tree";

export interface DaffNavigationFacadeInterface extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  tree$: Observable<DaffNavigationTree>;
  errors$: Observable<string[]>;
  dispatch(action: Action): void;
}