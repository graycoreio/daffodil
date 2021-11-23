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

import { DaffCardComponent } from '../card.component';

@Component ({
  template: `<daff-card></daff-card>`,
})

class WrapperComponent {}

describe('DaffCardComponent | Defaults', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffCardComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCardComponent,
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

  describe('using the orientation property of a card', () => {
    it('should set the default orientation to vertical', () => {
      expect(component.orientation).toEqual('vertical');
    });
  });

  describe('using the color property of a card', () => {
    it('should not set a default color', () => {
      expect(component.color).toBeFalsy();
    });
  });
});
