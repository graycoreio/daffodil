import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';

import * as fromSidebar from './index';

describe('selectDemoSidebarState', () => {

  let store: Store<fromSidebar.DemoSidebarState>;
  let expectedShowSidebar: boolean;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoSidebar: combineReducers(fromSidebar.reducers),
        })
      ]
    });

    expectedShowSidebar = false;
    store = TestBed.inject(Store);
  }));

  describe('demoSidebarStateSelector', () => {

    it('selects sidebar state', () => {
      const expectedSidebarState = {
        showSidebar: expectedShowSidebar
      }

      store.pipe(select(fromSidebar.demoSidebarStateSelector)).subscribe((sidebarState) => {
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
