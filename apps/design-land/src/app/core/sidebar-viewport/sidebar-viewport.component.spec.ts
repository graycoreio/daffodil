import { provideHttpClientTesting } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffSidebarModule,
  DaffSidebarViewportComponent,
  DaffSidebarComponent,
} from '@daffodil/design/sidebar';

import { DesignLandSidebarViewportComponent } from './sidebar-viewport.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DesignLandSidebarViewportComponent', () => {
  let component: DesignLandSidebarViewportComponent;
  let fixture: ComponentFixture<DesignLandSidebarViewportComponent>;

  let daffSidebarViewport: DaffSidebarViewportComponent;
  let daffSidebar: DaffSidebarComponent;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [
        DesignLandSidebarViewportComponent,
    ],
    imports: [RouterTestingModule,
        NoopAnimationsModule,
        DaffSidebarModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandSidebarViewportComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    daffSidebar = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;
    daffSidebarViewport = fixture.debugElement.query(By.css('daff-sidebar-viewport')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
