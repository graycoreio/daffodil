import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffioSidebarContainer } from './sidebar.component';
import { DaffSidebarModule, DaffSidebarComponent } from '@daffodil/design';

@Component({template: '<daffio-sidebar (close)="closeFunction()"></daffio-sidebar>'})
class TestDaffioSidebarContainerWrapper {
  closeFunction: Function = () => {}
}

describe('DaffioSidebarContainer', () => {
  let component: TestDaffioSidebarContainerWrapper;
  let fixture: ComponentFixture<TestDaffioSidebarContainerWrapper>;
  let daffiosidebarContainer: DaffioSidebarContainer;
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

    daffiosidebarContainer = fixture.debugElement.query(By.css('daffio-sidebar')).componentInstance;
    daffSidebar = fixture.debugElement.query(By.css("daff-sidebar")).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when close is emitted', () => {
    
    it('should call close function on host component', () => {
      spyOn(component, 'closeFunction');

      daffiosidebarContainer.close.emit();

      expect(component.closeFunction).toHaveBeenCalled();
    });
  });

  it('should call `onClose` when the daff-sidebar emits `escapePressed`', () => {
    spyOn(daffiosidebarContainer, 'onClose');

    daffSidebar.escapePressed.emit();

    expect(daffiosidebarContainer.onClose).toHaveBeenCalled();    
  })
});
