import { OverlayContainer } from '@angular/cdk/overlay';
import {
  Component,
  ViewContainerRef,
} from '@angular/core';
import {
  waitForAsync,
  TestBed,
  ComponentFixture,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from '../../modal/modal.component';
import { DaffModalService } from '../modal.service';

@Component({
  selector: 'daff-dynamic-component',
  template: `
		<p>It works!</p>
	`,
  standalone: true,
})
class DynamicComponent {}

@Component({
  selector: 'daff-dynamic-component-two',
  template: `
		<p>It works!</p>
	`,
  standalone: true,
})
class DynamicTwoComponent {}

@Component({
  template: '',
  standalone: true,
})
class WrapperComponent {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

describe('@daffodil/design/modal | DaffModalService', () => {
  let modalService: DaffModalService;
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

    modalService = TestBed.inject(DaffModalService);
    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();
    fixture = TestBed.createComponent(WrapperComponent);
    fixture.detectChanges();
    wrapper = fixture.componentInstance;
  }));

  describe('opening multiple modals', () => {
    it('should allow you to open multiple modals at time', () => {
      modalService.open(DynamicComponent);
      modalService.open(DynamicComponent);

      expect(
        overlayContainerElement.querySelectorAll('daff-dynamic-component').length,
      ).toEqual(2);
    });

    it('should close only appropriate modal when a modal is closed', fakeAsync(() => {
      const modal1 = modalService.open(DynamicComponent);
      const modal2 = modalService.open(DynamicTwoComponent);

      modalService.close(modal1);

      fixture.detectChanges();
      flush();

      expect(
        overlayContainerElement.querySelector('daff-dynamic-component-two'),
      ).toBeDefined();
      expect(
        overlayContainerElement.querySelector('daff-dynamic-component'),
      ).toBeNull();
    }));
  });
});
