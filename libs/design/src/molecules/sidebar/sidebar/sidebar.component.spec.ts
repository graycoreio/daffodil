import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffSidebarComponent } from './sidebar.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DaffSidebarComponent', () => {
  let component: DaffSidebarComponent;
  let fixture: ComponentFixture<DaffSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('user interactions', () => {
    it('should emit `escapedPressed` when the `ESC` key is pressed', () => {
      spyOn(component.escapePressed, "emit");

      fixture.nativeElement.dispatchEvent(new KeyboardEvent("keydown", {
          key: "Escape"
      }));
      
      fixture.detectChanges();

      expect(component.escapePressed.emit).toHaveBeenCalled();
    });

    it('should not emit `escapedPressed` if the event is not triggered ON the `daff-sidebar`', () => {
      spyOn(component.escapePressed, "emit");

      document.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape"
      }));

      fixture.detectChanges();

      expect(component.escapePressed.emit).not.toHaveBeenCalled();
    });
  });
});

@Component({template: `
  <div class="host-element">
    <daff-sidebar (escapePressed)="pressed()"></daff-sidebar>
  </div>
`})
class WrapperComponent {
  escapePressedCount = 0;

  pressed(): void{
    this.escapePressedCount++;
  }
}

describe('DaffSidebarComponent | usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSidebarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should be able to bind to the Output `escapePressed`', () => {
    component.escapePressed.emit();

    fixture.detectChanges();

    expect(wrapper.escapePressedCount).toEqual(1);
  });
});
