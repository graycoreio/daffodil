import {
  Component,
  ViewContainerRef,
} from '@angular/core';
import {
  TestBed,
  waitForAsync,
  ComponentFixture,
} from '@angular/core/testing';

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
  template: '',
})
class WrapperComponent {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

describe('@daffodil/design/modal | DaffModalService | Positions', () => {
  let modalService: DaffModalService;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicComponent,
        DaffModalComponent,
        WrapperComponent,
      ],
      providers: [
        DaffModalService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    modalService = TestBed.inject(DaffModalService);
    fixture = TestBed.createComponent(WrapperComponent);
    fixture.detectChanges();
  });

  it('should vertically center the modal when no position is provided', () => {
    modalService.open(DynamicComponent);
    fixture.detectChanges();

    const overlayWrapper = <HTMLElement>document.querySelector('.cdk-global-overlay-wrapper');

    expect(overlayWrapper.style.alignItems).toBe('center');
  });

  it('should center the modal vertically when vertical position is set to "center"', () => {
    modalService.open(DynamicComponent, {
      position: { vertical: 'center' },
    });
    fixture.detectChanges();

    const overlayWrapper = <HTMLElement>document.querySelector('.cdk-global-overlay-wrapper');
    expect(overlayWrapper.style.alignItems).toBe('center');
  });

  describe('when vertical position is "top"', () => {
    it('should position the modal at the top with default offset', () => {
      modalService.open(DynamicComponent, {
        position: { vertical: 'top' },
      });
      fixture.detectChanges();

      const overlayPane = <HTMLElement>document.querySelector('.cdk-overlay-pane');
      expect(overlayPane.style.marginTop).toBe('15vh');
    });

    it('should position the modal at the top with custom offsetTop', () => {
      modalService.open(DynamicComponent, {
        position: { vertical: 'top', offsetTop: '5rem' },
      });
      fixture.detectChanges();

      const overlayPane = <HTMLElement>document.querySelector('.cdk-overlay-pane');
      expect(overlayPane.style.marginTop).toBe('5rem');
    });
  });

  it('should always center the modal horizontally', () => {
    modalService.open(DynamicComponent);
    fixture.detectChanges();

    const overlayWrapper = <HTMLElement>document.querySelector('.cdk-global-overlay-wrapper');

    expect(overlayWrapper.style.justifyContent).toBe('center');
  });
});
