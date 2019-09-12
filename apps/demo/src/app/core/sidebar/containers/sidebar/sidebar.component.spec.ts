import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SidebarContainer } from './sidebar.component';
import { DaffSidebarModule, DaffSidebarComponent } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({template: '<demo-sidebar (close)="closeFunction()"></demo-sidebar>'})
class WrapperComponent {
  closeFunction() {}
}

describe('SidebarContainer', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let sidebarContainer: SidebarContainer;
  let daffSidebar: DaffSidebarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSidebarModule,
        FontAwesomeModule
      ],
      declarations: [ 
        WrapperComponent,
        SidebarContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;  
    fixture.detectChanges();

    sidebarContainer = fixture.debugElement.query(By.css('demo-sidebar')).componentInstance;
    daffSidebar = fixture.debugElement.query(By.css("daff-sidebar")).componentInstance;
  });

  it('should create', () => {
    expect(sidebarContainer).toBeTruthy();
  });

  describe('when close is emitted', () => {
    
    it('should call close function on host component', () => {
      spyOn(wrapper, 'closeFunction');

      sidebarContainer.close.emit();

      expect(wrapper.closeFunction).toHaveBeenCalled();
    });
  });

  it('should call `onClose` when the daff-sidebar emits `escapePressed`', () => {
    spyOn(sidebarContainer, 'onClose');

    daffSidebar.escapePressed.emit();

    expect(sidebarContainer.onClose).toHaveBeenCalled();    
  })
});
