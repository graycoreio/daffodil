import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffLoadingIconComponent } from './loading-icon.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({ template: '<daff-loading-icon class="host-element" [diameter]="diameter"></daff-loading-icon>' })
class WrapperComponent {
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

  it('can take a `diameter` as input which sets max-width of the `daffloading-icon` host', () => {
    wrapper.diameter = 50;
    fixture.detectChanges();
    expect(de.nativeElement.style.maxWidth).toEqual("50px");
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
});


