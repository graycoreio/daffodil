import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QtyDropdownComponent } from './qty-dropdown/qty-dropdown.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageListComponent } from './image-list/image-list.component';
import { AccordionModule } from './accordion/accordion.module';
import { InputValidatorComponent } from './input-validator/input-validator.component';

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
    InputValidatorComponent
  ],
  exports: [
    QtyDropdownComponent,
    ImageGalleryComponent,
    ImageListComponent,
    AccordionModule,
    InputValidatorComponent
  ]
})
export class MoleculesModule { }
