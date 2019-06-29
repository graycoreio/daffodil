import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ApiDocViewComponent } from './api-doc-view.component';
import { DaffioDocsApiModule } from '../../api.module';

describe('ApiDocViewComponent', () => {
  let component: ApiDocViewComponent;
  let fixture: ComponentFixture<ApiDocViewComponent>;

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
    fixture = TestBed.createComponent(ApiDocViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
