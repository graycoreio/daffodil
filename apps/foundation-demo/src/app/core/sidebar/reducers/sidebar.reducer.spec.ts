import { ToggleSidebar, CloseSidebar, OpenSidebar, SetSidebarState } from "../actions/sidebar.actions";
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

  describe('when ToggleSidebar action is triggered', () => {

    let result;

    beforeEach(() => {
      let toggleSidebar = new ToggleSidebar();
      
      result = reducer(initialState, toggleSidebar);
    });

    it('sets showSidebar to !showSidebar', () => {
      expect(result.showSidebar).toBeTruthy();
    });
  });

  describe('when CloseSidebar is triggered', () => { 
    it('sets showSidebar to `false`', () => {
      let action = new CloseSidebar();

      let result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(false);
    })
  });

  describe('when OpenSidebar is triggered', () => { 
    it('sets showSidebar to `true`', () => {
      let action = new OpenSidebar();

      let result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(true);
    })
  });

  describe('when SetSidebarState is triggered', () => { 
    it('sets showSidebar to `true` when the actions payload is true', () => {
      let action = new SetSidebarState(true);

      let result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(true);
    })

    it('sets showSidebar to `false` when the actions payload is false', () => {
      let action = new SetSidebarState(false);

      let result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(false);
    })
  });

  describe('getShowSidebar', () => {
    it('returns showSidebar state', () => {
      expect(getShowSidebar(initialState)).toEqual(initialState.showSidebar);
    });
  });
});
