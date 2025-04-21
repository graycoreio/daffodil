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

import { DaffioDocsMemberHeadingNameDirective } from './member-heading-name.directive';

@Component({
  template: `<div daffioDocsMemberHeadingName>Name</div>`,
  imports: [
    DaffioDocsMemberHeadingNameDirective,
  ],
})
class WrapperComponent {}

describe('DaffioDocsMemberHeadingNameDirective', () => {
  let wrapper: WrapperComponent;
  let heroBody: DebugElement;
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
    heroBody = fixture.debugElement.query(By.css('[daffioDocsMemberHeadingName]'));
    wrapper = heroBody.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffioDocsMemberHeadingName]',() => {
    it('should add a class of `daffio-docs-member-heading__name` to its host element', () => {
      expect(heroBody.nativeElement.classList.contains('daffio-docs-member-heading__name')).toEqual(true);
    });
  });
});
