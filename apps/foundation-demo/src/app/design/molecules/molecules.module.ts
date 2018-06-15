import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QtyDropdownComponent } from './qty-dropdown/qty-dropdown.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageListComponent } from './image-list/image-list.component';
import { AccordionModule } from './accordion/accordion.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule
  ],
  declarations: [
    QtyDropdownComponent,
    ImageGalleryComponent,
    ImageListComponent
  ],
  exports: [
    QtyDropdownComponent,
    ImageGalleryComponent,
    ImageListComponent,
    AccordionModule
  ]
})
export class MoleculesModule { }
