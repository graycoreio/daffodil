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

import { DaffSidebarHeaderTitleDirective } from './sidebar-header-title.directive';

@Component({
  template: `<h2 daffSidebarHeaderTitle>Title</h2>`,
  imports: [
    DaffSidebarHeaderTitleDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/sidebar | DaffSidebarHeaderTitleDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

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
    de = fixture.debugElement.query(By.css('[daffSidebarHeaderTitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-sidebar-header__title` to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-sidebar-header__title': true,
    }));
  });
});
