import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLandArticleComponent } from './article.component';

describe('DesignLandArticleComponent', () => {
  let component: DesignLandArticleComponent;
  let fixture: ComponentFixture<DesignLandArticleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
				DesignLandArticleComponent
			]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
