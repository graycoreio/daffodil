import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DaffioNewsletterComponent } from './newsletter.component';

describe('DaffioNewsletterComponent', () => {
  let component: DaffioNewsletterComponent;
  let fixture: ComponentFixture<DaffioNewsletterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioNewsletterComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
