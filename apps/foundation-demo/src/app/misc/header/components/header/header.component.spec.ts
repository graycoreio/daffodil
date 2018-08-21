import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { ToggleShowSidebar } from '../../actions/sidebar.actions';
import * as fromFoundationHeader from '../../reducers/index';

@Component({selector: 'sidebar', template: ''})
class MockSidebarComponent {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store;
  let stubSelectSidebar;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationHeader: combineReducers(fromFoundationHeader.reducers),
        })
      ],
      declarations: [ 
        MockSidebarComponent,
        HeaderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    component = fixture.componentInstance;

    stubSelectSidebar = false;
    spyOn(fromFoundationHeader, 'selectShowSidebar').and.returnValue(stubSelectSidebar);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleShowSidebar', () => {
    
    it('should call store.dispatch with a ToggleShowSidebar action', () => {
      component.toggleShowSidebar();

      expect(store.dispatch).toHaveBeenCalledWith(new ToggleShowSidebar());
    });
  });

  describe('when open-icon is clicked', () => {
    
    it('should call toggleShowSidebar', () => {
      spyOn(component, 'toggleShowSidebar');
      fixture.debugElement.query(By.css('.header__open-icon-wrapper')).nativeElement.click();

      expect(component.toggleShowSidebar).toHaveBeenCalled();
    });
  });
});
