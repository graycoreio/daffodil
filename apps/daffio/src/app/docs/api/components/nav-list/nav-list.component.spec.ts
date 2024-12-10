import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffTreeModule } from '@daffodil/design/tree';
import { DaffDocsApiNavList } from '@daffodil/docs-utils';

import { DaffioApiNavListComponent } from './nav-list.component';

describe('DaffioApiNavListComponent', () => {
  let component: DaffioApiNavListComponent;
  let fixture: ComponentFixture<DaffioApiNavListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioApiNavListComponent,
        RouterTestingModule,
        NoopAnimationsModule,
        DaffTreeModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioApiNavListComponent);
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

    component.navList = <DaffDocsApiNavList>{
      id: 'root',
      title: 'root',
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

  it('should render an anchor tag for each of the direct children', () => {
    const anchorTags = fixture.debugElement.queryAll(By.css('a'));
    expect(anchorTags.length).toEqual(2);
  });
});
