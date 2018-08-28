import { ToggleSidebarVisibility } from "../actions/sidebar.actions";
import { initialState, reducer, getShowSidebar } from "../reducers/sidebar.reducer";

describe('Header | Sidebar Reducer', () => {
  
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

  describe('when ToggleSidebarVisibility action is triggered', () => {

    let result;

    beforeEach(() => {
      let toggleSidebarVisibilityAction = new ToggleSidebarVisibility();
      
      result = reducer(initialState, toggleSidebarVisibilityAction);
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
