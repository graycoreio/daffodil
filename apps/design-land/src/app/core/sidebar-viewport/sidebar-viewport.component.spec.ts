import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DaffioGuidesNavModule } from 'apps/daffio/src/app/guides/components/guides-nav/guides-nav.module';

import {
  DaffSidebarModule,
  DaffSidebarViewportComponent,
  DaffSidebarComponent,
} from '@daffodil/design';

import { DesignLandSidebarViewportComponent } from './sidebar-viewport.component';

describe('DesignLandSidebarViewportComponent', () => {
  let component: DesignLandSidebarViewportComponent;
  let fixture: ComponentFixture<DesignLandSidebarViewportComponent>;

  let daffSidebarViewport: DaffSidebarViewportComponent;
  let daffSidebar: DaffSidebarComponent;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        DaffSidebarModule,
        DaffioGuidesNavModule,
        HttpClientTestingModule,
      ],
      declarations: [
        DesignLandSidebarViewportComponent,
      ],
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
