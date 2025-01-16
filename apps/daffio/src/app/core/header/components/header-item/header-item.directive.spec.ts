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

import { DaffioHeaderItemDirective } from './header-item.directive';

@Component({
  template: `<a daffioHeaderItem [active]="active">Header Item</a>`,
  standalone: false,
})
class WrapperComponent {
  active: boolean;
}

describe('DaffioHeaderItemDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffioHeaderItemDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioHeaderItemDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffioHeaderItem]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daffio-header-item" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-header-item': true,
    }));
  });

  it('should be able to take `active` as an input', () => {
    expect(component.active).toEqual(wrapper.active);
  });

  it('should add a class of "active" to the host element when active is true', () => {
    wrapper.active = true;
    fixture.detectChanges();

    expect(de.classes['active']).toBeTrue();
  });
});
