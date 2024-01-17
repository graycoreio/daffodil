import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffioDocsPackagesSidebarComponent } from './packages-sidebar.component';
import { DaffioDocsPackagesListContainerModule } from '../../containers/packages-list/packages-list.module';

describe('DaffioDocsPackagesSidebarComponent', () => {
  let component: DaffioDocsPackagesSidebarComponent;
  let fixture: ComponentFixture<DaffioDocsPackagesSidebarComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [
        DaffioDocsPackagesListContainerModule,
      ],
      declarations: [
        DaffioDocsPackagesSidebarComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsPackagesSidebarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
