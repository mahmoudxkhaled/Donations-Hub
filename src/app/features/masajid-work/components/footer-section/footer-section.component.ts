import { Component } from '@angular/core';
import { FOOTER_LEGAL_LINKS, FOOTER_QUICK_LINKS } from '../../data/masajid-work.data';

@Component({
  standalone: false,
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss',
})
export class FooterSectionComponent {
  readonly quickLinks = FOOTER_QUICK_LINKS;
  readonly legalLinks = FOOTER_LEGAL_LINKS;
}
