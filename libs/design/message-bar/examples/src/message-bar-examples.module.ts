import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MESSAGEBAR_EXAMPLES } from './examples';

import { DefaultMessageBarModule } from './default-message-bar/default-message-bar.module';
import { DismissableMessageBarModule } from './dismissable-message-bar/dismissable-message-bar.module';
import { ActionableMessageBarModule } from './actionable-message-bar/actionable-message-bar.module';
import { FlushMessageBarModule } from './flush-message-bar/flush-message-bar.module';

@NgModule({
  imports: [
    CommonModule,
    DefaultMessageBarModule,
    DismissableMessageBarModule,
    ActionableMessageBarModule,
    FlushMessageBarModule
  ],
  entryComponents: [
    ...MESSAGEBAR_EXAMPLES
  ]
})
export class MessageBarExamplesModule { }