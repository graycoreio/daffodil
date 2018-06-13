import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QtyDropdownComponent } from './qty-dropdown/qty-dropdown.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageListComponent } from './image-list/image-list.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    QtyDropdownComponent,
    ImageGalleryComponent,
    ImageListComponent,
    AccordionComponent
  ],
  exports: [
    QtyDropdownComponent,
    ImageGalleryComponent,
    ImageListComponent,
    AccordionComponent
  ]
})
export class MoleculesModule { }
