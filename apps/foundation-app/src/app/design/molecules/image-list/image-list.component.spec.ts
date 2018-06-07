import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListComponent } from './image-list.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<image-list [imgUrls]="imgUrlsValue" (notifySelectedImg)="selectedImgFunction($event)"></image-list>'})
class TestImageListWrapper {
  imgUrlsValue: string[];
  selectedImgFunction: Function;
}

describe('ImageListComponent', () => {
  let component: TestImageListWrapper;
  let fixture: ComponentFixture<TestImageListWrapper>;
  let imageListComponent;
  let stubImgUrls;

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
    stubImgUrls = [
      '/assets/mh04-green_alt1.jpg',
      '/assets/mh04-green_alt1.jpg'
    ];
    component.selectedImgFunction = () => {};
    component.imgUrlsValue = stubImgUrls;
    spyOn(component, 'selectedImgFunction');
    imageListComponent = fixture.debugElement.query(By.css('image-list'));
    spyOn(imageListComponent.componentInstance, 'selectImg').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take imgUrls as input', () => {
    expect(imageListComponent.componentInstance.imgUrls).toEqual(stubImgUrls);
  });

  it('should call given function when notifySelectedImg is emitted', () => {
    imageListComponent.componentInstance.notifySelectedImg.emit(stubImgUrls[0]);

    expect(component.selectedImgFunction).toHaveBeenCalledWith(stubImgUrls[0]);
  });

  describe('ngOnInit', () => {
    
    it('should call selectImg', () => {
      expect(imageListComponent.componentInstance.selectImg).toHaveBeenCalledWith(stubImgUrls[0]);
    });
  });

  describe('selectImg', () => {

    beforeEach(() => {
      spyOn(imageListComponent.componentInstance.notifySelectedImg, 'emit');

      imageListComponent.componentInstance.selectImg(stubImgUrls[1]);
    });
    
    it('should set selectedImgUrl', () => {
      expect(imageListComponent.componentInstance.selectedImgUrl).toEqual(stubImgUrls[1]);
    });

    it('should call notifySelectedImg.emit', () => {
      expect(imageListComponent.componentInstance.notifySelectedImg.emit).toHaveBeenCalledWith(stubImgUrls[1]);
    });
  });

  describe('when an img is clicked', () => {
    
    it('should call selectImg with clicked imgUrl', () => {
      let clickedImgIndex = 1;
      fixture.debugElement.queryAll(By.css('img'))[clickedImgIndex].nativeElement.click();

      expect(imageListComponent.componentInstance.selectImg).toHaveBeenCalledWith(stubImgUrls[clickedImgIndex]);
    });
  });
});
