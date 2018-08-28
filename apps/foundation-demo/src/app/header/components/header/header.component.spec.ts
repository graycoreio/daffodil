import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

@Component({selector: 'sidebar-view', template: ''})
class MockSidebarViewComponent {}

@Component({template: '<header (toggleShowSidebar)="toggleShowSidebarFunction()"></header>'})
class TestHeaderComponentWrapper {
  toggleShowSidebarFunction: Function = () => {};
}

describe('HeaderComponent', () => {
  let component: TestHeaderComponentWrapper;
  let fixture: ComponentFixture<TestHeaderComponentWrapper>;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        MockSidebarViewComponent,
        TestHeaderComponentWrapper,
        HeaderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHeaderComponentWrapper);
    router = TestBed.get(Router);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when open-icon is clicked', () => {
    
    it('should call host.toggleShowSidebarFunction', fakeAsync(() => {
      spyOn(component, 'toggleShowSidebarFunction');
      fixture.debugElement.query(By.css('.header__open-icon')).nativeElement.click();
      fixture.detectChanges();
      tick();

      expect(component.toggleShowSidebarFunction).toHaveBeenCalled();
    }));
  });

  describe('when logo-icon is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      spyOn(router, 'navigateByUrl');
      fixture.debugElement.query(By.css('.header__logo-icon')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/');
    });
  });
});
