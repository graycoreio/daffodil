import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicNavbarComponent } from './basic-navbar/basic-navbar.component';
import { ContainedNavbarComponent } from './contained-navbar/contained-navbar.component';
import { NavbarThemingComponent } from './navbar-theming/navbar-theming.component';
import { RaisedNavbarComponent } from './raised-navbar/raised-navbar.component';


export const NAVBAR_EXAMPLES = [
  BasicNavbarComponent,
  ContainedNavbarComponent,
  NavbarThemingComponent,
  RaisedNavbarComponent,
];

export const provideDaffDesignNavbarExamples = () =>
  provideDaffDocsExampleComponents(...NAVBAR_EXAMPLES);
