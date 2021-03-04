import { Component, Input, OnDestroy, OnInit, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Brewer, BrewerType } from '../../models';
import { BeerSettingsService } from '../../shared';

@Component({
  selector: 'app-beer-filters',
  templateUrl: './beer-filters.component.html',
  styleUrls: ['./beer-filters.component.scss']
})
export class BeerFiltersComponent implements OnInit, OnDestroy {
  @Input() brewers: Brewer[] = [];
  @Input() brewerType: BrewerType;
  @Input() brewerControl: FormControl;

  unsubscribe$ = new Subject();

  constructor(private beerSettingsService: BeerSettingsService) {}

  ngOnInit(): void {
    this.initBrewer();
    this.watchBrewerChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  initBrewer(): void {
    const brewerName = this.beerSettingsService.getBrewer(this.brewerType);
    const brewer = this.brewers.find(({ name}) => name === brewerName);

    this.brewerControl.setValue(brewer || null);
  }

  watchBrewerChanges(): void {
    this.brewerControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(({ name }) => this.beerSettingsService.setBrewer(this.brewerType, name));
  }
}
