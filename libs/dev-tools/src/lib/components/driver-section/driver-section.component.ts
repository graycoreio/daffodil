import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';

import {
  DaffDevToolsDriver,
  DaffDevToolsDriverProperty,
} from '../../interfaces/driver';
import { DaffDriverConfig } from '../../interfaces/driver-config.interface';
import { DaffDevToolsConfigService } from '../../services/dev-tools-config.service';

@Component({
  selector: 'daff-driver-section',
  standalone: true,
  templateUrl: './driver-section.component.html',
  styleUrls: ['./driver-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffDriverSectionComponent implements OnInit {
  @Input({ required: true }) driver!: DaffDriverConfig;

  @Output() applyChanges = new EventEmitter<{ driverName: string; newDriverId: string; properties: Record<string, any> }>();
  @Output() resetToDefault = new EventEmitter<string>();
  @Output() testConnection = new EventEmitter<string>();

  selectedDriver: DaffDevToolsDriver | null = null;
  propertyValues: Record<string, any> = {};

  private configService = inject(DaffDevToolsConfigService);

  get selectedDriverMessage() {
    return this.selectedDriver?.message;
  }

  ngOnInit() {
    this.selectedDriver = this.configService.getSelectedDriver(this.driver.name);
    this.propertyValues = this.configService.initializeDriverProperties(this.driver.name);
  }

  onDriverChange(event: Event) {
    const target = <HTMLSelectElement>event.target;
    const newDriverId = target.value;

    // Update the selected driver reference
    this.selectedDriver = this.driver.availableDrivers.find(d => d.id === newDriverId) || null;

    // Load the property values for the new driver from stored configurations
    this.propertyValues = this.configService.getDriverPropertyValues(this.driver.name, newDriverId);
  }

  onPropertyChange(propertyId: string, value: any) {
    this.propertyValues[propertyId] = value;
  }

  getPropertiesEntries(): [string, DaffDevToolsDriverProperty][] {
    if (!this.selectedDriver?.properties) {
      return [];
    }
    return Array.from(this.selectedDriver.properties.entries());
  }


  onApplyChanges() {
    if (this.selectedDriver) {
      // Store the configuration
      this.configService.applyDriverConfiguration(this.driver.name, this.selectedDriver.id, this.propertyValues);
    }
  }

  onResetToDefault() {
    if (this.selectedDriver) {
      // Reset to default values using the service
      this.propertyValues = this.configService.resetDriverToDefaults(
        this.driver.name,
        this.selectedDriver.id,
      );
    }

    this.resetToDefault.emit(this.driver.name);
  }
}
