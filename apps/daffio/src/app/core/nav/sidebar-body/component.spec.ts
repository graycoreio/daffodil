import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { DaffRouterDataService } from '@daffodil/router';

import { DaffioNavSidebarBodyComponent } from './component';

@Component({
  template: '<daffio-nav-links-sidebar-body></daffio-nav-links-sidebar-body>',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    DaffioNavSidebarBodyComponent,
  ],
})
class WrapperComponent {}

describe('DaffioNavSidebarBodyComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        provideRouter([]),
        {
          provide: DaffRouterDataService,
          useValue: {
            data$: of({
              daffioNavLinks: [
                { title: 'Docs', url: '/docs' },
                { title: 'GitHub', url: 'https://github.com/graycoreio/daffodil', external: true },
              ],
            }),
          },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    fixture.detectChanges();
  });

  it('should render a tree item for each nav link', () => {
    const items = fixture.debugElement.queryAll(By.css('a[daffTreeItem]'));

    expect(items.map((item) => item.nativeElement.textContent.trim())).toEqual(['Docs', 'GitHub']);
  });

  it('should route internal links within the app', () => {
    const docs = fixture.debugElement.queryAll(By.css('a[daffTreeItem]'))[0];

    expect(docs.attributes['href']).toEqual('/docs');
    expect(docs.attributes['target']).toBeUndefined();
  });

  it('should open external links in a new tab', () => {
    const github = fixture.debugElement.queryAll(By.css('a[daffTreeItem]'))[1];

    expect(github.attributes['href']).toEqual('https://github.com/graycoreio/daffodil');
    expect(github.attributes['target']).toEqual('_blank');
  });
});
