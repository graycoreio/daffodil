import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioDocsPackageCardsComponent } from './package-cards.component';

describe('DaffioDocsPackageCardsComponent', () => {
  let component: DaffioDocsPackageCardsComponent;
  let fixture: ComponentFixture<DaffioDocsPackageCardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioDocsPackageCardsComponent,
        RouterTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsPackageCardsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
