import { BeerSortPipe } from './beer-sort.pipe';
import { Beer } from '../models';

describe('BeerSortPipe', () => {
  const pipe = new BeerSortPipe();
  const beerA = { name: 'A Test', price: 1.3, type: 'A_test' } as Beer;
  const beerB = { name: 'B Test', price: 4.3, type: 'B_test' } as Beer;
  const beerC = { name: 'C Test', price: 1.4, type: 'C_test' } as Beer;
  const beers = [ beerB, beerA, beerC];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return sorted list by name', () => {
    const result = [beerA, beerB, beerC];
    expect(pipe.transform(beers)).toEqual(result);
    expect(pipe.transform(beers, 'name', 'desc')).toEqual(result.reverse());
  });

  it('should return sorted by price', () => {
    const result = [beerA, beerC, beerB];
    expect(pipe.transform(beers, 'price', 'asc')).toEqual(result);
    expect(pipe.transform(beers, 'price', 'desc')).toEqual(result.reverse());
  });

  it('should return sorted by type', () => {
    const result = [beerA, beerB, beerC];
    expect(pipe.transform(beers, 'type', 'asc')).toEqual(result);
    expect(pipe.transform(beers, 'type', 'desc')).toEqual(result.reverse());
  });
});
