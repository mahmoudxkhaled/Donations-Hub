import { Component } from '@angular/core';
import { VALIDATION_NODES } from '../../data/masajid-work.data';

@Component({
  standalone: false,
  selector: 'app-validation-section',
  templateUrl: './validation-section.component.html',
  styleUrl: './validation-section.component.scss',
})
export class ValidationSectionComponent {
  readonly nodes = VALIDATION_NODES;
}
