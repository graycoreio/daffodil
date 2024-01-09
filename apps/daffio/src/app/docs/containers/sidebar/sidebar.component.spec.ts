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
import { of } from 'rxjs';

import { DaffioDocsSidebarContainer } from './sidebar.component';
import { DaffioGuidesNavComponent } from '../../../guides/components/guides-nav/guides-nav.component';
import { DaffioDocsService } from '../../services/docs.service';
import { mockGuides } from '../../testing/factories/guide-list.factory';

describe('DaffioDocsSidebarContainer', () => {
  let component: DaffioDocsSidebarContainer;
  let fixture: ComponentFixture<DaffioDocsSidebarContainer>;
  let docServiceSpy: jasmine.SpyObj<DaffioDocsService>;

  beforeEach(waitForAsync(() => {
    docServiceSpy = jasmine.createSpyObj('DaffioDocsService', ['getGuideList']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        DaffioGuidesNavModule,
        HttpClientTestingModule,
      ],
      declarations: [
        DaffioDocsSidebarContainer,
      ],
      providers: [
        {
          provide: DaffioDocsService,
          useValue: docServiceSpy,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    docServiceSpy.getGuideList.and.returnValue(of(mockGuides));

    fixture = TestBed.createComponent(DaffioDocsSidebarContainer);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daffio-guides-nav>', () => {
    let guidesNav: DaffioGuidesNavComponent;

    beforeEach(() => {
      guidesNav = fixture.debugElement.query(By.directive(DaffioGuidesNavComponent)).componentInstance;
    });

    it('should set guideList', () => {
      expect(guidesNav.guideList).toEqual(mockGuides);
    });
  });
});
