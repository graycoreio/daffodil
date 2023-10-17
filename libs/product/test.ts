// This file is required by karma.conf.js and loads recursively all the .spec and framework files


// eslint-disable-next-line import/no-unassigned-import
import 'zone.js';
// eslint-disable-next-line import/no-unassigned-import
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { setup } from '@daffodil/jasmine';
setup();

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
