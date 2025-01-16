import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioNavSidebarBodyComponent } from './component';
import { DaffioSidebarService } from '../../sidebar/services/sidebar.service';
import { DaffioNavLink } from '../link/type';

@Component({
  template: '<daffio-nav-header-container></daffio-nav-header-container>',
  imports: [
    DaffioNavSidebarBodyComponent,
  ],
})
class WrapperComponent {}

describe('DaffioNavSidebarBodyComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let sidebarServiceSpy: jasmine.SpyObj<DaffioSidebarService>;
  let links: Array<DaffioNavLink>;

  beforeEach(waitForAsync(() => {
    sidebarServiceSpy = jasmine.createSpyObj('DaffioSidebarService', ['open']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        WrapperComponent,
      ],
      providers: [
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
