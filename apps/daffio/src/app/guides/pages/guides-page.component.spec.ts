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
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';

import { DaffioDoc } from '../../docs/models/doc';
import { DaffioDocsFactory } from '../../docs/testing/factories/docs.factory';
import { DaffioGuidesPageComponent } from './guides-page.component';

@Component({ selector: 'daffio-doc-viewer', template: '' })
class MockDaffioDocViewerComponent {
	@Input() doc: DaffioDoc;
}

describe('DaffioGuidesPageComponent', () => {
  let component: DaffioGuidesPageComponent;
  let fixture: ComponentFixture<DaffioGuidesPageComponent>;
  const doc: DaffioDoc = new DaffioDocsFactory().create();
  const stubActivatedRoute = {
    data: new BehaviorSubject({}),
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioGuidesPageComponent,
        MockDaffioDocViewerComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: stubActivatedRoute },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioGuidesPageComponent);
    component = fixture.componentInstance;
    console.log(doc);
    stubActivatedRoute.data.next({ doc });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize `doc$` to the resolved doc from the activated route', () => {
    const expected = cold('a', { a: doc });
    expect(component.guideDoc$).toBeObservable(expected);
  });

  it('should pass the down the observed doc to the `daffio-doc-viewer`', () => {
    const docViewerComponent = fixture.debugElement.query(By.css('daffio-doc-viewer')).componentInstance;
    expect(docViewerComponent.doc).toEqual(doc);
  });
});
