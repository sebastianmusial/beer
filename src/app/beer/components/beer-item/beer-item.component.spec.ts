import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerItemComponent } from './beer-item.component';
import { Beer } from '../../models';

describe('BeerItemComponent', () => {
  let component: BeerItemComponent;
  let fixture: ComponentFixture<BeerItemComponent>;
  const beer = { name: 'Name', price: 23.95, type: 'Lager', image_url: 'http://test.com/img.jpg' } as unknown as Beer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render price', () => {
    component.beer = beer;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const beerInfo = fixture.debugElement.nativeElement.querySelector('.beer-item__info');
      expect(beerInfo.textContent).toContain(component.beer.price);
    });
  });

  it('should render type', () => {
    component.beer = beer;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const beerInfo = fixture.debugElement.nativeElement.querySelector('.beer-item__info');
      expect(beerInfo.textContent).toContain(component.beer.type);
    });
  });

  it('should render image', () => {
    component.beer = beer;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const image = fixture.debugElement.nativeElement.querySelector('.beer-item__img');
      expect(image.src).toContain(component.beer.image_url);
    });
  });
});
