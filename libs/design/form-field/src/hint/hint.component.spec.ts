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

import { DaffHintComponent } from './hint.component';

@Component({
  template: `<daff-hint>Hint</daff-hint>`,
  standalone: true,
  imports: [
    DaffHintComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design | DaffHintComponent', () => {
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
    de = fixture.debugElement.query(By.css('daff-hint'));
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
});
