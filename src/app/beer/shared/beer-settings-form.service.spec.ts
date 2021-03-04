import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BeerSettingsFormService } from './beer-settings-form.service';
import { BeerSettingsService } from './beer-settings.service';

describe('BeerSettingsFormService', () => {
  let service: BeerSettingsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        BeerSettingsService,
        BeerSettingsFormService,
      ]
    });
    service = TestBed.inject(BeerSettingsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return from group with initial data', () => {
    expect(service.buildForm()).toBeTruthy();
  });

  it('should has initial from ', () => {
    expect(service.form).toBeTruthy();
  });

  it('should has initial controls ', () => {
    expect(service.form.controls.sortBy).toBeTruthy();
    expect(service.form.controls.sortDir).toBeTruthy();
    expect(service.form.controls.themeMode).toBeTruthy();
    expect(service.form.controls.limit).toBeTruthy();
  });

  it('should validate limit field', () => {
    const control = service.form.controls.limit;

    control.setValue(15);
    expect(control.valid).toBeTrue();

    control.setValue(30);
    expect(control.valid).toBeTrue();

    control.setValue(31);
    expect(control.valid).toBeFalse();

    control.setValue(14);
    expect(control.valid).toBeFalse();
  });
});
