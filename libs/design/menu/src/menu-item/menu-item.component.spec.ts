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

import { DaffMenuItemComponent } from './menu-item.component';

@Component({
  template: `
    <a href="/test" daff-menu-item>Test 1</a>
    <button daff-menu-item>Test 2</button>
  `,
  imports: [
    DaffMenuItemComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/menu | DaffMenuItemComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let buttonDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffMenuItemComponent;

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
    de = fixture.debugElement.query(By.css('[daff-menu-item]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-menu-item>', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-menu-item]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-menu-item]'));
    });

    it('should add a class of "daff-menu-item" to the host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-menu-item': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-menu-item': true,
      }));
    });
  });

  it('should have a role of menuitem', () => {
    expect(component.role).toBe('menuitem');
  });
});
