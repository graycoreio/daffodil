import { Component, } from '@angular/core';
const fs = require('fs-web');
import { map } from 'rxjs/operators';

@Component({
  selector: 'daffio-docs-list',
  templateUrl: './docs-list.component.html'
})
export class DaffioDocsListComponent {

  constructor() { }

  fileList;

  

  ngOnInit() {
    // fs.readFile('../../../../../../docs/checkout/fileList.txt').then(
    fs.readFile('docs/checkout/fileList.txt', function(err, file) {
      console.log(err);
        console.log(file);
      }
    );
    fs.readFile('docs-list.module.ts', function(err, fileList) {
        // this.fileList = fileList;
        console.log(fileList);
      });
  }
}
