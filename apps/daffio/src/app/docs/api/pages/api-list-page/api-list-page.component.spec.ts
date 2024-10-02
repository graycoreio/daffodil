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
import { DaffioRoute } from 'apps/daffio/src/app/core/router/route.type';
import { BehaviorSubject } from 'rxjs';

import { DaffioApiListPageComponent } from './api-list-page.component';
import { DaffioApiListComponent } from '../../components/api-list/api-list.component';
import { DaffioApiReference } from '../../models/api-reference';

@Component({
  template: '',
  selector: 'daffio-api-list',
})
class MockDaffioApiListComponent {
  @Input() apiList: DaffioApiReference[] = [];
}

describe('DaffioApiListPageComponent', () => {
  let component: DaffioApiListPageComponent;
  let fixture: ComponentFixture<DaffioApiListPageComponent>;
  let dataSpy: BehaviorSubject<DaffioRoute['data']>;

  const stubDocsList: DaffioApiReference = {
    id: 'id',
    title: 'title',
    docType: '',
    docTypeShorthand: '',
    children: [
      {
        id: 'name1Component',
        title: 'title1Component',
        path: 'path1',
        docType: 'docType1',
        docTypeShorthand: 'dt',
        children: [],
      },
      {
        id: 'name2Module',
        title: 'title2Module',
        path: 'path2',
        docType: 'docType2',
        docTypeShorthand: 'dt',
        children: [],
      },
    ],
  };

  beforeEach(waitForAsync(() => {
    dataSpy = new BehaviorSubject({});

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MockDaffioApiListComponent,
        DaffioApiListPageComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: jasmine.createSpyObj('ActivatedRoute', [], { data: dataSpy }),
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dataSpy.next({
      index: stubDocsList,
    });
    fixture = TestBed.createComponent(DaffioApiListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daffio-api-list>', () => {
    let apiListComponent: DaffioApiListComponent;

    beforeEach(() => {
      apiListComponent = fixture.debugElement.query(By.css('daffio-api-list')).componentInstance;
    });

    it('should pass data down from `apiList$', () => {
      expect(apiListComponent.apiList).toEqual(stubDocsList);
    });
  });
});
