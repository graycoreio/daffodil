import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicListModule } from './basic-list/basic-list.module';
import { NavListModule } from './nav-list/nav-list.module';
import { IconListModule } from './icon-list/icon-list.module';
import { MultilineListModule } from './multiline-list/multiline-list.module';

import { LIST_EXAMPLES } from './examples';

@NgModule({
  imports: [
    CommonModule,
		BasicListModule,
    NavListModule,
    IconListModule,
    MultilineListModule
  ],
  entryComponents: [
    ...LIST_EXAMPLES
  ]
})
export class ListExamplesModule { }