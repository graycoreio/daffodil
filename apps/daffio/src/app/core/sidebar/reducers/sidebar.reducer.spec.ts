import { ToggleSidebar, CloseSidebar, OpenSidebar, SetSidebarState, ResetMode, SetSidebarMode } from "../actions/sidebar.actions";
import { initialState, reducer, getShowSidebar } from "../reducers/sidebar.reducer";

describe('Sidebar | Sidebar Reducer', () => {
  
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
      const toggleSidebar = new ToggleSidebar();
      
      result = reducer(initialState, toggleSidebar);
    });

    it('sets showSidebar to !showSidebar', () => {
      expect(result.showSidebar).toBeTruthy();
    });
  });

  describe('when CloseSidebar is triggered', () => { 
    it('sets showSidebar to `false`', () => {
      const action = new CloseSidebar();

      const result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(false);
    })
  });

  describe('when OpenSidebar is triggered', () => { 
    it('sets showSidebar to `true`', () => {
      const action = new OpenSidebar();

      const result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(true);
    })
  });

  describe('when SetSidebarState is triggered', () => { 
    it('sets showSidebar to actions payload', () => {
      const stubShowSidebar = true;
      const action = new SetSidebarState(stubShowSidebar);
      const result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(stubShowSidebar);
    });
  });

  describe('when SetSidebarModeAction is triggered', () => {
    it('should set the sidebar mode to the payload', () => {
      const stubMode = "side";
      const action = new SetSidebarMode(stubMode);
      const result = reducer(initialState, action);
      expect(result.mode).toEqual(stubMode);
    })
  })

  describe('when ResetSidebarMode is triggered', () => {
    it('should reset the sidebar mode to the initial state', () => {
      const action = new ResetMode();
      const result = reducer(initialState, action);
      expect(result.mode).toEqual(initialState.mode);
    })
  })

  describe('getShowSidebar', () => {
    it('returns showSidebar state', () => {
      expect(getShowSidebar(initialState)).toEqual(initialState.showSidebar);
    });
  });
});
