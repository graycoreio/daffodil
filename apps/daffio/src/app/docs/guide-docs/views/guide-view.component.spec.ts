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

import { DaffioDoc } from '../../shared/models/doc';
import { DaffioDocFactory } from '../../testing/factories/doc.factory';
import { DaffioGuideViewerModule } from '../components/guide-viewer/guide-viewer.module';
import { DaffioGuideViewComponent } from './guide-view.component';

describe('DaffioGuideViewComponent', () => {
  let component: DaffioGuideViewComponent;
  let fixture: ComponentFixture<DaffioGuideViewComponent>;
  const doc: DaffioDoc = new DaffioDocFactory().create();
  const stubActivatedRoute = {
    data: new BehaviorSubject({}),
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DaffioGuideViewComponent],
      imports: [
        DaffioGuideViewerModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: stubActivatedRoute },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioGuideViewComponent);
    component = fixture.componentInstance;
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

  it('should pass the down the observed doc to the `daffio-guide-viewer`', () => {
    const guideViewerComponent = fixture.debugElement.query(By.css('daffio-guide-viewer')).componentInstance;
    expect(guideViewerComponent.doc).toEqual(doc);
  });
});
