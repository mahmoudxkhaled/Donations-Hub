import { Component } from '@angular/core';
import { STATS } from '../../data/masajid-work.data';

@Component({
  standalone: false,
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss',
})
export class StatsSectionComponent {
  readonly stats = STATS;
}
