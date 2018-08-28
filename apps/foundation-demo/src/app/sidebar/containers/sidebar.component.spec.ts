import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { By } from '@angular/platform-browser';

import { SidebarContainer } from './sidebar.component';
import * as fromFoundationSidebar from '../reducers/index';
import { ToggleShowSidebar } from '../actions/sidebar.actions';

describe('SidebarContainer', () => {
  let component: SidebarContainer;
  let fixture: ComponentFixture<SidebarContainer>;
  let store;
  let stubShowSidebar: boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationSidebar: combineReducers(fromFoundationSidebar.reducers),
        })
      ],
      declarations: [ 
        SidebarContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarContainer);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    component = fixture.componentInstance;

    stubShowSidebar = false;
    spyOn(fromFoundationSidebar, 'selectShowSidebar').and.returnValue(stubShowSidebar);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    
    it('should initialize showSidebar$', () => {
      component.showSidebar$.subscribe((showSidebar) => {
        expect(showSidebar).toEqual(stubShowSidebar);
      });
    });
  });

  describe('toggleShowSidebar', () => {
    
    it('should call store.dispatch with a ToggleShowSidebar action', () => {
      component.toggleShowSidebar();

      expect(store.dispatch).toHaveBeenCalledWith(new ToggleShowSidebar());
    });
  });
});
