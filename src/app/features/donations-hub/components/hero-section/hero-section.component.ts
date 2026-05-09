import { Component } from '@angular/core';
import { HERO_IMAGE } from '../../data/donations-hub.data';

@Component({
  standalone: false,
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly heroImage = HERO_IMAGE;
}
