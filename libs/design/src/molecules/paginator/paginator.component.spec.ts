import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DaffPaginatorNumberOfPagesErrorMessage,
  DaffPaginatorPageOutOfRangeErrorMessage,
} from './paginator-errors';
import { DaffPaginatorComponent } from './paginator.component';
import { DaffPaginatorModule } from './paginator.module';

@Component({ template: '<daff-paginator aria-label="id" [numberOfPages]="numberOfPagesValue" [currentPage]="currentPageValue"></daff-paginator>' })

class WrapperComponent {
  numberOfPagesValue = 20;
  currentPageValue = 2;
}

describe('DaffPaginatorComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffPaginatorComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffPaginatorModule,
      ],
      declarations: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-paginator'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-paginator" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-paginator': true,
    }));
  });

  it('should be able to take currentPage as input', () => {
    expect(component.currentPage).toEqual(wrapper.currentPageValue);
  });

  it('should be able to take numberOfPages as input', () => {
    expect(component.numberOfPages).toEqual(wrapper.numberOfPagesValue);
  });

  it('should set _paginatorId from the aria-label of the host element', () => {
    expect(component._paginatorId).toEqual('id');
  });

  it('should show page numbers within one of the current page', () => {
    const paginatorText = fixture.debugElement.query(By.css('daff-paginator')).nativeElement.innerText;
    const lesserPage = component.currentPage - 1;
    const greaterPage = component.currentPage + 1;

    expect(paginatorText.includes(lesserPage)).toBeTruthy();
    expect(paginatorText.includes(greaterPage)).toBeTruthy();
  });

  describe('when the numberOfPages is less than 2', () => {

    it('should only render one .daff-paginator__page-link', () => {
      wrapper.numberOfPagesValue = 1;
      wrapper.currentPageValue = 1;
      fixture.detectChanges();

      const pageLinks = fixture.debugElement.queryAll(By.css('.daff-paginator__page-link'));
      expect(pageLinks.length).toEqual(1);
    });
  });

  describe('when the numberOfPages is less than 1', () => {

    it('should throw an error', () => {
      wrapper.numberOfPagesValue = 0;
      wrapper.currentPageValue = 0;

      expect(() => fixture.detectChanges()).toThrowError(DaffPaginatorNumberOfPagesErrorMessage);
    });
  });

  describe('when the currentPage is greater than the numberOfPages', () => {

    it('should throw an error', () => {
      wrapper.numberOfPagesValue = 5;
      wrapper.currentPageValue = 10;

      expect(() => fixture.detectChanges()).toThrowError(DaffPaginatorPageOutOfRangeErrorMessage);
    });
  });

  describe('when the previous button is clicked', () => {
    it('should emit notifyPageChange with one less than the current page', () => {
      spyOn(component.notifyPageChange, 'emit');
      fixture.debugElement.query(By.css('.daff-paginator__previous')).nativeElement.click();

      expect(component.notifyPageChange.emit).toHaveBeenCalledWith(wrapper.currentPageValue-1);
    });
  });

  describe('when the next button is clicked', () => {
    it('should emit notifyPageChange with one more than the current page', () => {
      spyOn(component.notifyPageChange, 'emit');
      fixture.debugElement.query(By.css('.daff-paginator__next')).nativeElement.click();

      expect(component.notifyPageChange.emit).toHaveBeenCalledWith(wrapper.currentPageValue+1);
    });
  });

  describe('showNumber', () => {
    describe('when the current page is 1 or 2', () => {
      it('should show page numbers 3 and 4', () => {
        wrapper.currentPageValue = 1;
        fixture.detectChanges();
        const paginator = fixture.debugElement.query(By.css('.daff-paginator'));

        expect(paginator.nativeElement.innerText.includes('3')).toBeTruthy();
        expect(paginator.nativeElement.innerText.includes('4')).toBeTruthy();
      });
    });

    describe('when the current page is one of the last two pages', () => {
      it('should show _numberOfPages-3 and lesser numbers', () => {
        wrapper.currentPageValue = wrapper.numberOfPagesValue;
        fixture.detectChanges();
        const paginator = fixture.debugElement.query(By.css('.daff-paginator'));

        expect(paginator.nativeElement.innerText.includes((wrapper.numberOfPagesValue - 3).toString())).toBeTruthy();
        expect(paginator.nativeElement.innerText.includes((wrapper.numberOfPagesValue - 2).toString())).toBeTruthy();
      });
    });
  });

  describe('ellipsis appearance', () => {
    describe('when all pages between currentPage and page 1 are shown', () => {
      it('should not show an ellipsis between 1 and the current page', () => {
        wrapper.currentPageValue = 3;
        fixture.detectChanges();
        const paginator = fixture.debugElement.query(By.css('.daff-paginator'));

        expect(paginator.nativeElement.innerText.replace(/[\n\r]/g, '').includes('1...')).toBeFalsy();
      });
    });

    describe('when some pages between the currentPage and page 1 are not shown', () => {
      it('should show an ellipsis between 1 and the current page', () => {
        wrapper.currentPageValue = 7;
        fixture.detectChanges();
        const paginator = fixture.debugElement.query(By.css('.daff-paginator'));

        expect(paginator.nativeElement.innerText.replace(/[\n\r]/g, '').includes('1...')).toBeTruthy();
      });
    });

    describe('when some pages between the currentPage and the last page are not shown', () => {
      it('should show an ellipsis between the current page and the last page', () => {
        wrapper.currentPageValue = wrapper.numberOfPagesValue - 8;
        fixture.detectChanges();
        const paginator = fixture.debugElement.query(By.css('.daff-paginator'));

        expect(paginator.nativeElement.innerText.replace(/[\n\r]/g, '').includes('...20')).toBeTruthy();
      });
    });

    describe('when all pages between the currentPage and the last page are shown', () => {
      it('should not show an ellipsis between the current page and the last page', () => {
        wrapper.currentPageValue = wrapper.numberOfPagesValue - 1;
        fixture.detectChanges();
        const paginator = fixture.debugElement.query(By.css('.daff-paginator'));

        expect(paginator.nativeElement.innerText.replace(/[\n\r]/g, '').includes('...20')).toBeFalsy();
      });
    });
  });

  describe('changing the current page number', () => {
    describe('when the currentPage is 1', () => {
      it('should disable the previous button', () => {
        wrapper.currentPageValue = 1;
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('.daff-paginator__previous')).nativeElement.disabled).toBeTruthy();
      });
    });

    describe('when the currentPage is the last page', () => {
      it('should disable the next button', () => {
        wrapper.currentPageValue = wrapper.numberOfPagesValue;
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('.daff-paginator__next')).nativeElement.disabled).toBeTruthy();
      });
    });

    describe('when a page number is clicked', () => {
      it('should emit notifyPageChange with the page number', () => {
        spyOn(component.notifyPageChange, 'emit');
        const paginatorElements = fixture.debugElement.queryAll(By.css('.daff-paginator__page-link'));
        paginatorElements[4].nativeElement.click();

        expect(component.notifyPageChange.emit).toHaveBeenCalledWith(parseInt(paginatorElements[4].nativeElement.innerText, 10));
      });
    });
  });

  describe('when the numberOfPages is changed', () => {
    it('should update the view with the new number of pages', () => {
      wrapper.numberOfPagesValue = 10;
      fixture.detectChanges();
      const paginator = fixture.debugElement.query(By.css('.daff-paginator'));

      expect(paginator.nativeElement.innerText.replace(/[\n\r]/g, '').includes('20')).toBeFalsy();
    });
  });
});
