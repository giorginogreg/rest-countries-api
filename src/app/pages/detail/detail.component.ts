import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EMPTY, mergeMap, Observable, of, tap } from 'rxjs';
import { Currency, Language } from '../../types/api';
import { CommonModule, Location } from '@angular/common';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
    selector: 'app-detail',
    imports: [CommonModule, FontAwesomeModule, RouterModule],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.sass',
})
export class DetailComponent {
    country$: Observable<any> = EMPTY;

    apiService = inject(ApiService);
    route = inject(ActivatedRoute);
    _location: Location = inject(Location);
    faLeftLong = faLeftLong;

    currentCountry: any;
    borderCountries$: Observable<any> = EMPTY;
    constructor() {
        this.route.params.subscribe((params) => {
            this.country$ = this.apiService
                .getCountryByCca2(params['cca2'])
                .pipe(
                    tap((country) => console.log(country)),
                    mergeMap((res) => {
                        if (res.borders)
                            this.borderCountries$ =
                                this.apiService.getNameFromCountries(
                                    res.borders
                                );
                        return of(res);
                    })
                );
        });
    }

    ngOnInit(): void {}

    displayCurrencies(currencies: Currency[]) {
        return Object.values(currencies)
            .map((currency) => currency.name)
            .join(', ');
    }

    displayLanguages(languages: Language[]) {
        return Object.values(languages)
            .map((language) => language)
            .join(', ');
    }

    getNativeName(localLanguages: any) {
        return Object.values(localLanguages)
            .map((language: any) => language.common)
            .join(', ');
    }

    back() {
        this._location.back();
    }
}
