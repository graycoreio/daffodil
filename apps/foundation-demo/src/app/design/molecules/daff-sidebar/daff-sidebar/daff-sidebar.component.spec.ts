import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffSidebarComponent } from './daff-sidebar.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

let stubShow: boolean = true;

@Component({template: '<div class="host-element" daff-sidebar [show]="showValue"></div>'})
class TestDaffSidebarComponentWrapper {
  showValue: boolean = stubShow;
}

describe('DaffSidebarComponent', () => {
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

    daffSidebar = fixture.debugElement.query(By.css('[daff-sidebar]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take show as input', () => {
    expect(daffSidebar.show).toEqual(stubShow);
  });

  describe('when show is true', () => {

    beforeEach(() => {
      daffSidebar.show = true;

      fixture.detectChanges();
    });
    
    it('should set daff-sidebar-show on host element', () => {
      let hostElement = fixture.debugElement.query(By.css('.host-element'));

      expect(hostElement.nativeElement.classList.contains('daff-sidebar-show')).toBeTruthy();
    });
  });

  describe('when show is false', () => {

    beforeEach(() => {
      daffSidebar.show = false;

      fixture.detectChanges();
    });
    
    it('should set daff-sidebar-hide on host element', () => {
      let hostElement = fixture.debugElement.query(By.css('.host-element'));
      
      expect(hostElement.nativeElement.classList.contains('daff-sidebar-hide')).toBeTruthy();
    });
  });
});
