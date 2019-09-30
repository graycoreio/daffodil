import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Subject } from 'rxjs';

import { DemoIndicatorComponent } from './indicator.component';
import { DaffProgressIndicatorModule } from '@daffodil/design';
import { By } from '@angular/platform-browser';

@Injectable()
class MockRouter {
  events = new Subject<Event>();
}

describe('DemoIndicatorComponent', () => {
  let component: DemoIndicatorComponent;
  let fixture: ComponentFixture<DemoIndicatorComponent>;
  let router: MockRouter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        NoopAnimationsModule,
        RouterTestingModule,
        DaffProgressIndicatorModule
      ],
      declarations: [ 
        DemoIndicatorComponent
      ],
      providers: [
        {provide: Router, useClass: MockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoIndicatorComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the router triggers "NavigationStart"', () => {
    it('should set show to true and show the `daff-progress-indicator', () => {
      router.events.next(new NavigationStart(1, 'mock'));
      fixture.detectChanges();

      expect(component.routingPercentage).toEqual(0);
      expect(component.show).toBe(true);
      expect(fixture.debugElement.query(By.css('daff-progress-indicator'))).toBeDefined();
    });
  });

  describe('when the router triggers "NavigationEnd"', () => {
    it('should set show to false and hide the `daff-progress-indicator`', () => {
      router.events.next(new NavigationEnd(1, 'mock', 'mock'));
      fixture.detectChanges();
  
      expect(component.routingPercentage).toEqual(100);
      expect(component.show).toBe(false);
      expect(fixture.debugElement.query(By.css('daff-progress-indicator'))).toBe(null);
    });
  });

  
});
