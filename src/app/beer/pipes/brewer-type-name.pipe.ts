import { Pipe, PipeTransform } from '@angular/core';
import { BrewerType } from '../models';

@Pipe({
  name: 'brewerTypeName'
})
export class BrewerTypeNamePipe implements PipeTransform {
  favouriteName = 'Favourite brewer';
  popularName = 'Popular brewer';
  dislikedName = 'Disliked brewer';
  defaultName = 'Selected brewer';

  transform(value: BrewerType): string {
    switch (value) {
      case BrewerType.Favourite:
        return this.favouriteName;
      case BrewerType.Popular:
        return this.popularName;
      case BrewerType.Disliked:
        return this.dislikedName;
      default:
        return this.defaultName;
    }
  }
}
