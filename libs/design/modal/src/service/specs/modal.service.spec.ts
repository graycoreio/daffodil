import { OverlayContainer } from '@angular/cdk/overlay';
import {
  Component,
  ViewContainerRef,
} from '@angular/core';
import {
  TestBed,
  waitForAsync,
  ComponentFixture,
  flush,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from '../../modal/modal.component';
import { DaffModalService } from '../modal.service';

@Component({
  selector: 'daff-dynamic-component',
  template: `
		<p>It works!</p>
	`,
})
class DynamicComponent {}

@Component({
  selector: 'daff-dynamic-component-two',
  template: `
		<p>It works!</p>
	`,
})
class DynamicTwoComponent {}

@Component({
  template: '',
})
class WrapperComponent {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

describe('@daffodil/design/modal | DaffModalService', () => {
  let modalService: DaffModalService;
  let service: DaffModalService;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicComponent,
        DynamicTwoComponent,
        DaffModalComponent,
        NoopAnimationsModule,
        WrapperComponent,
      ],
      providers: [
        DaffModalService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(DaffModalService);
    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();
    fixture = TestBed.createComponent(WrapperComponent);
    fixture.detectChanges();
    wrapper = fixture.componentInstance;
    modalService = TestBed.inject(DaffModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('opening a modal', () => {
    it('should be able to open a modal with a given component', () => {
      expect(overlayContainerElement.textContent).not.toContain('It works!');
      service.open(DynamicComponent);
      expect(overlayContainerElement.textContent).toContain('It works!');
    });

    it('should allow a user to override what happens when the backdrop is clicked', () => {
      let count = 0;
      service.open(DynamicComponent, {
        onBackdropClicked: () => {
          count++;
        },
      });
      const backdrop = <HTMLElement>overlayContainerElement.querySelector(
        '.cdk-overlay-backdrop',
      );
      backdrop.click();
      expect(count).toEqual(1);
      expect(overlayContainerElement.textContent).toContain('It works!');
    });

    it('should close any previously opened modals', fakeAsync(() => {
      modalService.open(DynamicComponent);
      modalService.open(DynamicComponent);

      fixture.detectChanges();
      tick(300);
      flush();

      expect(
        overlayContainerElement.querySelectorAll('daff-dynamic-component').length,
      ).toEqual(1);
    }));

    it('should close all modals except the last one opened', fakeAsync(() => {
      modalService.open(DynamicComponent);
      modalService.open(DynamicTwoComponent);

      fixture.detectChanges();
      tick(300);
      flush();

      expect(
        overlayContainerElement.querySelector('daff-dynamic-component-two'),
      ).toBeDefined();
      expect(
        overlayContainerElement.querySelector('daff-dynamic-component'),
      ).toBeNull();
    }));
  });

  describe('the default configuration', () => {
    it('should configure the modal to close when the backdrop is clicked', fakeAsync(() => {
      service.open(DynamicComponent);
      expect(overlayContainerElement.textContent).toContain('It works!');
      const backdrop = <HTMLElement>overlayContainerElement.querySelector(
        '.cdk-overlay-backdrop',
      );

      backdrop.click();
      fixture.detectChanges();
      tick(300);
      flush();

      expect(overlayContainerElement.textContent).not.toContain('It works!');
    }));
  });
});
