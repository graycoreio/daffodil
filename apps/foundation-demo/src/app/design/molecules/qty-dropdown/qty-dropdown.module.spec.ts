import { QtyDropdownModule } from './qty-dropdown.module';

describe('QtyDropdownModule', () => {
  let qtyDropdownModule: QtyDropdownModule;

  beforeEach(() => {
    qtyDropdownModule = new QtyDropdownModule();
  });

  it('should create an instance', () => {
    expect(qtyDropdownModule).toBeTruthy();
  });
});
