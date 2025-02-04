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

import { DaffStrokedCardComponent } from './stroked.component';

@Component ({
  template: `
    <daff-stroked-card></daff-stroked-card>
    <a daff-stroked-card></a>
  `,
  standalone: true,
  imports: [
    DaffStrokedCardComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/card | DaffStrokedCardComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let cardDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffStrokedCardComponent;

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
    de = fixture.debugElement.query(By.css('daff-stroked-card'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-stroked-card>', () => {
    beforeEach(() => {
      cardDE = fixture.debugElement.query(By.css('daff-stroked-card'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-stroked-card]'));
    });

    it('should add a class of "daff-stroked-card" to the host element', () => {
      expect(cardDE.classes).toEqual(jasmine.objectContaining({
        'daff-stroked-card': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-stroked-card': true,
      }));
    });
  });
});
