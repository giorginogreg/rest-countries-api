import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { Country } from '../../types/api';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from '../../components/country-card/country-card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CountryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  apiService = inject(ApiService);

  countries$: any;
  constructor() {
    this.countries$ = this.apiService.getAllCountries();
    //this.apiService.getAllCountries().subscribe((res) => console.log(res));
  }
  ngOnInit(): void {}
}
