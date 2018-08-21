import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { SidebarComponent } from './sidebar.component';
import * as fromFoundationHeader from '../../reducers/index';
import { ToggleShowSidebar } from '../../actions/header.actions';

@Component({selector: '[sidebar-item]', template: ''})
class MockSidebarItemComponent {}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let store;
  let stubSelectSidebar: boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationHeader: combineReducers(fromFoundationHeader.reducers),
        })
      ],
      declarations: [ 
        MockSidebarItemComponent,
        SidebarComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
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

  describe('ngOnInit', () => {
    
    it('should initialize showSidebar$', () => {
      component.showSidebar$.subscribe((showSidebar) => {
        expect(showSidebar).toEqual(stubSelectSidebar);
      });
    });
  });

  describe('toggleShowSidebar', () => {
    
    it('should call store.dispatch with a ToggleShowSidebar action', () => {
      component.toggleShowSidebar();

      expect(store.dispatch).toHaveBeenCalledWith(new ToggleShowSidebar());
    });
  });

  describe('when showSidebar$ is false', () => {
    
    it('should set sidebar-hide class on sidebar', () => {
      component.showSidebar$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.sidebar')).nativeElement.classList.contains('sidebar-hide')).toBeTruthy();
    });
  });

  describe('when showSidebar$ is true', () => {
    
    it('should set sidebar-show class on sidebar', () => {
      component.showSidebar$ = of(true);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.sidebar')).nativeElement.classList.contains('sidebar-show')).toBeTruthy();
    });
  });
  
  describe('when the close icon is clicked', () => {
    
    it('should call toggleShowSidebar', () => {
      spyOn(component, 'toggleShowSidebar');

      fixture.debugElement.query(By.css('.sidebar__close')).nativeElement.click();

      expect(component.toggleShowSidebar).toHaveBeenCalled();
    });
  });
});
