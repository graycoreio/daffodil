import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffLoadingIconComponent } from './loading-icon.component';
import { DaffPalette } from '../../core/colorable/colorable';

@Component({ template: '<daff-loading-icon class="host-element" [color]="color" [diameter]="diameter"></daff-loading-icon>' })
class WrapperComponent {
  color: DaffPalette;
  diameter = 100;
}

describe('DaffLoadingIconComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let component: DaffLoadingIconComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffLoadingIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-loading-icon'));
    component = fixture.debugElement.query(By.css('daff-loading-icon')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('can take a `diameter` as input which sets max-width on the `daff-loading-icon` host', () => {
    wrapper.diameter = 50;
    fixture.detectChanges();
    expect(de.nativeElement.style.maxWidth).toEqual("50px");
  });

  describe('using a colored variant of a loading icon',() => {
    let loadingIconDe;

    it('should set a color class on the loading icon', () => {
      wrapper.color = "secondary";
      fixture.detectChanges();
      
      loadingIconDe = fixture.debugElement.query(By.css('daff-loading-icon'));
      expect(loadingIconDe.nativeElement.classList.contains('daff-secondary')).toEqual(true);
    });
  });
});


describe('DaffLoadingIconComponent | Defaults', () => {
  let component: DaffLoadingIconComponent;
  let fixture: ComponentFixture<DaffLoadingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffLoadingIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffLoadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has a default value of 60 for the diameter', () => {
    expect(component.diameter).toEqual(60);
  });

  it('should set the default color to primary', () => {
    expect(component.color).toEqual("primary");
  });
});


