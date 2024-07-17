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

import { DaffModalHeaderComponent } from './modal-header.component';

@Component ({
  template: `<daff-modal-header [dismissible]="dismissible"></daff-modal-header>`,
})

class WrapperComponent {
  dismissible = true;
}

describe('@daffodil/design/modal | DaffModalHeaderComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffModalHeaderComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffModalHeaderComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-modal-header'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-modal-header>', () => {
    it('should add a class of "daff-modal-header" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-modal-header': true,
      }));
    });
  });

  describe('dismissible property', () => {
    it('should be set to true by default', () => {
      expect(component.dismissible).toBe(true);
    });
  });
});
