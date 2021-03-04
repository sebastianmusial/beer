import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Beer, BeerSettings, Brewer, BrewerType } from '../../models';
import { BeerSettingsService } from '../../shared';
import { BeerDialogComponent } from '../beer-dialog/beer-dialog.component';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  @Input() type: BrewerType;
  @Input() brewers: Brewer[] = [];

  settings$: Observable<BeerSettings>;
  brewerControl = new FormControl();
  page = 1;

  constructor(
    private beerSettingsService: BeerSettingsService,
    private beerDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.settings$ = this.beerSettingsService.settings$;
  }

  onLoadMore(): void {
    this.page += 1;
  }

  openDialog(beer: Beer): void {
    this.beerDialog.open(BeerDialogComponent, {
      data: { beer }
    });
  }
}
