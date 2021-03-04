import { Injectable } from '@angular/core';
import { Beer, Brewer } from '../models';
import * as _ from 'lodash';

@Injectable()
export class BeerFactory {
  mapData(items: Beer[], name: string): Brewer {
    const beers = this.omitData(items);
    return { name, beers };
  }

  omitData(beers: Beer[]): Beer[] {
    return beers.map(beer => _.omit(beer, 'brewer') as Beer);
  }

  convertBeerPrice(beers: Beer[]): Beer[] {
    return beers.map(item => ({ ...item, price: Number(item.price) }));
  }

  parse(beers: Beer[]): Brewer[] {
    return _(this.convertBeerPrice(beers))
      .groupBy('brewer')
      .map((items, name) => this.mapData(items, name))
      .value();
  }
}
