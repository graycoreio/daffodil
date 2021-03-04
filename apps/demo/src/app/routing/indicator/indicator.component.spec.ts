import { Injectable } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  Event,
  Router,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

import { DaffProgressIndicatorModule } from '@daffodil/design';

import { DemoIndicatorComponent } from './indicator.component';

@Injectable({ providedIn: 'root' })
class MockRouter {
  events = new Subject<Event>();
}

describe('DemoIndicatorComponent', () => {
  let component: DemoIndicatorComponent;
  let fixture: ComponentFixture<DemoIndicatorComponent>;
  let router: MockRouter;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[
        NoopAnimationsModule,
        RouterTestingModule,
        DaffProgressIndicatorModule,
      ],
      declarations: [
        DemoIndicatorComponent,
      ],
      providers: [
        { provide: Router, useExisting: MockRouter },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoIndicatorComponent);
    router = TestBed.inject(MockRouter);
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
