import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromHeader from './index';

describe('selectFoundationHeaderState', () => {

  let store: Store<fromHeader.FoundationHeaderState>;
  let expectedShowSidebar: boolean;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationHeader: combineReducers(fromHeader.reducers),
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

      store.pipe(select(fromHeader.foundationSidebarStateSelector)).subscribe((sidebarState) => {
        expect(sidebarState).toEqual(expectedSidebarState);
      });
    });
  });

  describe('selectShowSidebar', () => {
    
    it('selects showSidebar state', () => {
      store.pipe(select(fromHeader.selectShowSidebar)).subscribe((showSidebar) => {
        expect(showSidebar).toEqual(expectedShowSidebar);
      });
    });
  });
});
