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

  describe('foundationHeaderStateSelector', () => {
    
    it('selects header state', () => {
      let expectedHeaderState = {
        showSidebar: expectedShowSidebar
      }

      store.pipe(select(fromHeader.foundationHeaderStateSelector)).subscribe((headerState) => {
        expect(headerState).toEqual(expectedHeaderState);
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
