import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffBackdropComponent } from './backdrop.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({ template: `
<daff-backdrop
  [fullscreen]="fullscreen"
  [transparent]="transparentValue"
  (backdropClicked)="backdropFunction()"></daff-backdrop>
`})
class WrapperComponent {
  fullscreen = true;
  showValue = true;
  transparentValue = true;
  backdropFunction: Function = () => {};
}

describe('DaffBackdropComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let backdrop: DaffBackdropComponent;
  let backdropHost: DebugElement;
  let backdropEl: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [ 
        WrapperComponent,
        DaffBackdropComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    backdrop = fixture.debugElement.query(By.css('daff-backdrop')).componentInstance;
    backdropHost = fixture.debugElement.query(By.css('daff-backdrop'));
    backdropEl = fixture.debugElement.query(By.css('.daff-backdrop'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when I make the backdrop NOT transparent', () => {
    it('should not add the class `daff-backdrop--transparent` to the host element', () => {
      wrapper.transparentValue = false;
      fixture.detectChanges();
      
      expect(backdropEl.nativeElement.classList).not.toContain('daff-backdrop--transparent');
    });
  });

  describe('when I make the backdrop transparent', () => {
    it('should add the class `daff-backdrop--transparent` to the host element', () => {
      wrapper.transparentValue = true;
      fixture.detectChanges();
      
      expect(backdropEl.nativeElement.classList).toContain('daff-backdrop--transparent');
    });
  });

  describe('when the backdrop host element is clicked', () => {
    it('should emit backdropClicked', () => {
      spyOn(backdrop.backdropClicked, 'emit');

      backdropHost.nativeElement.click();

      expect(backdrop.backdropClicked.emit).toHaveBeenCalled();
    });
  });

  describe('when fullscreen is set to true on the backdrop', () => {
    it('should add the class `daff-backdrop--fullscreen to the host element', () => {
        expect(backdrop.fullscreen).toEqual(true);
        expect(backdropEl.classes).toEqual(jasmine.objectContaining({
          'daff-backdrop--fullscreen': true,
        }));
        wrapper.fullscreen = false;
        fixture.detectChanges();
        expect(backdropEl.classes).toEqual(jasmine.objectContaining({
          'daff-backdrop--fullscreen': false,
        }));
    });
  });
});


describe('DaffBackdropComponent | Defaults', () => {
  let fixture: ComponentFixture<DaffBackdropComponent>;
  let component: DaffBackdropComponent;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [ 
        DaffBackdropComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set transparent to `false` by default', () => {
    expect(component.transparent).toBe(false);
  });
});
