import { DaffPalette } from "libs/design/src";
import { HeaderActions, DaffioHeaderActionTypes } from "../actions/header.actions";

export interface DaffioHeaderState {
  stuck: boolean;
  color: DaffPalette;
}

export const initialState: DaffioHeaderState = {
  stuck: false,
  color: undefined
}

export function reducer(state = initialState, action: HeaderActions): DaffioHeaderState {
  switch (action.type) {
    case DaffioHeaderActionTypes.HeaderStickAction:
      return { ...state, stuck: true }
    case DaffioHeaderActionTypes.HeaderUnstickAction:
        return { ...state, stuck: false }
    case DaffioHeaderActionTypes.SetHeaderColorAction:
      return { ...state, color: action.payload }
    default:
      return state;
  }
}