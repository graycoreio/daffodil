import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QtyDropdownComponent } from './qty-dropdown/qty-dropdown.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageListComponent } from './image-list/image-list.component';
import { AccordionModule } from './accordion/accordion.module';
import { QtyDropdownModule } from './qty-dropdown/qty-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    QtyDropdownModule
  ],
  declarations: [
    ImageGalleryComponent,
    ImageListComponent
  ],
  exports: [
    ImageGalleryComponent,
    ImageListComponent,
    AccordionModule,
    QtyDropdownModule
  ]
})
export class MoleculesModule { }
