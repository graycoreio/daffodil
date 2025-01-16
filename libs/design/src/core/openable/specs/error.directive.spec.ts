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

import { DaffOpenableDirective } from '../openable.directive';
import { DaffOpenableStateError } from '../utils/state-error';

@Component({
  template: '',
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'stateful-component',
  standalone: true,
  hostDirectives: [
    {
      directive: DaffOpenableDirective,
      inputs: ['open'],
      outputs: ['toggled'],
    },
  ],
})

class StatefulComponent {
  constructor(public openDirective: DaffOpenableDirective) {
    this.openDirective.stateless = false;
  }
}

@Component({
  template: `<stateful-component [open]="true"></stateful-component>`,
  imports: [
    StatefulComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design | DaffOpenableDirective | Not Stateless | Error', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let directive: DaffOpenableDirective;

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
  });

  it('should throw an error if open is set as an input property on a component that is not stateless', () => {
    expect(() => {
      fixture.detectChanges();
    }).toThrowError(DaffOpenableStateError);
  });
});
