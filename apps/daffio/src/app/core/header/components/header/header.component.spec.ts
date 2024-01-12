import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffNavbarModule } from '@daffodil/design/navbar';

import { DaffioHeaderComponent } from './header.component';

describe('DaffioHeaderComponent', () => {
  let component: DaffioHeaderComponent;
  let fixture: ComponentFixture<DaffioHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffNavbarModule,
      ],
      declarations: [
        DaffioHeaderComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
