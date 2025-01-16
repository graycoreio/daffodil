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

import { DaffCompactableDirective } from './compactable.directive';

@Component({
  template: `
		<div daffCompactable [compact]="compact"></div>`,
  standalone: false,
})

class WrapperComponent {
  compact: boolean;
}

describe('@daffodil/design | DaffCompactableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffCompactableDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffCompactableDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffCompactable]'));

    directive = de.injector.get(DaffCompactableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should take compact as an input', () => {
    expect(directive.compact).toEqual(wrapper.compact);
  });

  it('should add a class of .daff-compact to the host element if compact is set to true', () => {
    wrapper.compact = true;
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-compact': true,
    }));
  });

  it('should not add a class of .daff-compact to the host element if compact is set to false', () => {
    wrapper.compact = false;
    fixture.detectChanges();

    expect(de.classes['daff-skeleton']).toBeUndefined();
  });
});
