import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffioApiDoc } from '../../models/api-doc';
import { DaffioApiDocComponent } from './api-doc.component';
import { DaffioDoc } from '../../../shared/models/doc';

@Component({template: '', selector: 'daffio-doc-viewer'})
class MockDaffioDocViewerComponent {
	@Input() doc: DaffioDoc
}

@Component({ template: '<daffio-api-doc [doc]="docValue"></daffio-api-doc>' })
class WrapperComponent {
  docValue: DaffioApiDoc = {
    id: 'id',
    title: 'title',
    contents: 'content',
    docType: 'mytype',
    docTypeShorthand: 'mt',
  };
}

describe('DaffioApiDocComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffioApiDocComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
				WrapperComponent,
				DaffioApiDocComponent,
				MockDaffioDocViewerComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daffio-api-doc')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take doc as input', () => {
    expect(component.doc).toEqual(wrapper.docValue);
  });

  it('should set doc on the `daffio-doc-viewer`', () => {
    const viewer = fixture.debugElement.query(By.css('daffio-doc-viewer')).componentInstance;
    expect(viewer.doc).toEqual(component.doc);
  });
});
