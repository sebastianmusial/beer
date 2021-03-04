import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BeerSettingsComponent } from './beer-settings.component';
import { BeerSettingsFormService, BeerSettingsService } from '../../shared';
import { BeerModule } from '../../beer.module';

describe('BeerSettingsComponent', () => {
  let component: BeerSettingsComponent;
  let fixture: ComponentFixture<BeerSettingsComponent>;
  let beerSettingsService: BeerSettingsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BeerModule,
        BrowserAnimationsModule,
      ],
      providers: [
        BeerSettingsService,
        BeerSettingsFormService,
        { provide: MatDialogRef, useValue: {} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSettingsComponent);
    beerSettingsService = TestBed.inject(BeerSettingsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should NOT trigger submit action when form is INVALID', () => {
    const buttonElement = fixture.debugElement.nativeElement.querySelector('button');
    const onSubmitSpy = spyOn(component, 'onSubmit');

    component.settingsForm.controls.limit.setValue(10);
    fixture.detectChanges();
    buttonElement.click();
    fixture.detectChanges();

    expect(onSubmitSpy).not.toHaveBeenCalled();
  });

  it('button should trigger submit action when form is valid', () => {
    const buttonElement = fixture.debugElement.nativeElement.querySelector('button');
    const onSubmitSpy = spyOn(component, 'onSubmit');

    component.settingsForm.controls.limit.setValue(15);
    fixture.detectChanges();
    buttonElement.click();
    fixture.detectChanges();

    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
