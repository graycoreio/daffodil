import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffLinkSetModule } from '@daffodil/design';

import { DaffioGuidesNavTreeComponent } from './guides-nav-tree.component';

describe('DaffioGuidesNavTreeComponent', () => {
  let component: DaffioGuidesNavTreeComponent;
  let fixture: ComponentFixture<DaffioGuidesNavTreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DaffioGuidesNavTreeComponent],
      imports: [
        RouterTestingModule,
        DaffLinkSetModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioGuidesNavTreeComponent);
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

  it('should render a daff-nav-accordion-item for each guide', () => {
    const daffNavAccordionItem = fixture.debugElement.queryAll(By.css('daff-nav-accordion-item'));
    expect(daffNavAccordionItem.length).toEqual(4);
  });
});
