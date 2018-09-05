import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { SidebarContainer } from './sidebar.component';
import * as fromSidebar from '../reducers/index';
import { ToggleSidebar, OpenSidebar, CloseSidebar, SetSidebarState } from '../actions/sidebar.actions';

@Component({
  template: `<ng-template sidebar-container></ng-template>` 
})
class TestSidebarContainerComponent {}


describe('SidebarContainer', () => {
  let component: SidebarContainer;
  let fixture: ComponentFixture<TestSidebarContainerComponent>;
  let store: Store<fromSidebar.State>;
  let stubShowSidebar: boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationSidebar: combineReducers(fromSidebar.reducers),
        })
      ],
      declarations: [ 
        SidebarContainer,
        TestSidebarContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    component = new SidebarContainer(store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize showSidebar$', () => {
      stubShowSidebar = false;
      spyOn(fromSidebar, 'selectShowSidebar').and.returnValue(stubShowSidebar);

      component.ngOnInit();

      component.showSidebar$.subscribe((showSidebar) => {
        expect(showSidebar).toEqual(stubShowSidebar);
      });
    });
  });

  describe('methods', () => {
    describe('toggle', () => {
      it('should call store.dispatch with a ToggleSidebar action', () => {
        component.toggle();
  
        expect(store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
      });
    });

    describe('open', () => {
      it('should call store.dispatch with a OpenSidebar action', () => {
        component.open();
  
        expect(store.dispatch).toHaveBeenCalledWith(new OpenSidebar());
      });
    });

    describe('close', () => {
      it('should call store.dispatch with a CloseSidebar action', () => {
        component.close();
  
        expect(store.dispatch).toHaveBeenCalledWith(new CloseSidebar());
      });
    });

    describe('setVisibility', () => {
      it('should call store.dispatch with a SetSidebarAction action', () => {
        component.setVisibility(true);
  
        expect(store.dispatch).toHaveBeenCalledWith(new SetSidebarState(true));
      });
    });
  });
});
