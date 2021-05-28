import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffLinkSetModule } from '@daffodil/design';

import { DaffioGuidesListComponent } from './guides-list.component';

describe('DaffioGuidesListComponent', () => {
  let component: DaffioGuidesListComponent;
  let fixture: ComponentFixture<DaffioGuidesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DaffioGuidesListComponent],
      imports: [
        RouterTestingModule,
        DaffLinkSetModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioGuidesListComponent);
    component = fixture.componentInstance;
    const guideWithoutChildren = {
      id: 'id2',
      title: 'title2',
      children: [],
    };
    const guideWithChildren = {
      id: 'id3',
      title: 'title3',
      children: [
        {
          id: 'id4',
          title: 'title4',
          children: [],
        },
      ],
    };

    component.guideList = {
      id: 'id',
      title: 'title',
      children: [
        guideWithoutChildren,
        guideWithChildren,
      ],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an anchor tag when the guide child has no children', () => {
    const anchorTags = fixture.debugElement.queryAll(By.css('a'));
    expect(anchorTags.length).toEqual(2);
  });

  it('should render another daffio-guides-list when the guide child has children', () => {
    const daffioGuidesList = fixture.debugElement.queryAll(By.css('daffio-guides-list'));
    expect(daffioGuidesList.length).toEqual(1);
  });
});
