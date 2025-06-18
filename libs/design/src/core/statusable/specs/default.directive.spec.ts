import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import {
  DaffStatus,
  DaffStatusableDirective,
} from '@daffodil/design';

@Component({
  template: '',
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'custom-component',
  hostDirectives: [
    {
      directive: DaffStatusableDirective,
      inputs: ['status'],
    },
  ],
})

class WrapperComponent {
  statusValue: DaffStatus;

  constructor(private status: DaffStatusableDirective) {
    this.status.defaultStatus = 'info';
  }
}

describe('@daffodil/design | DaffStatusableDirective | Default Defined', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffStatusableDirective;

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

    directive = fixture.debugElement.injector.get(DaffStatusableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  describe('if a defaultStatus is defined', () => {
    it('should set the status to the defaultStatus', () => {
      expect(directive.status).toEqual('info');
    });
  });
});
