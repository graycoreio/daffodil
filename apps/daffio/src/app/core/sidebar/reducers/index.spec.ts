import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';

import * as fromSidebar from './index';
import { initialState } from './sidebar.reducer';

describe('selectDaffioSidebarState', () => {

  let store: Store<fromSidebar.DaffioSidebarState>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          daffioSidebar: combineReducers(fromSidebar.reducers),
        })
      ]
    });

    store = TestBed.get(Store);
  }));

  describe('daffioSidebarStateSelector', () => {
    
    it('selects sidebar state', () => {
      store.pipe(select(fromSidebar.daffioSidebarStateSelector)).subscribe((sidebarState) => {
        expect(sidebarState).toEqual(initialState);
      });
    });
  });

  describe('selectShowSidebar', () => {
    
    it('selects showSidebar state', () => {
      store.pipe(select(fromSidebar.selectShowSidebar)).subscribe((showSidebar) => {
        expect(showSidebar).toEqual(initialState.showSidebar);
      });
    });
  });

  describe('selectSidebarMode', () => {
    it('selects mode state', () => {
      store.pipe(select(fromSidebar.selectSidebarMode)).subscribe((mode) => {
        expect(mode).toEqual(initialState.mode);
      });
    });
  })
});
