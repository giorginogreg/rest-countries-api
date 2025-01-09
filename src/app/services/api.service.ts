import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as exampleData from './../../assets/data.json';
import { map, Observable, of } from 'rxjs';
import { Country } from '../types/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://restcountries.com/v3.1/alpha';
  private http = inject(HttpClient);

  getAllCountries() {
    return of<Country[]>(exampleData as Country[]).pipe(
      map((res: any) => res.default)
    );
    return this.http.get<Country[]>(
      'assets/data.json'
      //this.apiUrl + '/all?access_key=36e0fe3e98df53595f92e669547d5b3e'
    );
  }

  getCountryByCca2(cca2: string): Observable<Country> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/${cca2}`)
      .pipe(map(([res]) => res));
  }

  getNameFromCountries(cca2: string[]): Observable<Partial<Country[]>> {
    return this.http.get<Partial<Country[]>>(
        `${this.apiUrl}?codes=${cca2.join(',')}&fields=name,cca2`
    );
  }
}
