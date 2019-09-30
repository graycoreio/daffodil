import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffioDocViewerComponent } from './doc-viewer.component';
import { DaffioDoc } from '../../models/doc';
import { DaffioDocFactory } from '../../../testing/factories/doc.factory';

@Component({
  template: `<daffio-doc-viewer [doc]="doc"></daffio-doc-viewer>`
})
class WrapperComponent {
  doc: DaffioDoc;
}

describe('DaffioDocViewerComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  const docFactory = new DaffioDocFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent, DaffioDocViewerComponent],
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

  it('should render the contents of the doc as innerhtml', () => {
    wrapper.doc = docFactory.create({ contents: 'Some Content' })
    fixture.detectChanges();
    const componentEl = fixture.debugElement.query(By.css('.doc-viewer')).nativeElement as HTMLElement;
    expect(componentEl.innerHTML).toEqual(wrapper.doc.contents);
  });

  it('should rely on Angular mechanisms to prevent rendering of malicious code', () => {
    wrapper.doc = docFactory.create({ contents: '<script>alert("Malicious")</script>' })
    fixture.detectChanges();
    const componentEl = fixture.debugElement.query(By.css('.doc-viewer')).nativeElement as HTMLElement;
    expect(componentEl.innerHTML).toEqual('');
  })
});
