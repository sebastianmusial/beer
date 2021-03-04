import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Beer, Brewer } from '../models';
import { BeerFactory } from './beer.factory';

@Injectable()
export class BeerService {
  constructor(
    private httpClient: HttpClient,
    private beerFactory: BeerFactory,
  ) { }

  getBrewers(): Observable<Brewer[]> {
    return this.httpClient
      .get<Beer[]>(`${environment.apiUrl}/beers`)
      .pipe(map(beers => this.beerFactory.parse(beers)));
  }
}
