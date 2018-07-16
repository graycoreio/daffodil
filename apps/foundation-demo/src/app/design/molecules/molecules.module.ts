import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QtyDropdownComponent } from './qty-dropdown/qty-dropdown.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageListComponent } from './image-list/image-list.component';
import { AccordionModule } from './accordion/accordion.module';
import { InputValidatorComponent } from './input-validator/input-validator.component';
import { SelectValidatorComponent } from './select-validator/select-validator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule
  ],
  declarations: [
    QtyDropdownComponent,
    ImageGalleryComponent,
    ImageListComponent,
    InputValidatorComponent,
    SelectValidatorComponent
  ],
  exports: [
    QtyDropdownComponent,
    ImageGalleryComponent,
    ImageListComponent,
    AccordionModule,
    InputValidatorComponent,
    SelectValidatorComponent
  ]
})
export class MoleculesModule { }
