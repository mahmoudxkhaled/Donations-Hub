import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MW_LANG_STORAGE_KEY } from '../../data/masajid-work.data';

@Component({
  standalone: false,
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss',
})
export class HeaderSectionComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'ar' = 'en';

  private sub?: Subscription;

  constructor(public readonly translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang === 'ar' ? 'ar' : 'en';
    this.sub = this.translate.onLangChange.subscribe((e) => {
      this.currentLang = e.lang === 'ar' ? 'ar' : 'en';
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  setLang(lang: 'en' | 'ar'): void {
    localStorage.setItem(MW_LANG_STORAGE_KEY, lang);
    this.translate.use(lang);
  }
}
