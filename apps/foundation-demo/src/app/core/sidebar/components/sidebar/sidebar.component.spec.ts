import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { SidebarComponent } from './sidebar.component';
import * as fromFoundationHeader from '../../reducers/index';

@Component({selector: '[daff-sidebar]', template: '<ng-content></ng-content>'})
class MockDaffSidebarComponent {
  @Input() show: boolean;
}

@Component({template: '<sidebar [showSidebar]="showSidebarValue" (toggleSidebarVisibility)="toggleSidebarVisibilityFunction()"><div class="transcluded"></div></sidebar><div class="outside"></div>'})
class TestSidebarComponentWrapper {
  showSidebarValue: boolean;
  toggleSidebarVisibilityFunction: Function = () => {};
}

describe('SidebarComponent', () => {
  let component: TestSidebarComponentWrapper;
  let fixture: ComponentFixture<TestSidebarComponentWrapper>;
  let store;
  let stubShowSidebar: boolean;
  let sidebar: SidebarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationHeader: combineReducers(fromFoundationHeader.reducers),
        })
      ],
      declarations: [
        MockDaffSidebarComponent,
        TestSidebarComponentWrapper,
        SidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSidebarComponentWrapper);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    component = fixture.componentInstance;

    stubShowSidebar = false;
    component.showSidebarValue = stubShowSidebar;

    fixture.detectChanges();

    sidebar = fixture.debugElement.query(By.css('sidebar')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take showSidebar as input', () => {
    expect(sidebar.showSidebar).toEqual(stubShowSidebar);
  });

  describe('when toggleSidebarVisibility is emitted', () => {
    
    it('should call associated host function', () => {
      spyOn(component, 'toggleSidebarVisibilityFunction');

      sidebar.toggleSidebarVisibility.emit();

      expect(component.toggleSidebarVisibilityFunction).toHaveBeenCalled();
    });
  });

  describe('when showSidebar is true', () => {

    beforeEach(() => {
      spyOn(sidebar.toggleSidebarVisibility, 'emit'); 

      sidebar.showSidebar = true;
      fixture.detectChanges();       
    });

    describe('and sidebar is clicked', () => {
      
      it('should not call toggleSidebarVisibility', () => {
        fixture.debugElement.query(By.css('.sidebar')).nativeElement.click();

        expect(sidebar.toggleSidebarVisibility.emit).not.toHaveBeenCalled();
      });
    });

    describe('and a click occurs outside of the sidebar', () => {
      
      it('should emit toggleSidebarVisibility', () => {
        fixture.debugElement.query(By.css('.outside')).nativeElement.click();

        expect(sidebar.toggleSidebarVisibility.emit).toHaveBeenCalled();
      });
    });
  });
  
  describe('when the close icon is clicked', () => {
    
    it('should call toggleSidebarVisibility', () => {
      spyOn(sidebar.toggleSidebarVisibility, 'emit'); 
      fixture.debugElement.query(By.css('.sidebar__close')).nativeElement.click();

      expect(sidebar.toggleSidebarVisibility.emit).toHaveBeenCalled();
    });
  });
});
