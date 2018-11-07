import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromSidebar from './index';

describe('selectFoundationSidebarState', () => {

  let store: Store<fromSidebar.FoundationSidebarState>;
  let expectedShowSidebar: boolean;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationSidebar: combineReducers(fromSidebar.reducers),
        })
      ]
    });

    expectedShowSidebar = false;
    store = TestBed.get(Store);
  }));

  describe('foundationSidebarStateSelector', () => {
    
    it('selects sidebar state', () => {
      let expectedSidebarState = {
        showSidebar: expectedShowSidebar
      }

      store.pipe(select(fromSidebar.foundationSidebarStateSelector)).subscribe((sidebarState) => {
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
