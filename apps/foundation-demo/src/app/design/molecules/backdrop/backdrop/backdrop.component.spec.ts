import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropComponent } from './backdrop.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({ template: `
<backdrop
  [show]="showValue"
  [backdropIsVisible]="backdropIsVisibleValue"
  (backdropClicked)="backdropFunction()"></backdrop>
`})
class TestBackdropComponentWrapper {
  showValue: boolean = true;
  backdropIsVisibleValue: boolean = true;
  backdropFunction: Function = () => {};
}

describe('BackdropComponent', () => {
  let component: TestBackdropComponentWrapper;
  let fixture: ComponentFixture<TestBackdropComponentWrapper>;
  let backdrop: BackdropComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [ 
        TestBackdropComponentWrapper,
        BackdropComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBackdropComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    backdrop = fixture.debugElement.query(By.css('backdrop')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when show is true', () => {

    beforeEach(() => {
      backdrop.show = true;
      fixture.detectChanges();
    });
    
    it('should render backdrop', () => {
      let backdropElement = fixture.debugElement.query(By.css('.daff-backdrop'));

      expect(backdropElement).not.toBeNull();
    });
  });

  describe('when show is false', () => {

    beforeEach(() => {
      component.showValue = false;
      fixture.detectChanges();
    });
    
    it('should not render backdrop', () => {
      let backdropElement = fixture.debugElement.query(By.css('.daff-backdrop'));

      expect(backdropElement).toBeNull();
    });
  });

  describe('backdrop transparency', () => {
    beforeEach(() => {
      component.backdropIsVisibleValue = false;

      fixture.detectChanges();
    });

    it('should apply the transparency class to the backdrop if `backdropIsVisible` is false', () => {
      expect(fixture.debugElement.query(By.css('.daff-backdrop')).nativeElement.classList)
        .toContain("daff-backdrop--transparent");
    });
  });

  describe('when .daff-backdrop is clicked', () => {

    it('should emit backdropClicked', () => {
      let backdropElement = fixture.debugElement.query(By.css('.daff-backdrop'));
      spyOn(backdrop.backdropClicked, 'emit');

      backdropElement.nativeElement.click();

      expect(backdrop.backdropClicked.emit).toHaveBeenCalled();
    });
  });
});
