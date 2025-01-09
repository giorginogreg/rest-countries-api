import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Country } from '../../types/api';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';

const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
    selector: 'app-home',
    imports: [
        CommonModule,
        CountryCardComponent,
        FormsModule,
        FontAwesomeModule,
        DropdownComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
    apiService = inject(ApiService);

    source: Country[];
    searchFilter?: string;
    regionFilter: string;
    regionOptions = REGION_OPTIONS;

    faSearch = faSearch;
    constructor() {
        this.searchFilter = '';
        this.regionFilter = '';
        this.source = [];
        this.apiService
            .getAllCountries()
            .subscribe((countries) => (this.source = countries));
        //this.apiService.getAllCountries().subscribe((res) => console.log(res));
    }
    ngOnInit(): void {}

    get countries() {
        return this.source
            ? this.source
                  .filter((country) =>
                      this.searchFilter
                          ? country.name
                                .toLocaleLowerCase()
                                .includes(this.searchFilter)
                          : country
                  )
                  .filter((country) =>
                      this.regionFilter
                          ? country.region.includes(this.regionFilter)
                          : country
                  )
            : this.source;
    }
}
