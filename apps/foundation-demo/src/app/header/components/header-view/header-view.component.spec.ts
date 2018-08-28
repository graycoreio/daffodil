import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderViewComponent } from './header-view.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({selector: '[sidebar-container]', template: '<ng-content></ng-content>', exportAs: 'SidebarContainer'})
class MockSidebarContainer {
  toggleShowSidebar: Function = () => {};
}

@Component({selector: 'header', template: ''})
class MockHeaderComponent {
  @Output() toggleShowSidebar: EventEmitter<any> = new EventEmitter();
}

describe('HeaderViewComponent', () => {
  let component: HeaderViewComponent;
  let fixture: ComponentFixture<HeaderViewComponent>;
  let sidebarContainer: MockSidebarContainer;
  let header: MockHeaderComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MockSidebarContainer,
        MockHeaderComponent,
        HeaderViewComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    header = fixture.debugElement.query(By.css('header')).componentInstance;
    sidebarContainer = fixture.debugElement.query(By.css('[sidebar-container]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when <header> emits toggleShowSidebar', () => {
    
    it('should call sidebarContainer.toggleShowSidebar', () => {
      spyOn(sidebarContainer, 'toggleShowSidebar');

      header.toggleShowSidebar.emit();

      expect(sidebarContainer.toggleShowSidebar).toHaveBeenCalled();
    });
  });
});
