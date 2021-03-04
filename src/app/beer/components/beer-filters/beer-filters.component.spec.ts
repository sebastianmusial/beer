import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';

import { BeerModule } from '../../beer.module';
import { BeerFiltersComponent } from './beer-filters.component';
import { BrewerTypeNamePipe } from '../../pipes';
import { BeerSettingsService } from '../../shared';

describe('BeerFiltersComponent', () => {
  let component: BeerFiltersComponent;
  let fixture: ComponentFixture<BeerFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BeerModule,
      ],
      declarations: [
        BeerFiltersComponent,
        BrewerTypeNamePipe,
      ],
      providers: [BeerSettingsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFiltersComponent);
    component = fixture.componentInstance;
    component.brewerControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
