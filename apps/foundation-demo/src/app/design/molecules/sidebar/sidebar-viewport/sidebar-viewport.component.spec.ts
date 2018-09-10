import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarViewportComponent } from './sidebar-viewport.component';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
import { DaffSidebarMode } from '../helper/sidebar-mode';
import { ofType } from '@ngrx/effects';

@Component({template: `
  <div class="sidebar-content-wrapper">
    <daff-sidebar-viewport
      [backdropIsVisible]="backdropIsVisible"
      [mode]="mode"
      [opened]="open" 
      (onBackdropClicked)="incrementBackdropClicked()"></daff-sidebar-viewport>
  </div>
`})
class TestSidebarViewportWrapper {
  open: boolean = false;

  backdropIsVisible : boolean = false;

  mode: DaffSidebarMode = "side";
  
  backdropClickedCounter: number = 0;

  incrementBackdropClicked() {
    this.backdropClickedCounter++;
  }

  reset() {
    this.backdropClickedCounter = 0;
  }
}

describe('DaffSidebarViewportComponent', () => {
  let component: TestSidebarViewportWrapper;
  let fixture: ComponentFixture<TestSidebarViewportWrapper>;
  let sidebarViewport: DaffSidebarViewportComponent;
  let backdrop: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        TestSidebarViewportWrapper,
        DaffSidebarViewportComponent,
        DaffSidebarComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSidebarViewportWrapper);
    component = fixture.componentInstance;
    sidebarViewport = fixture.debugElement.query(By.css('daff-sidebar-viewport')).componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the _animationState should be `void` by default', () => {
    expect(sidebarViewport._animationState).toEqual("void");
  });

  it('should not have the backdrop by default', () => {
    expect(sidebarViewport.hasBackdrop).toBe(false);
    expect(fixture.debugElement.query(By.css('.daff-sidebar-backdrop'))).toBeNull();
  });

  it('should be `side` mode by default', () => {
    expect(sidebarViewport.mode).toBe('side');
  });

  describe('backdrop transparency', () => {
    beforeEach(() => {
      component.mode = "over";
      component.open = true;

      fixture.detectChanges();
    });

    it('should apply the transparency class to the backdrop if `backdropIsVisible` is false', () => {
      component.backdropIsVisible = false;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.daff-sidebar-backdrop')).nativeElement.classList)
        .toContain("daff-sidebar-backdrop--transparent");
    })
  })

  describe('over mode' , () => {
    beforeEach(() => {
      component.mode = "over";
      fixture.detectChanges();
    });

    afterEach(() => {
        component.reset();
    });

    describe('when not open', () => {
      beforeEach(() => {
        component.open = false;
        fixture.detectChanges();
      });

      it('should not show the backdrop', () => {
        expect(sidebarViewport.backdropIsVisible).toEqual(false);
        expect(fixture.debugElement.query(By.css('.daff-sidebar-backdrop'))).toBeNull();
      });
    });

    describe('when open', () => {
      beforeEach(() => {
        component.open = true;
        component.backdropIsVisible = true;
        fixture.detectChanges();

        backdrop = fixture.debugElement.query(By.css('.daff-sidebar-backdrop')).nativeElement;
      });

      it('should show the backdrop', () => {
        expect(sidebarViewport.hasBackdrop).toBe(true);
      });

      it('should emit `onBackdropClicked` when the backdrop is clicked', () => {
        backdrop.click();
        expect(component.backdropClickedCounter).toEqual(1);
      });
    });
  });
  

  describe('push mode', () => {
    beforeEach(() => {
      component.mode = "push";
      fixture.detectChanges();
    });

    afterEach(() => {
      component.reset();
    });

    describe('when open', () => {
      beforeEach(() => {
        component.open = true;
        fixture.detectChanges();
        backdrop = fixture.debugElement.query(By.css('.daff-sidebar-backdrop')).nativeElement;

      });

      it('should show the backdrop', () => {
        expect(sidebarViewport.hasBackdrop).toBe(true);
      });

      it('should emit `onBackdropClicked` when the backdrop is clicked', () => {
        backdrop.click();
        expect(component.backdropClickedCounter).toEqual(1);
      });
    });

    describe('when closed', () => {
      beforeEach(() => {
        component.open = false;
        fixture.detectChanges();
      });

      it('should not show the backdrop', () => {
        expect(sidebarViewport.backdropIsVisible).toEqual(false);
        expect(fixture.debugElement.query(By.css('.daff-sidebar-backdrop'))).toBeNull();
      });
    });
  });

  describe('side mode', () => {

    beforeEach(() => {
      component.mode = "side";
      fixture.detectChanges();
    });

    it('should not have the backdrop by default', () => {
      expect(sidebarViewport.hasBackdrop).toBe(false);
    });

    it('should not animate regardless of state changes', () => {
      component.open = false;
      fixture.detectChanges();

      expect(sidebarViewport._animationState).toEqual("void");

      component.open = true;
      fixture.detectChanges();

      expect(sidebarViewport._animationState).toEqual("void");
    });
  });
});