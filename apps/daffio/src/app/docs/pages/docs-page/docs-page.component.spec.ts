import {
  Component,
  input,
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
import { DaffioDocsDynamicallyRenderableContentComponentService } from '../../dynamically-renderable-content/component.service';
import { DaffioDocsDynamicallyRenderableContent } from '../../dynamically-renderable-content/type';

@Component({
  selector: 'daffio-mock-content',
  template: '',
  standalone: true,
})
class MockContentComponent implements DaffioDocsDynamicallyRenderableContent {
  doc = input<DaffDoc>();
}

describe('DaffioDocsPageComponent', () => {
  let component: DaffioDocsPageComponent;
  let fixture: ComponentFixture<DaffioDocsPageComponent>;
  const doc: DaffDoc = new DaffioDocsFactory().create();
  const stubActivatedRoute = {
    data: new BehaviorSubject({}),
  };
  let componentServiceSpy: jasmine.SpyObj<DaffioDocsDynamicallyRenderableContentComponentService>;

  beforeEach(waitForAsync(() => {
    componentServiceSpy = jasmine.createSpyObj('DaffioDocsDynamicallyRenderableContentComponentService', ['getComponent']);

    TestBed.configureTestingModule({
      imports: [
        DaffioDocsPageComponent,
        RouterTestingModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: stubActivatedRoute },
        provideMockStore(),
      ],
    })
      .overrideComponent(
        DaffioDocsPageComponent,
        {
          remove: {
            providers: [
              DaffioDocsDynamicallyRenderableContentComponentService,
            ],
          },
          add: {
            providers: [
              {
                provide: DaffioDocsDynamicallyRenderableContentComponentService,
                useValue: componentServiceSpy,
              },
            ],
          },
        },
      )
      .compileComponents();

    componentServiceSpy.getComponent.and.returnValue(MockContentComponent);
    fixture = TestBed.createComponent(DaffioDocsPageComponent);
    component = fixture.componentInstance;
    stubActivatedRoute.data.next({ doc });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize `doc$` to the resolved doc from the activated route', () => {
    const expected = cold('a', { a: doc });
    expect(component.doc$).toBeObservable(expected);
  });

  it('should render the dynamic component with the doc', () => {
    const docViewerComponent: MockContentComponent = fixture.debugElement.query(By.directive(MockContentComponent)).componentInstance;
    expect(docViewerComponent.doc()).toEqual(doc);
  });
});
