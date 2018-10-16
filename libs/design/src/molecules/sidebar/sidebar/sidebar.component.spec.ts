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
class TestDaffSidebarComponentWrapper {
  escapePressedCount: number = 0;

  pressed(): void{
    this.escapePressedCount++;
  }
}

describe('DaffSidebarComponent | usage', () => {
  let component: TestDaffSidebarComponentWrapper;
  let fixture: ComponentFixture<TestDaffSidebarComponentWrapper>;
  let daffSidebar: DaffSidebarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffSidebarComponentWrapper,
        DaffSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffSidebarComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    daffSidebar = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to bind to the Output `escapePressed`', () => {
    daffSidebar.escapePressed.emit();

    fixture.detectChanges();

    expect(component.escapePressedCount).toEqual(1);
  });
});
