import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffioSidebarContainer } from './sidebar.component';
import { DaffSidebarModule, DaffSidebarComponent } from '@daffodil/design';
import { CloseSidebar } from '../../actions/sidebar.actions';

@Component({template: '<daffio-sidebar (close)="closeFunction()"></daffio-sidebar>'})
class TestDaffioSidebarContainerWrapper {
  closeFunction: Function = () => {}
}

describe('DaffioSidebarContainer', () => {
  let component: TestDaffioSidebarContainerWrapper;
  let fixture: ComponentFixture<TestDaffioSidebarContainerWrapper>;
  let daffioSidebarContainer: DaffioSidebarContainer;
  let daffSidebar: DaffSidebarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSidebarModule
      ],
      declarations: [ 
        TestDaffioSidebarContainerWrapper,
        DaffioSidebarContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffioSidebarContainerWrapper);
    component = fixture.componentInstance;  
    fixture.detectChanges();

    daffioSidebarContainer = fixture.debugElement.query(By.css('daffio-sidebar')).componentInstance;
    daffSidebar = fixture.debugElement.query(By.css("daff-sidebar")).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when close is emitted', () => {
    
    it('should call close function on host component', () => {
      spyOn(component, 'closeFunction');

      daffioSidebarContainer.close.emit();

      expect(component.closeFunction).toHaveBeenCalled();
    });
  });

  it('should call `onClose` when the daff-sidebar emits `escapePressed`', () => {
    spyOn(daffioSidebarContainer, 'onClose');

    daffSidebar.escapePressed.emit();

    expect(daffioSidebarContainer.onClose).toHaveBeenCalled();    
  })

  describe('when .daffio-sidebar__close is clicked', () => {

    it('should call `onClose`', () => {
      spyOn(component, 'closeFunction');

      daffioSidebarContainer.close.emit();

      expect(component.closeFunction).toHaveBeenCalled();
    });

  });

  describe('when [sidebar-item] is clicked', () => {

    it('should call `onClose`', () => {
      spyOn(component, 'closeFunction');

      daffioSidebarContainer.close.emit();

      expect(component.closeFunction).toHaveBeenCalled();
    });

  });
});
