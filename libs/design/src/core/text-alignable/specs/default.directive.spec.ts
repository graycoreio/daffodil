import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import {
  DaffTextAlignment,
  DaffTextAlignableDirective,
} from '@daffodil/design';

@Component({
  template: '',
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'custom-component',
  hostDirectives: [
    {
      directive: DaffTextAlignableDirective,
      inputs: ['textAlignment'],
    },
  ],
})

class WrapperComponent {
  textAlignmentValue: DaffTextAlignment;

  constructor(private textAlignment: DaffTextAlignableDirective) {
    this.textAlignment.defaultAlignment = 'right';
  }
}

describe('@daffodil/design | DaffTextAlignableDirective | Default Defined', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffTextAlignableDirective;

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

    directive = fixture.debugElement.injector.get(DaffTextAlignableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  describe('if a defaultAlignment is defined', () => {
    it('should set the textAlignment to the defaultAlignment', () => {
      expect(directive.textAlignment).toEqual('right');
    });
  });
});
