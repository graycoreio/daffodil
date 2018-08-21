import { ToggleShowSidebar } from "../actions/header.actions";
import { initialState, reducer, getShowSidebar } from "../reducers/header.reducer";

describe('Header | Header Reducer', () => {
  
  describe('initialState', () => {
    
    it('should set showSidebar to false', () => {
      expect(initialState.showSidebar).toBeFalsy();
    });
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ToggleShowSidebar action is triggered', () => {

    let result;

    beforeEach(() => {
      let toggleShowSidebarAction = new ToggleShowSidebar();
      
      result = reducer(initialState, toggleShowSidebarAction);
    });

    it('sets showSidebar to !showSidebar', () => {
      expect(result.showSidebar).toBeTruthy();
    });
  });

  describe('getShowSidebar', () => {
    
    it('returns showSidebar state', () => {
      expect(getShowSidebar(initialState)).toEqual(initialState.showSidebar);
    });
  });
});
