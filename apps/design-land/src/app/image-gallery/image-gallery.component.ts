import { Component, OnInit } from '@angular/core';
import { selectDemoImageGalleryState } from 'apps/demo/src/app/core/image-gallery/reducers';
import { Image } from 'libs/design/src/interfaces/image';

@Component({
  selector: 'design-land-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  selectedImage = { url: '', label: '' };

  images = [
    {
      url: 'https://cdn.pixabay.com/photo/2018/04/25/14/34/daffodil-3349706_960_720.jpg',
      label: 'daffodil1',

    },
    {
      url: 'https://cdn.pixabay.com/photo/2019/04/03/17/18/daffodil-4100845_960_720.jpg',
      label: 'daffodil2',

    },
    {
      url: 'https://cdn.pixabay.com/photo/2011/04/13/01/46/daffodils-6454__340.jpg',
      label: 'daffodil3',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2013/03/11/19/41/diary-92652__340.jpg',
      label: 'daffodil4',
    },
    {
      url: 'https://images.dog.ceo/breeds/husky/n02110185_632.jpg',
      label: 'husky',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2019/04/12/02/42/daffodil-4121255__340.jpg',
      label: 'daffodil5',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/02/23/21/51/daffodils-2093307__340.jpg',
      label: 'daffodil6',
    },
    {
      url: 'https://images.dog.ceo/breeds/husky/n02110185_10898.jpg',
      label: 'husky',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2016/02/23/20/19/osterglocken-1218446__340.jpg',
      label: 'daffodil7',
    }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedImage = this.images[Math.floor(Math.random() * this.images.length)];
  }
}
