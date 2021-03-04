import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { BeerComponent } from './beer.component';
import { BeerFactory, BeerService } from '../../shared';

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
      ],
      declarations: [ BeerComponent ],
      providers: [
        BeerService,
        BeerFactory,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should trigger open settings action', () => {
    const buttonElement = fixture.debugElement.nativeElement.querySelector('button');
    const onSubmitSpy = spyOn(component, 'openSettings');

    buttonElement.click();
    fixture.detectChanges();

    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
