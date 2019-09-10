import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSetComponent } from './link-set.component';

describe('LinkSetComponent', () => {
  let component: LinkSetComponent;
  let fixture: ComponentFixture<LinkSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LinkSetComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
