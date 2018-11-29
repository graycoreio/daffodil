import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffImageListComponent } from './image-list.component';

@Component({template: '<daff-image-list class="host-component"><div class="inner-element"></div></daff-image-list>'})
class TestDaffImageListWrapper {}

describe('DaffImageListComponent', () => {
  let component: TestDaffImageListWrapper;
  let fixture: ComponentFixture<TestDaffImageListWrapper>;
  let hostElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffImageListWrapper,
        DaffImageListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffImageListWrapper);
    component = fixture.componentInstance;

    hostElement = fixture.debugElement.query(By.css('.host-component'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an daff-image-list class to host element', () => {
    expect(hostElement.nativeElement.classList.contains('daff-image-list')).toBeTruthy();
  });

  it('should transclude', () => {
    expect(hostElement.query(By.css('.inner-element'))).not.toBeNull();
  });
});
