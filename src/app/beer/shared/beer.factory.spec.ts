import { TestBed } from '@angular/core/testing';

import { BeerFactory } from './beer.factory';
import { Beer, Brewer } from '../models';

describe('BeerFactory', () => {
  let service: BeerFactory;
  const beerA = { name: 'Name A', price: '23.95', type: 'Lager' } as unknown as Beer;
  const beerB = { name: 'Name B', price: '23.95', type: 'Lager' } as unknown as Beer;
  const beerC = { name: 'Name C', price: '23.95', type: 'Lager' } as unknown as Beer;

  const beerAConvertedPrice = { ...beerA, price: Number(beerA.price) } as unknown as Beer;
  const beerBConvertedPrice = { ...beerB, price: Number(beerB.price) } as unknown as Beer;
  const beerCConvertedPrice = { ...beerC, price: Number(beerC.price) } as unknown as Beer;

  const brewerA: Brewer = { name: 'Brewer A', beers: [beerAConvertedPrice, beerBConvertedPrice] };
  const brewerB: Brewer = { name: 'Brewer B', beers: [beerCConvertedPrice] };

  const beers: Beer[] = [
    { ...beerA,  brewer: 'Brewer A' },
    { ...beerB,  brewer: 'Brewer A' },
    { ...beerC,  brewer: 'Brewer B' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BeerFactory
      ]
    });
    service = TestBed.inject(BeerFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return parsed data', () => {
    const result: Brewer[] = [ brewerA, brewerB ];
    expect(service.parse(beers)).toEqual(result);
  });

  it('should return beer with converted price field to number', () => {
    const result = [beerAConvertedPrice, beerBConvertedPrice, beerCConvertedPrice];
    expect(service.convertBeerPrice([beerA, beerB, beerC])).toEqual(result);
  });
});
