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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffAccordionComponent } from '../accordion/accordion.component';
import { DaffNavAccordionItemComponent } from './nav-accordion-item.component';


@Component({ template: `
<daff-accordion>
	<daff-nav-accordion-item [initiallyActive]="initiallyActiveValue">
		<h3 daffAccordionItemTitle>Size and Fit</h3>
		<div daffAccordionItemContent>no content</div>
	</daff-nav-accordion-item>
</daff-accordion>
` })
class UsageWrapperComponent {
  initiallyActiveValue: boolean;
}

describe('DaffNavAccordionItemComponent', () => {

  describe('usage', () => {
    let fixture: ComponentFixture<UsageWrapperComponent>;
    let wrapper: UsageWrapperComponent;
    let accordionHeader: DebugElement;
    let daffNavAccordionItem: DaffNavAccordionItemComponent;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          FontAwesomeModule,
        ],
        declarations: [
          UsageWrapperComponent,
          DaffNavAccordionItemComponent,
          DaffAccordionComponent,
        ],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(UsageWrapperComponent);
      wrapper = fixture.componentInstance;

      fixture.detectChanges();

      daffNavAccordionItem = fixture.debugElement.query(By.css('daff-nav-accordion-item')).componentInstance;
      accordionHeader = fixture.debugElement.query(By.css('.daff-nav-accordion-item__header'));
    });

    it('should create', () => {
      expect(daffNavAccordionItem).toBeTruthy();
    });

    it('should set _open to false by default', () => {
      expect(daffNavAccordionItem._open).toEqual(false);
    });

    it('should set _animationState to void by default', () => {
      expect(daffNavAccordionItem._animationState).toEqual('void');
    });

    it('should be able to accept an initiallyActive input', () => {
      wrapper.initiallyActiveValue = false;

      fixture.detectChanges();

      expect(daffNavAccordionItem.initiallyActive).toEqual(false);

      wrapper.initiallyActiveValue = true;

      fixture.detectChanges();

      expect(daffNavAccordionItem.initiallyActive).toEqual(true);
    });

    describe('ngOnInit', () => {

      describe('when initiallyActive is true', () => {

        beforeEach(() => {
          wrapper.initiallyActiveValue = true;
          fixture.detectChanges();
        });

        it('should set _open to true', () => {
          daffNavAccordionItem.ngOnInit();
          expect(daffNavAccordionItem._open).toBeTruthy();
        });
      });

      describe('when initiallyActive is not set', () => {

        beforeEach(() => {
          wrapper.initiallyActiveValue = undefined;
          fixture.detectChanges();
        });

        it('should set open to false', () => {
          daffNavAccordionItem.ngOnInit();
          expect(daffNavAccordionItem._open).toBeFalsy();
        });
      });
    });

    describe('when accordion header is clicked', () => {

      beforeEach(() => {
        spyOn(daffNavAccordionItem, 'toggleActive');

        accordionHeader.nativeElement.click();
      });

      it('should call toggleActive', () => {
        expect(daffNavAccordionItem.toggleActive).toHaveBeenCalledWith();
      });
    });

    describe('toggleActive', () => {
      it('should toggle open', () => {
        daffNavAccordionItem._open = false;

        daffNavAccordionItem.toggleActive();
        expect(daffNavAccordionItem._open).toEqual(true);

        daffNavAccordionItem.toggleActive();
        expect(daffNavAccordionItem._open).toEqual(false);
      });

      it('should toggle _animationState between void and open', () =>  {
        daffNavAccordionItem.toggleActive();
        expect(daffNavAccordionItem._animationState).toEqual('open');

        daffNavAccordionItem.toggleActive();
        expect(daffNavAccordionItem._animationState).toEqual('void');
      });
    });
  });

  @Component({ template: `
	<daff-accordion>
		<daff-nav-accordion-item>
			<daff-accordion>
				<daff-nav-accordion-item [initiallyActive]="initiallyActiveValue">
					<h3 daffAccordionItemTitle>Size and Fit</h3>
					<div daffAccordionItemContent>no content</div>
				</daff-nav-accordion-item>
			</daff-accordion>
		</daff-nav-accordion-item>
	</daff-accordion>
	` })
  class FirstChildNavWrapperComponent {
    initiallyActiveValue: boolean;
  }

  describe('when it is the first child nav-accordion-item', () => {
	  let fixture: ComponentFixture<FirstChildNavWrapperComponent>;

	  beforeEach(waitForAsync(() => {
	    TestBed.configureTestingModule({
	      imports: [
	        NoopAnimationsModule,
	        FontAwesomeModule,
	      ],
	      declarations: [
	        FirstChildNavWrapperComponent,
	        DaffNavAccordionItemComponent,
	        DaffAccordionComponent,
	      ],
	    })
	      .compileComponents();
	  }));

	  beforeEach(() => {
	    fixture = TestBed.createComponent(FirstChildNavWrapperComponent);

	    fixture.detectChanges();
	  });

	  it('should have a level of 0', () => {
	    const navAccordionItemUnderTest: DaffNavAccordionItemComponent =
				fixture.debugElement.queryAll(By.css('daff-nav-accordion-item'))[1].componentInstance;

	    expect(navAccordionItemUnderTest._level).toEqual(0);
	  });
  });

  @Component({ template: `
		<daff-accordion>
			<daff-nav-accordion-item [initiallyActive]="initiallyActiveValue">
				<h3 daffAccordionItemTitle>Size and Fit</h3>
				<daff-nav-accordion-item [initiallyActive]="initiallyActiveValue">
					<h3 daffAccordionItemTitle>Size and Fit</h3>
				</daff-nav-accordion-item>
			</daff-nav-accordion-item>
		</daff-accordion>
	` })
  class NotFirstChildNavWrapperComponent {
    initiallyActiveValue: boolean;
  }

  describe('when it is not the first child nav-accordion-item', () => {
	  let fixture: ComponentFixture<NotFirstChildNavWrapperComponent>;

	  beforeEach(waitForAsync(() => {
	    TestBed.configureTestingModule({
	      imports: [
	        NoopAnimationsModule,
	        FontAwesomeModule,
	      ],
	      declarations: [
	        NotFirstChildNavWrapperComponent,
	        DaffNavAccordionItemComponent,
	        DaffAccordionComponent,
	      ],
	    })
	      .compileComponents();
	  }));

	  beforeEach(() => {
	    fixture = TestBed.createComponent(NotFirstChildNavWrapperComponent);

	    fixture.detectChanges();
	  });

	  it('should have a level that matches the depth of the nav-accordion-item', () => {
	    const navAccordionItemUnderTest: DaffNavAccordionItemComponent =
				fixture.debugElement.queryAll(By.css('daff-nav-accordion-item'))[1].componentInstance;

	    expect(navAccordionItemUnderTest._level).toEqual(1);
	  });
  });

  @Component({ template: `
		<daff-accordion>
			<daff-nav-accordion-item [initiallyActive]="initiallyActiveValue">
				<h3 daffAccordionItemTitle>Size and Fit</h3>
				<daff-nav-accordion-item [initiallyActive]="initiallyActiveValue">
					<h3 daffAccordionItemTitle>Size and Fit</h3>
				</daff-nav-accordion-item>
			</daff-nav-accordion-item>
		</daff-accordion>
	` })
  class HasChildNavWrapperComponent {
    initiallyActiveValue: boolean;
  }

  describe('when it has a child nav-accordion-item', () => {
	  let fixture: ComponentFixture<HasChildNavWrapperComponent>;

	  beforeEach(waitForAsync(() => {
	    TestBed.configureTestingModule({
	      imports: [
	        NoopAnimationsModule,
	        FontAwesomeModule,
	      ],
	      declarations: [
	        HasChildNavWrapperComponent,
	        DaffNavAccordionItemComponent,
	        DaffAccordionComponent,
	      ],
	    })
	      .compileComponents();
	  }));

	  beforeEach(() => {
	    fixture = TestBed.createComponent(HasChildNavWrapperComponent);

	    fixture.detectChanges();
	  });

	  it('should add a chevron to the accordion item title', () => {
	    const suffix = fixture.debugElement.query(By.css('[daffSuffix]'));

	    expect(suffix).toBeDefined();
	  });
  });

  @Component({ template: `
		<daff-accordion>
			<daff-nav-accordion-item [initiallyActive]="initiallyActiveValue">
				<h3 daffAccordionItemTitle>Size and Fit</h3>
			</daff-nav-accordion-item>
		</daff-accordion>
	` })
  class HasNoChildNavWrapperComponent {
    initiallyActiveValue: boolean;
  }

  describe('when it does not have a child nav-accordion-item', () => {
	  let fixture: ComponentFixture<HasNoChildNavWrapperComponent>;

	  beforeEach(waitForAsync(() => {
	    TestBed.configureTestingModule({
	      imports: [
	        NoopAnimationsModule,
	        FontAwesomeModule,
	      ],
	      declarations: [
	        HasNoChildNavWrapperComponent,
	        DaffNavAccordionItemComponent,
	        DaffAccordionComponent,
	      ],
	    })
	      .compileComponents();
	  }));

	  beforeEach(() => {
	    fixture = TestBed.createComponent(HasNoChildNavWrapperComponent);

	    fixture.detectChanges();
	  });

	  it('should not add a chevron to the accordion item title', () => {
	    const suffix = fixture.debugElement.query(By.css('[daffSuffix]'));

	    expect(suffix).toBeNull();
	  });
  });
});

