import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { BeerComponent } from './containers';
import { BeerFiltersComponent, BeerItemComponent, BeerListComponent, BeerSettingsComponent, BeerDialogComponent } from './components';
import { BeerService, BeerFactory, BeerSettingsService, BeerSettingsFormService } from './shared';
import { BrewerTypeNamePipe, BeerSortPipe } from './pipes';

const declarations = [
  BeerComponent,
  BeerFiltersComponent,
  BeerListComponent,
  BeerItemComponent,
  BeerSettingsComponent,
  BeerDialogComponent,
  BrewerTypeNamePipe,
  BeerSortPipe,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [
    ...declarations,
  ],
  exports: [
    BeerComponent,
  ],
  providers: [
    BeerService,
    BeerFactory,
    BeerSettingsService,
    BeerSettingsFormService,
  ]
})
export class BeerModule { }
