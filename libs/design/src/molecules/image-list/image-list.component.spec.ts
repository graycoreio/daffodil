import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ImageListComponent } from './image-list.component';

@Component({template: '<image-list class="host-component"><div class="inner-element"></div></image-list>'})
class TestImageListWrapper {}

describe('ImageListComponent', () => {
  let component: TestImageListWrapper;
  let fixture: ComponentFixture<TestImageListWrapper>;
  let hostElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestImageListWrapper,
        ImageListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageListWrapper);
    component = fixture.componentInstance;

    hostElement = fixture.debugElement.query(By.css('.host-component'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an image-list class to host element', () => {
    expect(hostElement.nativeElement.classList.contains('image-list')).toBeTruthy();
  });

  it('should transclude', () => {
    expect(hostElement.query(By.css('.inner-element'))).not.toBeNull();
  });
});
