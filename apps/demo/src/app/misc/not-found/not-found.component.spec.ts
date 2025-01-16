import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NotFoundComponent } from './not-found.component';

@Component({
  selector: 'demo-best-sellers', template: '',
  standalone: false,
})
class MockBestSellersComponent {}

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundComponent,
        MockBestSellersComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h1'));


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the `not-found` text', () => {
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/404/i,
      '<h1> should say something about "404"');
  });
});
