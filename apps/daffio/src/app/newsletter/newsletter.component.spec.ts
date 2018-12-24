import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioNewsletterComponent } from './newsletter.component';

describe('DaffioNewsletterComponent', () => {
  let component: DaffioNewsletterComponent;
  let fixture: ComponentFixture<DaffioNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioNewsletterComponent
      ]
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
