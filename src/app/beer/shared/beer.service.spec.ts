import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BeerService } from './beer.service';
import { BeerFactory } from './beer.factory';
import { Beer, Brewer } from '../models';
import { environment } from '../../../environments/environment';

describe('BeerService', () => {
  let service: BeerService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BeerService,
        BeerFactory,
      ]
    });

    service = TestBed.inject(BeerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Brewer[]>', () => {
    const beer = { name: 'Name', price: 23.95, type: 'Lager' } as unknown as Beer;
    const brewer: Brewer = { name: 'Brewer', beers: [beer] };
    const brewers: Brewer[] = [ brewer ];

    service
      .getBrewers()
      .subscribe(response => {
        expect(response.length).toBe(1);
        expect(response).toEqual(brewers);
      });

    const req = httpMock.expectOne(`${environment.apiUrl}/beers`);

    expect(req.request.method).toBe('GET');

    req.flush([{ ...beer, brewer: 'Brewer' }]);
  });
});
