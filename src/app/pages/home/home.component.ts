import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Country } from '../../types/api';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    imports: [CommonModule, CountryCardComponent, FormsModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
    apiService = inject(ApiService);

    countries$: any;
    searchFilter: string;
    source: Country[];
    constructor() {
        this.searchFilter = '';
        this.source = [];
        this.apiService
            .getAllCountries()
            .subscribe((countries) => (this.source = countries));
        //this.apiService.getAllCountries().subscribe((res) => console.log(res));
    }
    ngOnInit(): void {}

    get countries() {
        return this.source
            ? this.source.filter((country) =>
                  this.searchFilter
                      ? country.name
                            .toLocaleLowerCase()
                            .includes(this.searchFilter)
                      : country
              )
            : this.source;
    }
}
