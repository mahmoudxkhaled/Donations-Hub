import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MW_LANG_STORAGE_KEY } from '../../data/masajid-work.data';
import { ThemePreferenceService } from '../../services/theme-preference.service';

@Component({
  standalone: false,
  selector: 'app-masajid-work-landing',
  templateUrl: './masajid-work-landing.component.html',
  styleUrl: './masajid-work-landing.component.scss',
})
export class MasajidWorkLandingComponent implements OnInit, OnDestroy {
  dir: 'ltr' | 'rtl' = 'ltr';
  lang: 'en' | 'ar' = 'en';
  isDark = false;

  private langSub?: Subscription;
  private themeSub?: Subscription;

  constructor(
    private readonly translate: TranslateService,
    private readonly theme: ThemePreferenceService,
  ) {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setFallbackLang('en');
    const saved = localStorage.getItem(MW_LANG_STORAGE_KEY);
    const initial = saved === 'ar' ? 'ar' : 'en';
    this.translate.use(initial);
  }

  ngOnInit(): void {
    this.syncHtmlAndLayout(this.translate.currentLang || 'en');
    this.langSub = this.translate.onLangChange.subscribe((e) => this.syncHtmlAndLayout(e.lang));

    this.isDark = this.theme.isDark;
    this.applyThemeClass(this.isDark);
    this.themeSub = this.theme.isDark$.subscribe((dark) => {
      this.isDark = dark;
      this.applyThemeClass(dark);
    });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    this.themeSub?.unsubscribe();
    document.documentElement.classList.remove('mw-theme-dark');
    document.documentElement.lang = 'en';
    document.documentElement.setAttribute('dir', 'ltr');
  }

  private syncHtmlAndLayout(lang: string): void {
    this.lang = lang === 'ar' ? 'ar' : 'en';
    this.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.lang;
    document.documentElement.setAttribute('dir', this.dir);
  }

  private applyThemeClass(isDark: boolean): void {
    document.documentElement.classList.toggle('mw-theme-dark', isDark);
  }
}
