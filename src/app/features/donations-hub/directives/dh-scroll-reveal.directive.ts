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
 * Use `[dhScrollReveal]="'up'"` or `'down'`. Respects `prefers-reduced-motion`.
 */
@Directive({
  standalone: false,
  selector: '[dhScrollReveal]',
})
export class DhScrollRevealDirective implements AfterViewInit, OnDestroy {
  /** Motion direction before the element is revealed. */
  @Input() dhScrollReveal: 'up' | 'down' = 'up';

  /** Optional delay before the transition starts (ms). */
  @Input() dhRevealDelay = 0;

  /** Passed to `IntersectionObserver` rootMargin. */
  @Input() dhRevealRootMargin = '0px 0px -7% 0px';

  /** Passed to `IntersectionObserver` threshold. */
  @Input() dhRevealThreshold = 0.07;

  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    this.renderer.addClass(host, 'dh-reveal');
    const dirClass = this.dhScrollReveal === 'down' ? 'dh-reveal--down' : 'dh-reveal--up';
    this.renderer.addClass(host, dirClass);

    if (this.dhRevealDelay > 0) {
      host.style.setProperty('--dh-reveal-delay', `${this.dhRevealDelay}ms`);
    }

    if (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.renderer.addClass(host, 'dh-reveal--visible');
      return;
    }

    this.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private observe(host: HTMLElement): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(host, 'dh-reveal--visible');
      return;
    }

    const rect = host.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 40;
    if (alreadyVisible) {
      this.renderer.addClass(host, 'dh-reveal--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(host, 'dh-reveal--visible');
            this.observer?.disconnect();
            this.observer = undefined;
            break;
          }
        }
      },
      {
        root: null,
        rootMargin: this.dhRevealRootMargin,
        threshold: this.dhRevealThreshold,
      },
    );
    this.observer.observe(host);
  }
}
