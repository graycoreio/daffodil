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

import { DaffSizeAllType } from '@daffodil/design';

import { DaffContainerComponent } from './container.component';

@Component({
  template: `<daff-container [size]="size"></daff-container>`,
  imports: [
    DaffContainerComponent,
  ],
})
class WrapperComponent {
  size: DaffSizeAllType;
}

describe('@daffodil/design/container | DaffContainerComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffContainerComponent;
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
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-container'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('<daff-container>', () => {
    it('should add a class of "daff-container" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-container': true,
      }));
    });
  });

  describe('setting the size', () => {
    it('should take size as an input', () => {
      wrapper.size = 'md';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-md')).toEqual(true);
    });

    it('should not set a default size', () => {
      de = fixture.debugElement.query(By.css('daff-container'));
      expect(de.nativeElement.classList.toString()).toEqual('daff-container');
    });
  });
});
