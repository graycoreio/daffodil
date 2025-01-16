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

@Component({
  template: `
    <daff-sidebar-header [dismissible]="dismissible" (closeSidebar)="closeSidebarFunction()">Header</daff-sidebar-header>
	`,
  imports: [
    DaffSidebarHeaderComponent,
  ],
})
class WrapperComponent {
  dismissible: boolean;
  closeSidebarFunction = () => {};
}

describe('@daffodil/design/sidebar | DaffSidebarHeaderComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSidebarHeaderComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
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

  describe('when dismissible is set to true', () => {
    beforeEach(() => {
      wrapper.dismissible = true;
      fixture.detectChanges();
    });

    it('should add a class of "dismissible" to the host element', () => {
      expect(de.classes['dismissible']).toBeTrue();
    });

    it('should show the close icon button', () => {
      expect(fixture.debugElement.query(By.css('.daff-sidebar-header__close-icon'))).toBeTruthy();
    });
  });

  describe('when the close icon button is clicked', () => {
    it('should emit closeNotification', () => {
      wrapper.dismissible = true;
      fixture.detectChanges();

      spyOn(component.closeSidebar, 'emit');

      fixture.debugElement.query(By.css('.daff-sidebar-header__close-icon')).nativeElement.click();

      expect(component.closeSidebar.emit).toHaveBeenCalledWith();
    });
  });
});
