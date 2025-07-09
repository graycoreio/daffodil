import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DAFF_SWITCH_COMPONENTS,
  DaffSwitchComponent,
} from '@daffodil/design/switch';


@Component({ template: `
  <daff-switch>Wifi</daff-switch>`,
imports: [
  DAFF_SWITCH_COMPONENTS,
]})

class WrapperComponent {}

describe('@daffodil/design/switch | DaffSwitchComponent | Defaults', () => {
  let wrapper: WrapperComponent;
  let component: DaffSwitchComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-switch'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-switch" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-switch': true,
    }));
  });

  it('should have a generated id for the label', () => {
    expect(component.labelId).toMatch('daff-switch-[0-9]*-label');
  });

  it('should have a generated id for the switch control', () => {
    expect(component.toggleId).toMatch('daff-switch-[0-9]*');
  });

  it('should set `left` as the default labelPosition', () => {
    expect(component.labelPosition).toEqual('left');
  });
});
