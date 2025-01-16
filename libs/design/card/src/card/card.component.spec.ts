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

import { DaffPalette } from '@daffodil/design';

import {
  DaffCardComponent,
  DaffCardOrientation,
} from './card.component';

@Component ({
  template: `<daff-card [color]="color" [orientation]="orientation"></daff-card>`,
  imports: [
    DaffCardComponent,
  ],
})

class WrapperComponent {
  color: DaffPalette;
  orientation: DaffCardOrientation;
}

describe('@daffodil/design/card | DaffCardComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
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
    it('should add a class of "daff-card" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-card': true,
      }));
    });
  });

  it('should take color as an input', () => {
    wrapper.color = 'primary';
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
  });

  it('should take orientation as an input', () => {
    wrapper.orientation = 'vertical';
    fixture.detectChanges();

    expect(component.orientation).toEqual('vertical');
  });

  describe('using the orientation property of a card', () => {
    it('should set the default orientation to vertical', () => {
      expect(component.orientation).toEqual('vertical');
    });

    it('should add the class of the defined orientation to the host element', () => {
      wrapper.orientation = 'vertical';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-card--vertical')).toEqual(true);
    });

    describe('when orientation="vertical"', () => {
      it('should add a class of "daff-card--vertical" to the host element', () => {
        wrapper.orientation = 'vertical';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-card--vertical')).toBeTruthy();
      });
    });

    describe('when orientation="horizontal"', () => {
      it('should add a class of "daff-card--horizontal" to the host element', () => {
        wrapper.orientation = 'horizontal';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-card--horizontal')).toBeTruthy();
      });
    });
  });
});
