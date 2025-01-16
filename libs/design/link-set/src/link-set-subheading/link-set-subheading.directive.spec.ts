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

import { DaffLinkSetSubheadingDirective } from './link-set-subheading.directive';

@Component({
  template: `<div daffLinkSetSubheading>Subheading</div>`,
  imports: [
    DaffLinkSetSubheadingDirective,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/link-set | DaffLinkSetSubheadingDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffLinkSetSubheading]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffLinkSetSubheading]', () => {
    it('should add a class of "daff-link-set__subheading" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-link-set__subheading': true,
      }));
    });
  });
});
