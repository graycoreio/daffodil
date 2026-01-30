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
import { BestSellersModule } from '../../product/containers/best-sellers/best-sellers.module';

@Component({
  selector: 'demo-best-sellers',
  template: '',
})
class MockBestSellersComponent {}

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NotFoundComponent,
      ],
    })
      .overrideComponent(NotFoundComponent, {
        remove: {
          imports: [BestSellersModule],
        },
        add: {
          imports: [MockBestSellersComponent],
        },
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
