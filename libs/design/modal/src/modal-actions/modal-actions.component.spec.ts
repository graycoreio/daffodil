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

import { DaffModalActionsComponent } from './modal-actions.component';

@Component({
  template: `
    <daff-modal-actions>
      <button>Close</button>
      <button>Save</button>
    </daff-modal-actions>
  `,
  imports: [
    DaffModalActionsComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/modal | DaffModalActionsComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffModalActionsComponent;
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

    de = fixture.debugElement.query(By.css('daff-modal-actions'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-modal-actions" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-modal-actions': true,
    }));
  });
});
