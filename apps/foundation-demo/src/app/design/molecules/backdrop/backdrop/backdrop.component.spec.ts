import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffBackdropComponent } from './backdrop.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({ template: `
<daff-backdrop
  [show]="showValue"
  [backdropIsVisible]="backdropIsVisibleValue"
  (backdropClicked)="backdropFunction()"></daff-backdrop>
`})
class TestDaffBackdropComponentWrapper {
  showValue: boolean = true;
  backdropIsVisibleValue: boolean = true;
  backdropFunction: Function = () => {};
}

describe('DaffBackdropComponent', () => {
  let component: TestDaffBackdropComponentWrapper;
  let fixture: ComponentFixture<TestDaffBackdropComponentWrapper>;
  let backdrop: DaffBackdropComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [ 
        TestDaffBackdropComponentWrapper,
        DaffBackdropComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffBackdropComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    backdrop = fixture.debugElement.query(By.css('daff-backdrop')).componentInstance;
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
