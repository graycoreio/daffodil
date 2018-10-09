import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffNewsletterComponent } from './newsletter.component';

describe('DaffNewsletterComponent', () => {
  let component: DaffNewsletterComponent;
  let fixture: ComponentFixture<DaffNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
