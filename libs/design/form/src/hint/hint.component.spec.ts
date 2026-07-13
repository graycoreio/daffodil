import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffHintComponent } from '@daffodil/design/form';

@Component({
  template: `<daff-hint [validated]="validated()">Hint</daff-hint>`,
  imports: [
    DaffHintComponent,
  ],
})

class WrapperComponent {
  validated = signal(false);
}

describe('@daffodil/design/form | DaffHintComponent', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let component: DaffHintComponent;
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
    de = fixture.debugElement.query(By.css('daff-hint'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-hint" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-hint': true,
    }));
  });

  describe('validated property', () => {
    it('should take validated as an input', () => {
      expect(component.validated()).toEqual(wrapper.validated());
    });

    it('should add a class of "validated" to the host element when validated is true', () => {
      wrapper.validated.set(true);
      fixture.detectChanges();

      expect(de.classes['validated']).toBeTrue();
    });
  });
});
