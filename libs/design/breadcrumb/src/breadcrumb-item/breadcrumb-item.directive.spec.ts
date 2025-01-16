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

import { DaffBreadcrumbItemDirective } from './breadcrumb-item.directive';

@Component({
  template: `<li daffBreadcrumbItem [active]="active">Breadcrumb Item</li>`,
  imports: [
    DaffBreadcrumbItemDirective,
  ],
})
class WrapperComponent {
  active = false;
}

describe('@daffodil/design/breadcrumb | DaffBreadcrumbItemDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffBreadcrumbItemDirective;

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
    de = fixture.debugElement.query(By.css('[daffBreadcrumbItem]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('li[daffBreadcrumbItem]', () => {
    it('should add a class of "daff-breadcrumb__item" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-breadcrumb__item': true,
      }));
    });
  });

  it('should set the `aria-current` to page if it`s the active breadcrumb', () => {
    wrapper.active = true;
    fixture.detectChanges();

    expect(de.nativeElement.ariaCurrent).toEqual('page');
  });

  it('should set the `aria-current` to false if it`s not the active breadcrumb', () => {
    wrapper.active = false;
    fixture.detectChanges();

    expect(de.nativeElement.ariaCurrent).toEqual('false');
  });
});
