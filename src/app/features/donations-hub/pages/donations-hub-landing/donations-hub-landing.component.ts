import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, Subscription } from 'rxjs';
import { DONATIONS_HUB_ROUTE_PATH, DH_LANG_STORAGE_KEY } from '../../data/donations-hub.data';
import { ThemePreferenceService } from '../../services/theme-preference.service';

@Component({
  standalone: false,
  selector: 'app-donations-hub-landing',
  templateUrl: './donations-hub-landing.component.html',
  styleUrl: './donations-hub-landing.component.scss',
})
export class DonationsHubLandingComponent implements OnInit, OnDestroy, AfterViewInit {
  private static readonly SCROLL_HEADER_OFFSET_PX = 88;

  dir: 'ltr' | 'rtl' = 'ltr';
  lang: 'en' | 'ar' = 'en';
  isDark = false;

  private langSub?: Subscription;
  private themeSub?: Subscription;
  private routerSub?: Subscription;

  constructor(
    private readonly translate: TranslateService,
    private readonly theme: ThemePreferenceService,
    private readonly router: Router,
  ) {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setFallbackLang('en');
    const saved = localStorage.getItem(DH_LANG_STORAGE_KEY);
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

    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.scheduleScrollToFragment());
  }

  ngAfterViewInit(): void {
    this.scheduleScrollToFragment();
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    this.themeSub?.unsubscribe();
    this.routerSub?.unsubscribe();
    document.documentElement.classList.remove('dh-theme-dark');
    document.documentElement.lang = 'en';
    document.documentElement.setAttribute('dir', 'ltr');
  }

  onDhClick(event: MouseEvent): void {
    const link = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]');
    if (!link) {
      return;
    }
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.length < 2) {
      return;
    }
    const id = decodeURIComponent(href.slice(1));
    if (!id || /[/:?]/.test(id)) {
      return;
    }
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    event.preventDefault();
    this.scrollElementIntoView(el);
    void this.router.navigate([DONATIONS_HUB_ROUTE_PATH], {
      fragment: id,
      replaceUrl: true,
    });
  }

  private scheduleScrollToFragment(): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => this.scrollToUrlFragment());
    });
  }

  private scrollToUrlFragment(): void {
    const fragment = this.router.parseUrl(this.router.url).fragment;
    if (!fragment) {
      return;
    }
    const el = document.getElementById(fragment);
    if (el) {
      this.scrollElementIntoView(el);
    }
  }

  private scrollElementIntoView(el: HTMLElement): void {
    if (typeof window === 'undefined') {
      return;
    }
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
    if (reduceMotion) {
      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        DonationsHubLandingComponent.SCROLL_HEADER_OFFSET_PX;
      window.scrollTo(0, Math.max(0, top));
      return;
    }
    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      DonationsHubLandingComponent.SCROLL_HEADER_OFFSET_PX;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  private syncHtmlAndLayout(lang: string): void {
    this.lang = lang === 'ar' ? 'ar' : 'en';
    this.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.lang;
    document.documentElement.setAttribute('dir', this.dir);
  }

  private applyThemeClass(isDark: boolean): void {
    document.documentElement.classList.toggle('dh-theme-dark', isDark);
  }
}
