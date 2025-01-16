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

import { DaffArticleEncapsulatedDirective } from './article-encapsulated.directive';

@Component({
  template: `
		<div daffArticleEncapsulated></div>`,
  standalone: false,
})

class WrapperComponent {}

describe('@daffodil/design | DaffArticleEncapsulatedDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffArticleEncapsulatedDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffArticleEncapsulatedDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffArticleEncapsulated]'));
    directive = de.injector.get(DaffArticleEncapsulatedDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should add a class of "daff-ae" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-ae': true,
    }));
  });
});
