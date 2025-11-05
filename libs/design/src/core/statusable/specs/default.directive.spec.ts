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

import { DaffStatusableDirective } from '@daffodil/design';

@Component({
  template: `<div>Test</div>`,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'custom-component',
  hostDirectives: [
    {
      directive: DaffStatusableDirective,
      inputs: ['status'],
    },
  ],
})
class TestComponent {
  constructor(public statusDirective: DaffStatusableDirective) {
    this.statusDirective.defaultStatus = 'info';
  }
}

describe('@daffodil/design | DaffStatusableDirective | Default Status Behavior', () => {
  describe('when only defaultStatus is set', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let directive: DaffStatusableDirective;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TestComponent,
        ],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      directive = fixture.debugElement.injector.get(DaffStatusableDirective);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
      expect(directive).toBeTruthy();
    });

    it('should set the status to the defaultStatus', () => {
      expect(directive.status).toEqual('info');
    });
  });

  describe('when defaultStatus is set but status input is provided', () => {
    @Component({
      template: `<custom-component status="warn"></custom-component>`,
      imports: [
        TestComponent,
      ],
    })
    class WrapperComponent {}

    let wrapper: WrapperComponent;
    let de: DebugElement;
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
      de = fixture.debugElement.query(By.css('custom-component'));
      wrapper = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(wrapper).toBeTruthy();
    });

    it('should set the status to the user provided value', () => {
      expect(de.nativeElement.classList.contains('daff-warn')).toBeTruthy();
    });
  });
});
