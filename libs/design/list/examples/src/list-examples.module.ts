import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicListModule } from './basic-list/basic-list.module';
import { LIST_EXAMPLES } from './examples';
import { IconListModule } from './icon-list/icon-list.module';
import { MultilineListModule } from './multiline-list/multiline-list.module';
import { NavListModule } from './nav-list/nav-list.module';

@NgModule({
  imports: [
    CommonModule,
    BasicListModule,
    NavListModule,
    IconListModule,
    MultilineListModule,
  ],
})
export class ListExamplesModule { }
