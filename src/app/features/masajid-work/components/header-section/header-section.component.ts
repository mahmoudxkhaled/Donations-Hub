import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MW_LANG_STORAGE_KEY } from '../../data/masajid-work.data';
import { ThemePreferenceService } from '../../services/theme-preference.service';

@Component({
  standalone: false,
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss',
})
export class HeaderSectionComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'ar' = 'en';
  isDarkTheme = false;

  private sub?: Subscription;
  private themeSub?: Subscription;

  constructor(
    public readonly translate: TranslateService,
    private readonly theme: ThemePreferenceService,
  ) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang === 'ar' ? 'ar' : 'en';
    this.sub = this.translate.onLangChange.subscribe((e) => {
      this.currentLang = e.lang === 'ar' ? 'ar' : 'en';
    });

    this.isDarkTheme = this.theme.isDark;
    this.themeSub = this.theme.isDark$.subscribe((d) => {
      this.isDarkTheme = d;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.themeSub?.unsubscribe();
  }

  setLang(lang: 'en' | 'ar'): void {
    localStorage.setItem(MW_LANG_STORAGE_KEY, lang);
    this.translate.use(lang);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }
}
