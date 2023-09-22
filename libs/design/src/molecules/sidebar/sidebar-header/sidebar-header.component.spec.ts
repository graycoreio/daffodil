import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffSidebarHeaderComponent } from './sidebar-header.component';

@Component({ template: `
  <daff-sidebar-header [hideCloseButton]="hideCloseButton" (closeSidebar)="closeSidebarFunction()">Header</daff-sidebar-header>
` })
class WrapperComponent {
  hideCloseButton = false;
  closeSidebarFunction = () => {};
}

describe('DaffSidebarHeaderComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSidebarHeaderComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffSidebarHeaderComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('daff-sidebar-header'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-sidebar-header" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-sidebar-header': true,
    }));
  });

  describe('hideCloseButton', () => {
    it('should take hideCloseButton as an input', () => {
      wrapper.hideCloseButton = false;
      fixture.detectChanges();

      expect(component.hideCloseButton).toEqual(false);
    });

    it('should add a class of `hide-button` to the host element when it`s set to true', () => {
      wrapper.hideCloseButton = true;
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'hide-button': true,
      }));
    });
  });

  describe('when the close icon button is clicked', () => {
    it('should emit closeSidebar', () => {
      wrapper.hideCloseButton = false;
      fixture.detectChanges();

      spyOn(component.closeSidebar, 'emit');

      fixture.debugElement.query(By.css('.daff-sidebar-header__close-button')).nativeElement.click();

      expect(component.closeSidebar.emit).toHaveBeenCalledWith();
    });
  });
});
