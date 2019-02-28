import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffLinkComponent } from './link.component';
import { By } from '@angular/platform-browser';
import { DaffPalette } from '../../core/colorable/colorable';

@Component({
  template: `<a daff-link [color]="color">Daff Link</a>`
})
class WrapperComponent {
  color: DaffPalette;
}

describe('DaffLinkComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffLinkComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('daff-link',() => {
    it('should add a class of `daff-link` to its host element', () => {
      expect(fixture.debugElement.query(By.css('a[daff-link]')).nativeElement.classList.contains('daff-link')).toEqual(true);
    });
  });

  describe('using a colored variant of a link',() => {
    let linkDE;
    
    it('should set a color class on the link', () => {
      component.color = "primary";
      fixture.detectChanges();
      
      linkDE = fixture.debugElement.query(By.css('a[daff-link]'));
      expect(linkDE.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should set the default color to the contrasting theme color', () => {
      linkDE = fixture.debugElement.query(By.css('a[daff-link]'));
      expect(linkDE.nativeElement.classList.contains('daff-theme-contrast')).toEqual(true);
    });
  });
});
