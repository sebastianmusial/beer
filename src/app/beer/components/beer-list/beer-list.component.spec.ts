import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { BeerListComponent } from './beer-list.component';
import { BeerSettingsService } from '../../shared';
import { Beer } from '../../models';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [ BeerListComponent ],
      providers: [ BeerSettingsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    dialog = TestBed.inject(MatDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onLoadMore method should increase page number', () => {
    expect(component.page).toBeTruthy(1);
    component.onLoadMore();
    expect(component.page).toBeTruthy(2);
  });

  it('openDialog method should trigger action', () => {
    const openSpy = spyOn(dialog, 'open');

    fixture.detectChanges();
    component.openDialog({} as Beer);
    fixture.detectChanges();

    expect(openSpy).toHaveBeenCalled();
  });
});
