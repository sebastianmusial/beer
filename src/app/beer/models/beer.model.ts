export interface Beer {
  product_id: number;
  name: string;
  size: string;
  price: number;
  beer_id: number;
  image_url: string;
  category: string;
  abv: string;
  style: string;
  attributes: string;
  type: string;
  brewer: string;
  country: string;
  on_sale: boolean;
}

export interface Brewer {
  name: string;
  beers: Beer[];
}

export enum BrewerType {
  Favourite = 'favourite',
  Popular = 'popular',
  Disliked = 'disliked',
}

export enum ThemeMode {
  light = 'light',
  dark = 'dark'
}

export enum BeerSortBy {
  name = 'name',
  price = 'price',
  type = 'type',
}

export enum BeerSortDir {
  asc = 'asc',
  desc = 'desc',
}

export interface BeerSettings {
  sortBy: BeerSortBy;
  sortDir: BeerSortDir;
  limit: number;
  themeMode: ThemeMode;
}
