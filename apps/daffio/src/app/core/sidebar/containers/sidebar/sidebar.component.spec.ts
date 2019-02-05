import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffioSidebarContainerComponent } from './sidebar.component';
import { DaffSidebarModule, DaffSidebarComponent } from '@daffodil/design';
import { RouterTestingModule } from '@angular/router/testing';

@Component({template: '<daffio-sidebar (close)="closeFunction()"></daffio-sidebar>'})
class WrapperComponent {
  closeFunction: Function = () => {}
}

describe('DaffioSidebarContainer', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let daffioSidebarContainer: DaffioSidebarContainerComponent;
  let daffSidebar: DaffSidebarComponent;
  let closeButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSidebarModule,
        RouterTestingModule
      ],
      declarations: [ 
        WrapperComponent,
        DaffioSidebarContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;  
    fixture.detectChanges();

    daffioSidebarContainer = fixture.debugElement.query(By.css('daffio-sidebar')).componentInstance;
    daffSidebar = fixture.debugElement.query(By.css("daff-sidebar")).componentInstance;
    closeButton = fixture.debugElement.query(By.css('.daffio-sidebar__close')).nativeElement;
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
      spyOn(daffioSidebarContainer, 'onClose');

      closeButton.click();

      expect(daffioSidebarContainer.onClose).toHaveBeenCalled();
    });

  });

  it('renders a [daff-sidebar-item] for every links defined', () => {
    const sidebarItems = fixture.debugElement.queryAll(By.css('[daff-sidebar-item]'));

    expect(sidebarItems.length).toEqual(daffioSidebarContainer.links.length);
  });
});
