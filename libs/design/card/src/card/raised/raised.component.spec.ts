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

import { DaffRaisedCardComponent } from './raised.component';

@Component ({
  template: `
    <daff-raised-card></daff-raised-card>
    <a daff-raised-card></a>
  `,
  standalone: true,
  imports: [
    DaffRaisedCardComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/card | DaffRaisedCardComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let cardDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffRaisedCardComponent;

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
    de = fixture.debugElement.query(By.css('daff-raised-card'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-raised-card>', () => {
    beforeEach(() => {
      cardDE = fixture.debugElement.query(By.css('daff-raised-card'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-raised-card]'));
    });

    it('should add a class of "daff-raised-card" to the host element', () => {
      expect(cardDE.classes).toEqual(jasmine.objectContaining({
        'daff-raised-card': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-raised-card': true,
      }));
    });
  });
});
