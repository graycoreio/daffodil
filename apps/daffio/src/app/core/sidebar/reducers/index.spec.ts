import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromSidebar from './index';

describe('selectDaffioSidebarState', () => {

  let store: Store<fromSidebar.DaffioSidebarState>;
  let expectedShowSidebar: boolean;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          daffioSidebar: combineReducers(fromSidebar.reducers),
        })
      ]
    });

    expectedShowSidebar = false;
    store = TestBed.get(Store);
  }));

  describe('daffioSidebarStateSelector', () => {
    
    it('selects sidebar state', () => {
      const expectedSidebarState = {
        showSidebar: expectedShowSidebar
      }

      store.pipe(select(fromSidebar.daffioSidebarStateSelector)).subscribe((sidebarState) => {
        expect(sidebarState).toEqual(expectedSidebarState);
      });
    });
  });

  describe('selectShowSidebar', () => {
    
    it('selects showSidebar state', () => {
      store.pipe(select(fromSidebar.selectShowSidebar)).subscribe((showSidebar) => {
        expect(showSidebar).toEqual(expectedShowSidebar);
      });
    });
  });
});
