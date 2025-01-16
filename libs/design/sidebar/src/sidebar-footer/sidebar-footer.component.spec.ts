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

import { DaffSidebarFooterComponent } from './sidebar-footer.component';

@Component({
  template: `<daff-sidebar-footer>Footer</daff-sidebar-footer>`,
  imports: [
    DaffSidebarFooterComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/sidebar | DaffSidebarFooterComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
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

    de = fixture.debugElement.query(By.css('daff-sidebar-footer'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-sidebar-footer` to its host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-sidebar-footer': true,
    }));
  });
});
