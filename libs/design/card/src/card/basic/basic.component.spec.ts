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

import { DaffCardComponent } from './basic.component';

@Component ({
  template: `
    <daff-card></daff-card>
    <a daff-card></a>
  `,
  standalone: true,
  imports: [
    DaffCardComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/card | DaffCardComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let cardDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffCardComponent;

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
    de = fixture.debugElement.query(By.css('daff-card'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-card>', () => {
    beforeEach(() => {
      cardDE = fixture.debugElement.query(By.css('daff-card'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-card]'));
    });

    it('should add a class of "daff-card" to the host element', () => {
      expect(cardDE.classes).toEqual(jasmine.objectContaining({
        'daff-card': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-card': true,
      }));
    });
  });
});
