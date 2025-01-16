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

import { DaffOpenableDirective } from './openable.directive';

@Component({
  template: `
		<div daffOpenable
			(toggled)="toggledFunction($event)"
      [open]="open">
		</div>`,
  standalone: false,
})

class WrapperComponent {
  toggledFunction = (val: boolean) => {};
  open: boolean;
}

describe('@daffodil/design | DaffOpenableDirective | Default as Stateless', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffOpenableDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffOpenableDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffOpenable]'));
    directive = de.injector.get(DaffOpenableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should add a class of "daff-open" to the host element when open is true', () => {
    wrapper.open = true;
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-open': true,
    }));
  });

  it('should not add a class of "daff-open" to the host element when open is false', () => {
    expect(de.classes['daff-open']).toBeUndefined();
  });


  it('should emit true on toggled when reveal is called', () => {
    spyOn(wrapper, 'toggledFunction');
    directive.reveal();

    expect(wrapper.toggledFunction).toHaveBeenCalledWith(true);
  });

  it('should emit false on toggled when hide is called', () => {
    spyOn(wrapper, 'toggledFunction');
    directive.hide();

    expect(wrapper.toggledFunction).toHaveBeenCalledWith(false);
  });
});
