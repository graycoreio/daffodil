import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Overlay,
  OverlayModule,
  OverlayRef,
} from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffFocusStackService,
  DaffPrefixSuffixModule,
} from '@daffodil/design';

import { DaffToastPositionService } from './position.service';
import { DaffToastService } from './toast.service';
import { DaffToast } from '../interfaces/toast';
import { DaffToastTemplateComponent } from '../toast/toast-template.component';
import { DaffToastComponent } from '../toast/toast.component';
import { DaffToastActionsDirective } from '../toast-actions/toast-actions.directive';
import { DaffToastMessageDirective } from '../toast-message/toast-message.directive';
import { DaffToastTitleDirective } from '../toast-title/toast-title.directive';

describe('@daffodil/design/toast | DaffToastService', () => {
  let service: DaffToastService;
  let mockOverlayRef: jasmine.SpyObj<OverlayRef>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffPrefixSuffixModule,
        FontAwesomeModule,
        PortalModule,
        OverlayModule,
        NoopAnimationsModule,

        DaffToastComponent,
        DaffToastActionsDirective,
        DaffToastTitleDirective,
        DaffToastMessageDirective,
        DaffToastTemplateComponent,
      ],
      providers: [
        DaffToastPositionService,
      ],
    });

    const overlay = TestBed.inject(Overlay);
    mockOverlayRef = jasmine.createSpyObj<OverlayRef>('OverlayRef', {
      attach: {
        instance: { items: []},
        destroy: () => {},
      },
      dispose: null,
    });
    spyOn(overlay, 'create').and.returnValue(mockOverlayRef);

    service = new DaffToastService(
      overlay,
      {
        position: {
          horizontal: 'right',
          vertical: 'bottom',
        },
        useParent: false,
      },
      null,
      TestBed.inject(BreakpointObserver),
      TestBed.inject(DaffToastPositionService),
      TestBed.inject(DaffFocusStackService),
      null,
    );
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('open', () => {
    let result: DaffToast;

    beforeEach(() => {
      result = service.open({
        title: 'title',
      });
    });

    it('should create an overlay with the toast template component', () => {
      expect(mockOverlayRef.attach).toHaveBeenCalledWith(jasmine.objectContaining({ component: DaffToastTemplateComponent }));
    });

    it('should return a toast capable of dismissing the toast', () => {
      result.dismiss();
      expect(() => service.close(result)).toThrowError('The Toast that you are trying to remove does not exist.');
    });
  });

  describe('close', () => {
    it('should error when trying to close a toast that has not been opened', () => {
      expect(() => service.close({
        title: 'title',
        dismiss: null,
        dismissalStream: null,
      })).toThrowError('The Toast that you are trying to remove does not exist.');
    });
  });
});
