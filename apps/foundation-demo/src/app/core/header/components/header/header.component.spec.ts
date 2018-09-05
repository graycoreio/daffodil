import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({selector: '[sidebar-container]', template: '<ng-content></ng-content>', exportAs: 'SidebarContainer'})
class MockSidebarContainer {
  toggleSidebarVisibility: Function = () => {};
}

@Component({selector: 'header', template: ''})
class MockHeaderComponent {
  @Output() toggleSidebarVisibility: EventEmitter<any> = new EventEmitter();
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let sidebarContainer: MockSidebarContainer;
  let header: MockHeaderComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MockSidebarContainer,
        MockHeaderComponent,
        HeaderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    header = fixture.debugElement.query(By.css('header')).componentInstance;
    sidebarContainer = fixture.debugElement.query(By.css('[sidebar-container]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when <header> emits toggleSidebarVisibility', () => {
    
    it('should call sidebarContainer.toggleSidebarVisibility', () => {
      spyOn(sidebarContainer, 'toggleSidebarVisibility');

      header.toggleSidebarVisibility.emit();

      expect(sidebarContainer.toggleSidebarVisibility).toHaveBeenCalled();
    });
  });
});
