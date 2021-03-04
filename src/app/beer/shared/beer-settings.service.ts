import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BeerSettings, BeerSortBy, BeerSortDir, BrewerType, ThemeMode } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BeerSettingsService {
  renderer: Renderer2;
  settings$ = new BehaviorSubject<BeerSettings>(this.getSettings());

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.watchThemeMode();
  }

  watchThemeMode(): void {
    this.settings$.subscribe(({ themeMode }) => {
      const isLightMode = themeMode === ThemeMode.light;

      this.renderer.removeClass(document.body,  isLightMode ? 'theme-dark' : 'theme-light');
      this.renderer.addClass(document.body, isLightMode ? 'theme-light' : 'theme-dark');
    });
  }

  setSettings(settings: BeerSettings): void {
    const { limit, sortBy, sortDir, themeMode } = settings;

    localStorage.setItem('limit', String(limit));
    localStorage.setItem('sortBy', sortBy);
    localStorage.setItem('sortDir', sortDir);
    localStorage.setItem('themeMode', themeMode);

    this.settings$.next(settings);
  }

  getSettings(): BeerSettings {
    return {
      limit: Number(localStorage.getItem('limit')) || 15,
      sortBy: localStorage.getItem('sortBy') as BeerSortBy || 'name',
      sortDir: localStorage.getItem('sortDir') as BeerSortDir || 'asc',
      themeMode: localStorage.getItem('themeMode') as ThemeMode || ThemeMode.light,
    };
  }

  setBrewer(type: BrewerType, brewerName: string): void {
    localStorage.setItem(type, brewerName);
  }

  getBrewer(type: BrewerType): string | null {
    return localStorage.getItem(type) || null;
  }
}
