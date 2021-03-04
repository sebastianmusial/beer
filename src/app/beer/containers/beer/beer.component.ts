import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Brewer, BrewerType } from '../../models';
import { BeerService } from '../../shared';
import { BeerSettingsComponent } from '../../components';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent {
  brewerType = BrewerType;
  brewers$: Observable<Brewer[]> = this.beerService.getBrewers();

  constructor(
    private beerService: BeerService,
    private settingsDialog: MatDialog
  ) {}

  openSettings(): void {
    this.settingsDialog.open(BeerSettingsComponent);
  }
}
