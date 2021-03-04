import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDialogComponent } from './beer-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('BeerDialogComponent', () => {
  let component: BeerDialogComponent;
  let fixture: ComponentFixture<BeerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
