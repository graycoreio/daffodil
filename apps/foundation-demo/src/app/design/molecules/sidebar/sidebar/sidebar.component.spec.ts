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

  it('should set `opened` to be false by default', () => {
    expect(component.opened).toEqual(false);
  })

  describe('when opened is true', () => {
    beforeEach(() => {
      component.opened = true;
      fixture.detectChanges();
    });
  });

  describe('when opened is false', () => {
    beforeEach(() => {
      component.opened = false;
      fixture.detectChanges();
    });
    
    it('should set daff-sidebar-hide on host element', () => {      
      expect(fixture.debugElement.nativeElement.classList.contains('daff-sidebar-hide')).toBeTruthy();
    });
  });

  describe('user interactions', () => {
    it('should emit `escapedPressed` when the `ESC` key is pressed', () => {

    })
  });
});

@Component({template: `
  <div class="host-element">
    <daff-sidebar [opened]="showValue"></daff-sidebar>
  </div>
`})
class TestDaffSidebarComponentWrapper {
  showValue: boolean = false;
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

  it('should be able to take opened as input', () => {
    component.showValue = false;
    fixture.detectChanges();
    expect(daffSidebar.opened).toEqual(component.showValue);
    
    component.showValue = true;
    fixture.detectChanges();
    expect(daffSidebar.opened).toEqual(component.showValue);
  });
});
