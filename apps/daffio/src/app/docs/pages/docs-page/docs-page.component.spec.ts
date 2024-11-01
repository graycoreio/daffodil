import {
  Component,
  Input,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';

import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioDocsPageComponent } from './docs-page.component';
import { DaffioDocsFactory } from '../../../docs/testing/factories/docs.factory';

@Component({ selector: 'daffio-doc-viewer', template: '' })
class MockDaffioDocViewerComponent {
  @Input() doc: DaffDoc;
}

describe('DaffioDocsPageComponent', () => {
  let component: DaffioDocsPageComponent;
  let fixture: ComponentFixture<DaffioDocsPageComponent>;
  const doc: DaffDoc = new DaffioDocsFactory().create();
  const stubActivatedRoute = {
    data: new BehaviorSubject({}),
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockDaffioDocViewerComponent,
      ],
      imports: [
        DaffioDocsPageComponent,
        RouterTestingModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: stubActivatedRoute },
        provideMockStore(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsPageComponent);
    component = fixture.componentInstance;
    stubActivatedRoute.data.next({ doc });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize `doc$` to the resolved doc from the activated route', () => {
    const expected = cold('a', { a: doc });
    expect(component.doc$).toBeObservable(expected);
  });

  it('should pass the down the observed doc to the `daffio-doc-viewer`', () => {
    const docViewerComponent = fixture.debugElement.query(By.css('daffio-doc-viewer')).componentInstance;
    expect(docViewerComponent.doc).toEqual(doc);
  });
});
