import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SidebarViewComponent } from './sidebar-view.component';
import * as fromFoundationHeader from '../../reducers/index';
import { Observable, of } from 'rxjs';

@Component({selector: '[sidebar-container]', template: '<ng-content></ng-content>', exportAs: 'SidebarContainer'})
class MockSidebarContainer {
  showSidebar$: Observable<boolean>;
  toggleShowSidebar: Function = () => {}
}

@Component({selector: 'sidebar', template: ''})
class MockSidebarComponent {
  @Input() showSidebar: boolean;
  @Output() toggleShowSidebar: EventEmitter<any> = new EventEmitter();
}

describe('SidebarViewComponent', () => {
  let component: SidebarViewComponent;
  let fixture: ComponentFixture<SidebarViewComponent>;
  let store;
  let stubShowSidebar: boolean;
  let sidebar: MockSidebarComponent;
  let sidebarContainer: MockSidebarContainer;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationHeader: combineReducers(fromFoundationHeader.reducers),
        })
      ],
      declarations: [ 
        MockSidebarContainer,
        MockSidebarComponent,
        SidebarViewComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarViewComponent);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    component = fixture.componentInstance;
    stubShowSidebar = false;
    sidebarContainer = fixture.debugElement.query(By.css('[sidebar-container]')).componentInstance;
    sidebarContainer.showSidebar$ = of(stubShowSidebar);

    fixture.detectChanges();

    sidebar = fixture.debugElement.query(By.css('sidebar')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <sidebar>', () => {

    it('should set showSidebar', () => {
      expect(sidebar.showSidebar).toEqual(stubShowSidebar);
    });
  });

  describe('when sidebar emits toggleShowSidebar', () => {
    
    it('should call sidebarContainer.toggleShowSidebar', () => {
      spyOn(sidebarContainer, 'toggleShowSidebar');

      sidebar.toggleShowSidebar.emit();

      expect(sidebarContainer.toggleShowSidebar).toHaveBeenCalled();
    });
  });
});
