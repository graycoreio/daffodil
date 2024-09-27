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
  template: `<daff-sidebar-header>Header</daff-sidebar-header>`,
  standalone: true,
  imports: [
    DaffSidebarHeaderComponent,
  ],
})
class WrapperComponent {}

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
});
