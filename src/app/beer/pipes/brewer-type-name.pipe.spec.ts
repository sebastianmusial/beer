import { BrewerTypeNamePipe } from './brewer-type-name.pipe';
import { BrewerType } from '../models';

describe('BrewerTypeNamePipe', () => {
  const pipe = new BrewerTypeNamePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return proper brewer type name', () => {
    expect(pipe.transform(BrewerType.Favourite)).toEqual(pipe.favouriteName);
    expect(pipe.transform(BrewerType.Popular)).toEqual(pipe.popularName);
    expect(pipe.transform(BrewerType.Disliked)).toEqual(pipe.dislikedName);
    expect(pipe.transform('unknown' as BrewerType)).toEqual(pipe.defaultName);
  });
});
