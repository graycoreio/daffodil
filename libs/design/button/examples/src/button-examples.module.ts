import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicButtonModule } from './basic-button/basic-button.module';
import { BUTTON_EXAMPLES } from './examples';
import { IconButtonModule } from './icon-button/icon-button.module';
import { RaisedButtonModule } from './raised-button/raised-button.module';
import { SizeableButtonModule } from './sizeable-button/sizeable-button.module';
import { StrokedButtonModule } from './stroked-button/stroked-button.module';
import { UnderlineButtonModule } from './underline-button/underline-button.module';

@NgModule({
  imports: [
    CommonModule,
    BasicButtonModule,
    IconButtonModule,
    RaisedButtonModule,
    SizeableButtonModule,
    StrokedButtonModule,
    UnderlineButtonModule,
  ],
  entryComponents: [
    ...BUTTON_EXAMPLES,
  ],
})
export class ButtonExamplesModule { }
