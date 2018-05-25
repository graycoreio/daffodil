import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QtyDropdownComponent } from './qty-dropdown/qty-dropdown.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    QtyDropdownComponent,
    ImageGalleryComponent
  ],
  exports: [
    QtyDropdownComponent,
    ImageGalleryComponent    
  ]
})
export class MoleculesModule { }
