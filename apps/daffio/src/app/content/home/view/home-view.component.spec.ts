import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DaffioHomeViewComponent } from './home-view.component';

describe('DaffioHomeViewComponent', () => {
  let component: DaffioHomeViewComponent;
  let fixture: ComponentFixture<DaffioHomeViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioHomeViewComponent,
      ],
      providers: [
        provideRouter([]),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
