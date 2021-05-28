import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffioDoc } from '../../../shared/models/doc';
import { DaffioDocFactory } from '../../../testing/factories/doc.factory';
import { DaffioGuideViewerComponent } from './guide-viewer.component';

@Component({
  template: `<daffio-guide-viewer [doc]="doc"></daffio-guide-viewer>`,
})
class WrapperComponent {
  doc: DaffioDoc;
}

describe('DaffioGuideViewerComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  const docFactory = new DaffioDocFactory();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent, DaffioGuideViewerComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.doc = docFactory.create();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });
});
