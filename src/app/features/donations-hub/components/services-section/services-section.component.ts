import { Component } from '@angular/core';
import { DONATION_CATEGORIES } from '../../data/donations-hub.data';

@Component({
  standalone: false,
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  readonly categories = DONATION_CATEGORIES;
}
