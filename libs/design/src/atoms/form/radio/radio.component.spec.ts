import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffRadioComponent } from './radio.component';

@Component ({
  template: `<daff-radio [id]="idValue"></daff-radio>`
})
class WrapperComponent {
  idValue: string;
}

describe('DaffRadioComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffRadioComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffRadioComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.idValue = 'radioId';
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('daff-radio'));
    component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-radio>', () => {
    it('should add a class of "daff-radio" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-radio': true,
      }));
    });
  })

  describe('when a <daff-radio> is selected', () => {
    it('should add a class of "daff-radio--selected" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-radio--selected': false,
      }));
      component.selected = true;
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-radio--selected': true,
      }));
    });
  });

  describe('when <daff-radio> is in focus', () => {
    it('should add a class of ""daff-radio--focused" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-radio--focused': false,
      }));
      component._focused = true;
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-radio--focused': true,
      }));
    });
  });

  it('should set name on <input>', () => {
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.properties.name).toEqual(component.name);
  });

  it('should set "htmlFor" on label', () => {
    const label = fixture.debugElement.query(By.css('label'));

    expect(label.attributes.for).toEqual(wrapper.idValue);
  });

  it('should emit a changed event when the radio is clicked', () => {
    spyOn(component.changed, 'emit');
    fixture.debugElement.query(By.css('input')).nativeElement.click();

    expect(component.changed.emit).toHaveBeenCalledWith(component.value);
  });
});

@Component ({
  template: `<daff-radio></daff-radio>`
})
class WrapperIdNotDefinedComponent {}

describe('DaffRadioComponent - id not provided', () => {
  let fixture: ComponentFixture<WrapperIdNotDefinedComponent>;
  let wrapper: WrapperIdNotDefinedComponent;
  let component: DaffRadioComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffRadioComponent,
        WrapperIdNotDefinedComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperIdNotDefinedComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
  });

  it('should define its own id', () => {
    expect(component.id).toEqual(component._uniqueRadioId);
  });
});
