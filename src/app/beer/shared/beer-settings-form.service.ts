import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BeerSettingsService } from './beer-settings.service';

@Injectable()
export class BeerSettingsFormService {
  form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder,
    private beerSettingsService: BeerSettingsService,
  ) {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    const { sortDir, sortBy, limit, themeMode } = this.beerSettingsService.getSettings();

    return this.formBuilder.group({
      sortBy: [sortBy],
      sortDir: [sortDir],
      themeMode: [themeMode],
      limit: [limit, [
        Validators.required,
        Validators.min(15),
        Validators.max(30),
      ]]
    });
  }
}
