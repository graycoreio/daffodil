import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ApiDocsListViewComponent } from './api-docs-list-view.component';
import { DaffioDocsApiModule } from '../../api.module';

describe('ApiDocsListViewComponent', () => {
  let component: ApiDocsListViewComponent;
  let fixture: ComponentFixture<ApiDocsListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioDocsApiModule,
        RouterTestingModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
