import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffListItemComponent } from './list-item.component';

@Component({
  template: `
    <daff-list-item>List Item</daff-list-item>
  `
})
class WrapperComponent {}

describe('DaffListItemComponent', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffListItemComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('daff-list-item'));
    wrapper = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-list-item>', () => {
    it('should add a class of "daff-list-item" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-list-item': true,
      }));
    });
  });
}); 