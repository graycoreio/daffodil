import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffTreeModule } from '@daffodil/design/tree';

import { DaffioDocsListComponent } from './docs-list.component';

describe('DaffioDocsListComponent', () => {
  let component: DaffioDocsListComponent;
  let fixture: ComponentFixture<DaffioDocsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioDocsListComponent,
        RouterTestingModule,
        NoopAnimationsModule,
        DaffTreeModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsListComponent);
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

    component.list = {
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

  it('should render an anchor tag when the guide child has no children', () => {
    const anchorTags = fixture.debugElement.queryAll(By.css('a'));
    expect(anchorTags.length).toEqual(2);
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toEqual(1);
  });
});
