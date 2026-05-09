import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MW_LANG_STORAGE_KEY } from '../../data/masajid-work.data';

@Component({
  standalone: false,
  selector: 'app-masajid-work-landing',
  templateUrl: './masajid-work-landing.component.html',
  styleUrl: './masajid-work-landing.component.scss',
})
export class MasajidWorkLandingComponent implements OnInit, OnDestroy {
  dir: 'ltr' | 'rtl' = 'ltr';
  lang: 'en' | 'ar' = 'en';

  private langSub?: Subscription;

  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setFallbackLang('en');
    const saved = localStorage.getItem(MW_LANG_STORAGE_KEY);
    const initial = saved === 'ar' ? 'ar' : 'en';
    this.translate.use(initial);
  }

  ngOnInit(): void {
    this.syncHtmlAndLayout(this.translate.currentLang || 'en');
    this.langSub = this.translate.onLangChange.subscribe((e) => this.syncHtmlAndLayout(e.lang));
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    document.documentElement.lang = 'en';
    document.documentElement.setAttribute('dir', 'ltr');
  }

  private syncHtmlAndLayout(lang: string): void {
    this.lang = lang === 'ar' ? 'ar' : 'en';
    this.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.lang;
    document.documentElement.setAttribute('dir', this.dir);
  }
}
