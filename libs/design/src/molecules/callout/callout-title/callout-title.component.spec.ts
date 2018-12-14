import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffCalloutTitleComponent } from './callout-title.component';

@Component({
  template: `
    <h3 daff-callout-title>Lorem Ipsum</h3>
  `
})
 
class Wrapper {
}

describe('DaffCalloutTitleComponent', () => {
  let wrapper: Wrapper;
  let component: DaffCalloutTitleComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<Wrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCalloutTitleComponent,
        Wrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrapper);
    de = fixture.debugElement.query(By.css('[daff-callout-title]'));
    component = de.componentInstance;
     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[daff-callout-title]',() => {
    it('should add a class of `daff-callout__title` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout__title')).toEqual(true);
    });
  });
}); 