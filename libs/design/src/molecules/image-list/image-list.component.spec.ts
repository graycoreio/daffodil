import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffImageListComponent } from './image-list.component';

@Component ({
  template: `<daff-image-list></daff-image-list>`
})

class WrapperComponent {}

describe('DaffImageListComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffImageListComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffImageListComponent,
        WrapperComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-image-list'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-image-list>', () => {
    it('should add a class of "daff-image-list" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-image-list': true,
      }));
    });
  });
});
