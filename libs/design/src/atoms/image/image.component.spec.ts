import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffImageComponent } from './image.component';

@Component({
  template: `<daff-image [src]="src" [alt]="alt" [width]="width" [height]="height"></daff-image>`
})

class WrapperComponent {
  src = 'assets/image.svg';
  alt = 'image';
  width = 100;
  height = 100;
}

describe('DaffImageComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffImageComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffImageComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-image'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take `src` as an input', () => {
    wrapper.src = '/assets/image.svg';
    fixture.detectChanges();
    expect(component.src).toEqual('/assets/image.svg');
  });

  it('should be able to take `alt` as an input', () => {
    wrapper.alt = 'alt tag';
    fixture.detectChanges();
    expect(component.alt).toEqual('alt tag');
  });

  it('should be able to take `width` as an input', () => {
    wrapper.width = 100;
    fixture.detectChanges();
    expect(component.width).toEqual(100);
  });

  it('should be able to take `height` as an input', () => {
    wrapper.height = 100;
    fixture.detectChanges();
    expect(component.height).toEqual(100);
  });

  it('should throw an error when src is invalid', () => {
    wrapper.src = '';
    expect(() => fixture.detectChanges()).toThrowError(/src/);
  });

  it('should throw an error when alt is invalid', () => {
    wrapper.alt = '';
    expect(() => fixture.detectChanges()).toThrowError(/alt/);
  });

  it('should throw an error when width is invalid', () => {
    wrapper.width = null;
    expect(() => fixture.detectChanges()).toThrowError(/width/);
  });

  it('should throw an error when height is invalid', () => {
    wrapper.height = null;
    expect(() => fixture.detectChanges()).toThrowError(/height/);
  });
});
