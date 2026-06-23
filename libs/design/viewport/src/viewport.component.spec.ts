import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffViewportComponent } from './viewport.component';

describe('DaffViewportComponent', () => {
  let component: DaffViewportComponent;
  let fixture: ComponentFixture<DaffViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffViewportComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DaffViewportComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
