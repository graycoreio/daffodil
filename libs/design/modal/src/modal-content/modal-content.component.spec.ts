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

import { DaffModalContentComponent } from './modal-content.component';

@Component({
  template: `
    <daff-modal-content>
      Content
    </daff-modal-content>
  `,
  imports: [
    DaffModalContentComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/modal | DaffModalContentComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffModalContentComponent;
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

    de = fixture.debugElement.query(By.css('daff-modal-content'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-modal-content" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-modal-content': true,
    }));
  });
});
