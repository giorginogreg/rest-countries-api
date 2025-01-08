import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from '../../types/api';

@Component({
  selector: 'app-country-card',
  imports: [CommonModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.sass',
})
export class CountryCardComponent {
  @Input()
  country: Country;

  constructor() {
    this.country = {} as Country;
  }
}
