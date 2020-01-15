import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffListSubheaderDirective } from './list-subheader.directive';

@Component({
  template: `
    <div daffListSubheader>Lorem Ipsum</div>
  `
})
class WrapperComponent {}

describe('DaffListSubheaderDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffListSubheaderDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daffListSubheader]'));
    wrapper = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffListSubheader]', () => {
    it('should add a class of "daff-list__subheader" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-list__subheader': true,
      }));
    });
  });
}); 