import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import {
  DaffOrientation,
  DaffOrientableDirective,
} from '@daffodil/design';

@Component({
  template: '',
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'custom-component',
  hostDirectives: [
    {
      directive: DaffOrientableDirective,
      inputs: ['orientation'],
    },
  ],
})

class WrapperComponent {
  orientationValue: DaffOrientation;

  constructor(private orientation: DaffOrientableDirective) {
    this.orientation.defaultOrientation = 'vertical';
  }
}

describe('@daffodil/design | DaffOrientableDirective | Default Defined', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffOrientableDirective;

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

    directive = fixture.debugElement.injector.get(DaffOrientableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  describe('if a defaultOrientation is defined', () => {
    it('should set the orientation to the defaultOrientation', () => {
      expect(directive.orientation).toEqual('vertical');
    });
  });
});
