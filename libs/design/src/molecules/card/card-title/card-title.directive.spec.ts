import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffCardTitleDirective } from './card-title.directive';

@Component({
  template: `<div daffCardTitle></div>`
})

class WrapperComponent {}

describe('DaffCardTitleDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCardTitleDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffCardTitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCardTitle]', () => {
    it('should add a class of "daff-card__title" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-card__title': true,
      }));
    });
  });
});
