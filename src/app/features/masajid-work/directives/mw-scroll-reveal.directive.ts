import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Fades and slides the host into view when it crosses the viewport while scrolling.
 * Use `[mwScrollReveal]="'up'"` or `'down'`. Respects `prefers-reduced-motion`.
 */
@Directive({
  standalone: false,
  selector: '[mwScrollReveal]',
})
export class MwScrollRevealDirective implements AfterViewInit, OnDestroy {
  /** Motion direction before the element is revealed. */
  @Input() mwScrollReveal: 'up' | 'down' = 'up';

  /** Optional delay before the transition starts (ms). */
  @Input() mwRevealDelay = 0;

  /** Passed to `IntersectionObserver` rootMargin. */
  @Input() mwRevealRootMargin = '0px 0px -7% 0px';

  /** Passed to `IntersectionObserver` threshold. */
  @Input() mwRevealThreshold = 0.07;

  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    this.renderer.addClass(host, 'mw-reveal');
    const dirClass = this.mwScrollReveal === 'down' ? 'mw-reveal--down' : 'mw-reveal--up';
    this.renderer.addClass(host, dirClass);

    if (this.mwRevealDelay > 0) {
      host.style.setProperty('--mw-reveal-delay', `${this.mwRevealDelay}ms`);
    }

    if (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.renderer.addClass(host, 'mw-reveal--visible');
      return;
    }

    this.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private observe(host: HTMLElement): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(host, 'mw-reveal--visible');
      return;
    }

    const rect = host.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 40;
    if (alreadyVisible) {
      this.renderer.addClass(host, 'mw-reveal--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(host, 'mw-reveal--visible');
            this.observer?.disconnect();
            this.observer = undefined;
            break;
          }
        }
      },
      {
        root: null,
        rootMargin: this.mwRevealRootMargin,
        threshold: this.mwRevealThreshold,
      },
    );
    this.observer.observe(host);
  }
}
