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

import { DaffModalCloseDirective } from './modal-close.directive';
import { DaffModalService } from '../service/modal.service';

@Component({
  template: `
    <button daffModalClose></button>
  `,
  imports: [
    DaffModalCloseDirective,
  ],
  providers: [
    DaffModalService,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/modal | DaffModalCloseDirective', () => {
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
    de = fixture.debugElement.query(By.css('button[daffModalClose]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should set the type to button', () => {
    expect(de.attributes['type']).toBe('button');
  });
});
