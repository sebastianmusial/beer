import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import { Beer } from '../models';

@Pipe({
  name: 'BeerSortPipe'
})
export class BeerSortPipe implements PipeTransform {
  transform(beers: Beer[], sortBy = 'name', sortDir = 'asc'): Beer[] {
    return orderBy(beers, [sortBy], [sortDir as 'asc' | 'desc']);
  }
}
