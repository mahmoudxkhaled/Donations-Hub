import { Component } from '@angular/core';
import { PROCESS_STEPS } from '../../data/masajid-work.data';

@Component({
  standalone: false,
  selector: 'app-how-it-works-section',
  templateUrl: './how-it-works-section.component.html',
  styleUrl: './how-it-works-section.component.scss',
})
export class HowItWorksSectionComponent {
  readonly steps = PROCESS_STEPS;
}
