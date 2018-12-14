import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffCalloutBodyComponent } from './callout-body.component';

@Component({
  template: `
    <p daff-callout-body>Lorem Ipsum</p>
  `
})
 
class Wrapper {
}

describe('DaffCalloutBodyComponent', () => {
  let wrapper: Wrapper;
  let component: DaffCalloutBodyComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<Wrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCalloutBodyComponent,
        Wrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrapper);
    de = fixture.debugElement.query(By.css('[daff-callout-body]'));
    component = de.componentInstance;
     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[daff-callout-body]',() => {
    it('should add a class of `daff-callout__body` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout__body')).toEqual(true);
    });
  });
}); 