import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { BeerSettingsFormService, BeerSettingsService } from '../../shared';
import { BeerSettings, BeerSortBy, BeerSortDir, ThemeMode } from '../../models';

@Component({
  selector: 'app-beer-settings',
  templateUrl: './beer-settings.component.html',
  styleUrls: ['./beer-settings.component.scss']
})
export class BeerSettingsComponent {
  settingsForm = this.beerSettingsFormService.form;
  beerSortBy = BeerSortBy;
  beerSortDir = BeerSortDir;
  themeMode = ThemeMode;

  constructor(
    private beerSettingsFormService: BeerSettingsFormService,
    private beerSettingsService: BeerSettingsService,
    private dialogRef: MatDialogRef<BeerSettingsComponent>
  ) {}

  onSubmit(): void {
    const settings = this.settingsForm.value as BeerSettings;

    this.beerSettingsService.setSettings(settings);
    this.dialogRef.close();
  }
}
