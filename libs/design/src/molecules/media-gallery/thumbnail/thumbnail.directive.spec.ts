import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffThumbnailDirective } from './thumbnail.directive';

@Component({
  template: `<div daffThumbnail></div>`
})

class WrapperComponent {}

describe('DaffThumbnailDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffThumbnailDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffThumbnail]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffThumbnail]', () => {
    it('should add a class of "daff-thumbnail" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-thumbnail': true,
      }));
    });
  });
});
