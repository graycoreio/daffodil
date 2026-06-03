import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffSelectableDirective } from '@daffodil/design';

@Component({
  template: `
		<div daffSelected
      (becameSelected)="becameSelectedFunction($event)"
      [selected]="selected()">
		</div>`,
  imports: [
    DaffSelectableDirective,
  ],
})

class WrapperComponent {
  becameSelected = (val: boolean) => {};
  selected = signal<boolean>(undefined);
}

describe('@daffodil/design | DaffSelectableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffSelectableDirective;

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
    de = fixture.debugElement.query(By.css('[daffSelected]'));
    directive = de.injector.get(DaffSelectableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should add a class of "daff-selected" to the host element when selected is true', () => {
    wrapper.selected.set(true);
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
    wrapper.selected.set(true);
    directive.select();

    expect(directive.becameSelected.emit).toHaveBeenCalledWith();
  });
});
