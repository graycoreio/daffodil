import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import {
  Subject,
  take,
  takeUntil,
} from 'rxjs';

import { DaffDriverConfig } from '../../interfaces/driver-config.interface';
import { DaffDevToolsConfigService } from '../../services/dev-tools-config.service';
import { DaffDriverSectionComponent } from '../driver-section/driver-section.component';

@Component({
  selector: 'daff-debug-bar',
  standalone: true,
  imports: [DaffDriverSectionComponent],
  templateUrl: './debug-bar.component.html',
  styleUrls: ['./debug-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffDebugBarComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  readonly configService = inject(DaffDevToolsConfigService, { optional: true });

  isCollapsed = true;


  isHidden = false;

  hasInteracted = false;

  drivers: DaffDriverConfig[] = [];

  ngOnInit() {
    if (!this.configService) {
      return;
    }

    // Subscribe to driver configurations
    this.configService.drivers$
      .pipe(takeUntil(this.destroy$))
      .subscribe(drivers => {
        this.drivers = drivers;
      });

    // Subscribe to config for initial settings
    this.configService.config$
      .pipe(take(1))
      .subscribe(config => {
        // Component starts collapsed by default, so only expand if startCollapsed is false
        if (!config.startCollapsed) {
          this.isCollapsed = false;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  onToggleClick() {
    this.hasInteracted = true;
    this.toggleDebugBar();
  }

  toggleDebugBar() {
    if (this.isHidden) {
      return;
    }
    this.isCollapsed = !this.isCollapsed;
  }

  hideDebugBar(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.isHidden = true;
    this.isCollapsed = false;
  }

  showDebugBar() {
    this.isHidden = false;
    this.isCollapsed = true;
  }
}
