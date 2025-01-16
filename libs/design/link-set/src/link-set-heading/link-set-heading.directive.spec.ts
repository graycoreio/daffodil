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

import { DaffLinkSetHeadingDirective } from './link-set-heading.directive';

@Component({
  template: `<div daffLinkSetHeading>Heading</div>`,
  imports: [
    DaffLinkSetHeadingDirective,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/link-set | DaffLinkSetHeadingDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffLinkSetHeading]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffLinkSetHeading]', () => {
    it('should add a class of "daff-link-set__heading" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-link-set__heading': true,
      }));
    });
  });
});
