import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffContainerComponent, DaffContainerSize } from './container.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<daff-container [size]="size"></daff-container>`
})
class WrapperComponent {
  size: DaffContainerSize;
}

describe('DaffContainerComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffContainerComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-container'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  describe('setting the size of the container', () => {
    describe('when size is xs', () => {
      it('should set "daff-container--xs" on host element', () => {
        wrapper.size = 'xs';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-container--xs')).toEqual(true);
      });
    });

    describe('when size is sm', () => {
      it('should set "daff-container--sm" on host element', () => {
        wrapper.size = 'sm';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-container--sm')).toEqual(true);
      });
    });

    describe('when size is md', () => {
      it('should set "daff-container--md" on host element', () => {
        wrapper.size = 'md';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-container--md')).toEqual(true);
      });
    });

    describe('when size is lg', () => {
      it('should set "daff-container--lg" on host element', () => {
        wrapper.size = 'lg';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-container--lg')).toEqual(true);
      });
    });

    describe('when size is xl', () => {
      it('should set "daff-container--xl" on host element', () => {
        wrapper.size = 'xl';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-container--xl')).toEqual(true);
      });
    });
  });
});
