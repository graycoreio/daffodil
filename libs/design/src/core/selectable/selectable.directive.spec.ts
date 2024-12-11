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

import { DaffSelectableDirective } from './selectable.directive';

@Component({
  template: `
		<div daffSelected
      (becameSelected)="becameSelectedFunction($event)"
      [selected]="selected">
		</div>`,
})

class WrapperComponent {
  becameSelected = (val: boolean) => {};
  selected: boolean;
}

describe('@daffodil/design | DaffSelectableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffSelectableDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffSelectableDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffSelected]'));
    directive = de.injector.get(DaffSelectableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should add a class of "daff-selected" to the host element when selected is true', () => {
    wrapper.selected = true;
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-selected': true,
    }));
  });

  it('should not add a class of "daff-selected" to the host element when selected is false', () => {
    expect(de.classes['daff-selected']).toBeUndefined();
  });

  it('should emit on becameSelected when select is called', () => {
    spyOn(directive.becameSelected, 'emit');
    wrapper.selected = true;
    directive.select();

    expect(directive.becameSelected.emit).toHaveBeenCalledWith();
  });
});
