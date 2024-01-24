
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioDocsPackageCardsContainer } from './package-cards.component';

describe('DaffioDocsPackageCardsContainer', () => {
  let component: DaffioDocsPackageCardsContainer;
  let fixture: ComponentFixture<DaffioDocsPackageCardsContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioDocsPackageCardsContainer,
      ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsPackageCardsContainer);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
