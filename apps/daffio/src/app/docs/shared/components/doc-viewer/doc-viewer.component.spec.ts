import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { DaffioDocFactory } from '../../../testing/factories/doc.factory';
import { DaffioDoc } from '../../models/doc';
import { DaffioDocViewerComponent } from './doc-viewer.component';

@Component({
  template: `<daffio-doc-viewer [doc]="doc"></daffio-doc-viewer>`,
})
class WrapperComponent {
  doc: DaffioDoc;
}

describe('DaffioDocViewerComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  const docFactory = new DaffioDocFactory();
  const stubActivatedRoute = {
    fragment: new BehaviorSubject('fragmentId'),
  };
  let component: DaffioDocViewerComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent, DaffioDocViewerComponent],
      providers: [
        { provide: ActivatedRoute, useValue: stubActivatedRoute },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.doc = docFactory.create({
      contents: 'this is some content with a <div id="fragmentId">fragment link</div>',
    });
    spyOn(window, 'scrollTo');
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daffio-doc-viewer')).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render the contents of the doc as innerHtml', () => {
    wrapper.doc = docFactory.create({ contents: 'Some Content' });
    fixture.detectChanges();
    const componentEl = <HTMLElement>fixture.debugElement.query(By.css('.doc-viewer')).nativeElement;
    expect(componentEl.innerHTML).toEqual(wrapper.doc.contents);
  });

  it('should render all code through innerHtml', () => {
    const script = '<script>alert("Malicious")</script>';
    wrapper.doc = docFactory.create({ contents: script });
    fixture.detectChanges();
    const componentEl = fixture.debugElement.query(By.css('.doc-viewer')).nativeElement;
    expect(componentEl.innerHTML).toEqual(script);
  });

  it('should scroll to the given fragment in the url if one exists', (done) => {
    setTimeout(() => {
      expect(window.scrollTo).toHaveBeenCalled();
      done();
    });
  });
});
