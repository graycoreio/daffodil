import { DOCUMENT } from '@angular/common';
import { provideLocationMocks } from '@angular/common/testing';
import {
  Component,
  inject,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import {
  provideRouter,
  Router,
} from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { Schema } from 'inspector/promises';

import { DaffSchemaService } from '@daffodil/seo';
import {
  DaffRouteWithSeoData,
  provideDaffSeoRouterSchema,
} from '@daffodil/seo/router';

@Component({
  selector: 'lib-seo-compomnent', template: 'my-component',
  standalone: false,
})
class SeoTestComponent {}

const routes: DaffRouteWithSeoData<unknown>[] = [
  {
    path: '',
    title: 'Test app',
    pathMatch: 'full',
    component: SeoTestComponent,
    data: {
      daffSeoData: {
        schema: {
          '@type': 'OnlineStore',
          name: 'Test Store',
        },
      },
    },
  },
  {
    path: 'other-route',
    title: 'Other',
    pathMatch: 'full',
    component: SeoTestComponent,
    data: {
      daffSeoData: {
        schema: {
          '@type': 'OnlineStore',
          name: 'Other Store',
        },
      },
    },
  },
  {
    path: 'no-schema-route',
    title: 'No Schema',
    pathMatch: 'full',
    component: SeoTestComponent,
  },
  {
    path: 'guard-route',
    title: 'Guard',
    pathMatch: 'full',
    component: SeoTestComponent,
    canActivate: [
      () =>
        new Promise((resolve) => setTimeout(resolve, 100)),
    ],
  },
  {
    path: 'error-route',
    title: 'Error',
    pathMatch: 'full',
    component: SeoTestComponent,
    canActivate: [
      () => {
        throw new Error('test');
      },
    ],
  },
  {
    path: 'redirect-route',
    title: 'Redirect',
    pathMatch: 'full',
    component: SeoTestComponent,
    canActivate: [
      () => inject(Router).createUrlTree(['']),
    ],
  },
  {
    path: 'cancel-route',
    title: 'Cancel',
    pathMatch: 'full',
    component: SeoTestComponent,
    canActivate: [
      () => false,
    ],
  },
];

describe('@daffodil/seo | Integration | Providing seo data to routes', () => {
  let router: Router;
  let harness: RouterTestingHarness;
  let title: Title;
  let schema: DaffSchemaService<unknown>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideLocationMocks(),
        provideDaffSeoRouterSchema(),
      ],
    });

    router = TestBed.inject(Router);
    title = TestBed.inject(Title);
    schema = TestBed.inject(DaffSchemaService);

    harness = await RouterTestingHarness.create();
  });

  const testCases = [
    { path: '', title: 'Test app', schema: [{ '@type': 'OnlineStore', name: 'Test Store' }]},
    { path: 'other-route', title: 'Other', schema: [{ '@type': 'OnlineStore', name: 'Other Store' }]},
    { path: 'no-schema-route', title: 'No Schema', schema: []},
    { path: 'guard-route', title: 'Guard', schema: []},
    { path: 'redirect-route', title: 'Test app', schema: [{ '@type': 'OnlineStore', name: 'Test Store' }]},
  ];

  testCases.forEach((test, index) => {
    it('should set the correct seo data', async () => {
      try {
        await harness.navigateByUrl(test.path, SeoTestComponent);
      } catch(e) {
        if(test.path !== 'error-route') {
          throw e;
        }
      }
      expect(title.getTitle()).toEqual(test.title);
      expect(schema.getSchema()).toEqual(JSON.stringify(test.schema));
    });
  });

  it('should leave the seo data state in place from the most recent navigation if an error occurs', async () => {
    await harness.navigateByUrl('', SeoTestComponent);
    expect(title.getTitle()).toEqual('Test app');
    expect(schema.getSchema()).toEqual(JSON.stringify([{ '@type': 'OnlineStore', name: 'Test Store' }]));
    try {
      await harness.navigateByUrl('error-route', SeoTestComponent);
    } catch(e) {}

    expect(title.getTitle()).toEqual('Test app');
    expect(schema.getSchema()).toEqual(JSON.stringify([{ '@type': 'OnlineStore', name: 'Test Store' }]));
  });

  it('should leave the seo data state in place from the most recent navigation if a cancel occurs', async () => {
    await harness.navigateByUrl('', SeoTestComponent);
    expect(title.getTitle()).toEqual('Test app');
    expect(schema.getSchema()).toEqual(JSON.stringify([{ '@type': 'OnlineStore', name: 'Test Store' }]));

    await harness.navigateByUrl('cancel-route', SeoTestComponent);

    expect(title.getTitle()).toEqual('Test app');
    expect(schema.getSchema()).toEqual(JSON.stringify([{ '@type': 'OnlineStore', name: 'Test Store' }]));
  });
});
