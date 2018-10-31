import { ToggleSidebar, CloseSidebar, OpenSidebar, SetSidebarState } from "../actions/sidebar.actions";
import { initialState, reducer, getShowDaffioSidebar } from "../reducers/sidebar.reducer";

describe('Sidebar | Sidebar Reducer', () => {
  
  describe('initialState', () => {
    
    it('should set showDaffioSidebar to false', () => {
      expect(initialState.showDaffioSidebar).toBeFalsy();
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

    it('sets showDaffioSidebar to !showDaffioSidebar', () => {
      expect(result.showSidebar).toBeTruthy();
    });
  });

  describe('when CloseSidebar is triggered', () => { 
    it('sets showDaffioSidebar to `false`', () => {
      let action = new CloseSidebar();

      let result = reducer(initialState, action);
      expect(result.showDaffioSidebar).toEqual(false);
    })
  });

  describe('when OpenSidebar is triggered', () => { 
    it('sets showDaffioSidebar to `true`', () => {
      let action = new OpenSidebar();

      let result = reducer(initialState, action);
      expect(result.showDaffioSidebar).toEqual(true);
    })
  });

  describe('when SetSidebarState is triggered', () => { 
    it('sets showDaffioSidebar to `true` when the actions payload is true', () => {
      let action = new SetSidebarState(true);

      let result = reducer(initialState, action);
      expect(result.showDaffioSidebar).toEqual(true);
    })

    it('sets showDaffioSidebar to `false` when the actions payload is false', () => {
      let action = new SetSidebarState(false);

      let result = reducer(initialState, action);
      expect(result.showDaffioSidebar).toEqual(false);
    })
  });

  describe('getShowDaffioSidebar', () => {
    it('returns showDaffioSidebar state', () => {
      expect(getShowDaffioSidebar(initialState)).toEqual(initialState.showDaffioSidebar);
    });
  });
});
