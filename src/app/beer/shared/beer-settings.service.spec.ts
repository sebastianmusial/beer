import { TestBed } from '@angular/core/testing';

import { BeerSettingsService } from './beer-settings.service';
import { BeerSettings, BeerSortBy, BeerSortDir, BrewerType, ThemeMode } from '../models';

describe('BeerSettingsService', () => {
  let service: BeerSettingsService;
  const settings: BeerSettings = {
    themeMode: ThemeMode.light,
    sortDir: BeerSortDir.asc,
    sortBy: BeerSortBy.name,
    limit: 10,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ BeerSettingsService ]
    });
    service = TestBed.inject(BeerSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should service has initial settings', () => {
    expect(service.settings$.value).toBeTruthy();
  });

  it('should return saved brewer name from localStorage', () => {
    const brewerName = 'Brewer name';

    service.setBrewer(BrewerType.Disliked, brewerName);
    expect(service.getBrewer(BrewerType.Disliked)).toEqual(brewerName);
  });

  it('should return saved settings from localStorage', () => {
    service.setSettings(settings);
    expect(service.getSettings()).toEqual(settings);
  });

  it('setSettings() should trigger settings event', () => {
    const settingsSpyOn = spyOn(service.settings$, 'next');

    service.setSettings(settings);
    expect(settingsSpyOn).toHaveBeenCalledWith(settings);
  });
});
