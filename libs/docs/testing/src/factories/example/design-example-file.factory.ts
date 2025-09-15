import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsDesignExampleFile } from '@daffodil/docs-utils';

/**
 * Mocked DaffDocsDesignExampleFile object.
 */
export class MockDocsDesignExampleFile implements DaffDocsDesignExampleFile {
  private _language = faker.helpers.arrayElement(['typescript', 'html', 'css', '']);

  name = this._getFileName();
  content = this._getContent();
  language = this._language;

  private _getFileName(): string {
    const baseName = faker.lorem.slug();
    switch (this._language) {
      case 'typescript':
        return `${baseName}.component.ts`;
      case 'html':
        return `${baseName}.component.html`;
      case 'css':
        return `${baseName}.component.scss`;
      default:
        return `${baseName}.txt`;
    }
  }

  private _getContent(): string {
    switch (this._language) {
      case 'typescript':
        return `import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-${faker.lorem.slug()}',\n  templateUrl: './${faker.lorem.slug()}.component.html'\n})\nexport class ${faker.helpers.arrayElement(['Example', 'Demo', 'Sample'])}Component {\n  title = '${faker.lorem.words()}';\n}`;
      case 'html':
        return `<div class="${faker.lorem.slug()}">\n  <h1>{{ title }}</h1>\n  <p>${faker.lorem.sentence()}</p>\n  <button>${faker.lorem.words({ min: 1, max: 3 })}</button>\n</div>`;
      case 'css':
        return `.${faker.lorem.slug()} {\n  color: ${faker.color.rgb()};\n  font-size: ${faker.number.int({ min: 12, max: 24 })}px;\n  margin: ${faker.number.int({ min: 8, max: 32 })}px;\n}`;
      default:
        return faker.lorem.paragraph();
    }
  }
}

/**
 * Factory for creating DaffDocsDesignExampleFile objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsDesignExampleFileFactory extends DaffModelFactory<DaffDocsDesignExampleFile, typeof MockDocsDesignExampleFile> {
  constructor() {
    super(MockDocsDesignExampleFile);
  }
}
