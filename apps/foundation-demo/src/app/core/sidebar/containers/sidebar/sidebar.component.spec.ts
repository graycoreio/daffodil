import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SidebarContainer } from './sidebar.component';
import { DaffSidebarModule, DaffSidebarComponent } from '@daffodil/design';

@Component({template: '<sidebar (close)="closeFunction()"></sidebar>'})
class TestSidebarContainerWrapper {
  closeFunction: Function = () => {}
}

describe('SidebarContainer', () => {
  let component: TestSidebarContainerWrapper;
  let fixture: ComponentFixture<TestSidebarContainerWrapper>;
  let sidebarContainer: SidebarContainer;
  let daffSidebar: DaffSidebarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSidebarModule
      ],
      declarations: [ 
        TestSidebarContainerWrapper,
        SidebarContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSidebarContainerWrapper);
    component = fixture.componentInstance;  
    fixture.detectChanges();

    sidebarContainer = fixture.debugElement.query(By.css('sidebar')).componentInstance;
    daffSidebar = fixture.debugElement.query(By.css("daff-sidebar")).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when close is emitted', () => {
    
    it('should call close function on host component', () => {
      spyOn(component, 'closeFunction');

      sidebarContainer.close.emit();

      expect(component.closeFunction).toHaveBeenCalled();
    });
  });

  it('should call `onClose` when the daff-sidebar emits `escapePressed`', () => {
    spyOn(sidebarContainer, 'onClose');

    daffSidebar.escapePressed.emit();

    expect(sidebarContainer.onClose).toHaveBeenCalled();    
  })
});
