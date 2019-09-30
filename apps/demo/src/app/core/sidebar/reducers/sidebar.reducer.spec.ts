import { ToggleSidebar, CloseSidebar, OpenSidebar, SetSidebarState } from '../actions/sidebar.actions';
import { initialState, reducer, getShowSidebar } from '../reducers/sidebar.reducer';

describe('Sidebar | Sidebar Reducer', () => {
  let action;
  let result;

  describe('initialState', () => {
    
    it('should set showSidebar to false', () => {
      expect(initialState.showSidebar).toBeFalsy();
    });
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      action = {} as any;

      result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ToggleSidebar action is triggered', () => {

    beforeEach(() => {
      action = new ToggleSidebar();
      
      result = reducer(initialState, action);
    });

    it('sets showSidebar to !showSidebar', () => {
      expect(result.showSidebar).toBeTruthy();
    });
  });

  describe('when CloseSidebar is triggered', () => { 
    it('sets showSidebar to `false`', () => {
      action = new CloseSidebar();

      result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(false);
    })
  });

  describe('when OpenSidebar is triggered', () => { 
    it('sets showSidebar to `true`', () => {
      action = new OpenSidebar();

      result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(true);
    })
  });

  describe('when SetSidebarState is triggered', () => { 
    it('sets showSidebar to `true` when the actions payload is true', () => {
      action = new SetSidebarState(true);

      result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(true);
    })

    it('sets showSidebar to `false` when the actions payload is false', () => {
      action = new SetSidebarState(false);

      result = reducer(initialState, action);
      expect(result.showSidebar).toEqual(false);
    })
  });

  describe('getShowSidebar', () => {
    it('returns showSidebar state', () => {
      expect(getShowSidebar(initialState)).toEqual(initialState.showSidebar);
    });
  });
});
