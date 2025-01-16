import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffApiNavPackageDoc,
  DaffApiPackageDoc,
  DaffDocsGenericNavList,
} from '@daffodil/docs-utils';

import { DaffioApiPackageComponent } from './api-package.component';
import { DaffioApiListSectionComponent } from '../api-list-section/api-list-section.component';

@Component({
  template: `
    <daffio-api-package [doc]="apiListValue"></daffio-api-package>
  `,
  imports: [
    DaffioApiPackageComponent,
  ],
})
class WrapperComponent {
  apiListValue: DaffApiPackageDoc;
}

describe('DaffioApiPackageComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffioApiPackageComponent;
  let packageLinks: Array<DebugElement>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
        RouterTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.apiListValue = {
      id: 'Root',
      path: 'path',
      docType: 'package',
      title: 'title',
      description: 'description',
      breadcrumbs: [],
      children: [
        {
          id: 'name1Component',
          title: 'title1Component',
          path: 'path1',
          docType: 'docType1',
          children: [],
        },
        {
          id: 'name2Module',
          title: 'title2Module',
          path: 'path2',
          docType: 'package',
          children: [
            {
              id: 'name1Component',
              title: 'title1Component',
              path: 'path1',
              docType: 'docType1',
              children: [],
            },
            {
              id: 'name2Module',
              title: 'title2Module',
              path: 'path2',
              docType: 'package',
              children: [],
            },
          ],
        },
      ],
    };
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daffio-api-package')).componentInstance;
    packageLinks = fixture.debugElement.queryAll(By.css('a.daffio-api-package__package-name'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take doc as input', () => {
    expect(component.doc).toEqual(wrapper.apiListValue);
  });

  describe('for every subpackage in children', () => {
    let subpackages: Array<DaffDocsGenericNavList<DaffApiNavPackageDoc>>;

    beforeEach(() => {
      subpackages = wrapper.apiListValue.children.filter((d): d is DaffDocsGenericNavList<DaffApiNavPackageDoc> => d.docType === 'package');
    });

    it('should render a link with the title', () => {
      packageLinks.forEach((de, i) => {
        expect(de.nativeElement.innerText).toEqual(subpackages[i].title);
        expect(de.attributes['ng-reflect-router-link']).toEqual(subpackages[i].path);
      });
    });

    it('should render an API section with the subpackage children excluding packages', () => {
      packageLinks.forEach((de, i) => {
        const apiSection: DaffioApiListSectionComponent = fixture.debugElement.query(By.css(`daffio-api-list-section[data-section-for-subpackage="${subpackages[i].id}"]`)).componentInstance;
        expect(apiSection.children).toEqual(subpackages[i].children.filter((c) => c.docType !== 'package'));
      });
    });
  });

});
