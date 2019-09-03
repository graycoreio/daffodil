import { ActionReducerMap } from "@ngrx/store";

import { NavigationReducersState } from "./navigation-reducers.interface";
import { reducer } from "./navigation/navigation.reducer";

export const navigationReducers: ActionReducerMap<NavigationReducersState> = {
  navigation: reducer
}