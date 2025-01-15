import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

import { DaffRouterDataService } from '@daffodil/router';

import { DaffioMarketingNavContainer } from './marketing.component';
import { DaffioRoute } from '../../router/route.type';
import { DaffioSidebarService } from '../../sidebar/services/sidebar.service';
import { DAFFIO_NAV_SIDEBAR_ID } from '../header/sidebar-id';
import { DaffioNavLink } from '../link/type';

@Component({
  template: '<daffio-nav-marketing-container></daffio-nav-marketing-container>',
  standalone: true,
  imports: [
    DaffioMarketingNavContainer,
  ],
})
class WrapperComponent {}

describe('DaffioMarketingNavContainer', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let marketingNavContainer: DaffioMarketingNavContainer;
  let dataSpy: BehaviorSubject<DaffioRoute['data']>;
  let sidebarServiceSpy: jasmine.SpyObj<DaffioSidebarService>;
  let links: Array<DaffioNavLink>;

  beforeEach(waitForAsync(() => {
    dataSpy = new BehaviorSubject({});
    sidebarServiceSpy = jasmine.createSpyObj('DaffioSidebarService', ['open']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        WrapperComponent,
      ],
      providers: [
        {
          provide: DaffRouterDataService,
          useValue: jasmine.createSpyObj('DaffRouterDataService', [], { data$: dataSpy }),
        },
        {
          provide: DaffioSidebarService,
          useValue: sidebarServiceSpy,
        },
      ],
    })
      .compileComponents();

    links = [
      { title: 'title1', url: 'url1' },
      { title: 'title2', url: 'url2' },
    ];
    dataSpy.next({
      daffioNavLinks: links,
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    marketingNavContainer = fixture.debugElement.query(By.css('daffio-nav-marketing-container')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the links', () => {
    fixture.debugElement.queryAll(By.css('a[daffioHeaderItem]')).forEach((de, i) => {
      expect(de.attributes['ng-reflect-router-link']).toEqual(links[i].url);
      expect(de.nativeElement.innerText).toEqual(links[i].title);
    });
  });

  describe('when [sidebar-button] is clicked', () => {
    it('should open the nav sidebar', () => {
      const sidebarButton = fixture.debugElement.query(By.css('[sidebar-button]')).nativeElement;
      sidebarButton.click();

      expect(sidebarServiceSpy.open).toHaveBeenCalledWith(DAFFIO_NAV_SIDEBAR_ID);
    });
  });
});
