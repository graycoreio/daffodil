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

import { DaffSidebarHeaderActionDirective } from './sidebar-header-action.directive';

@Component({
  template: `
    <div daffSidebarHeaderAction>Action</div>
  `,
})
class WrapperComponent {}

describe('@daffodil/design/sidebar | DaffSidebarHeaderActionDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffSidebarHeaderActionDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffSidebarHeaderAction]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffSidebarHeaderAction]',() => {
    it('should add a class of `daff-sidebar-header__action` to its host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-sidebar-header__action': true,
      }));
    });
  });
});
