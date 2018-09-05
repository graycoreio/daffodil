import { LogoModule } from './logo.module';

describe('LogoModule', () => {
  let logoModule: LogoModule;

  beforeEach(() => {
    logoModule = new LogoModule();
  });

  it('should create an instance', () => {
    expect(logoModule).toBeTruthy();
  });
});
