import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as exampleData from './../../assets/data.json';
import { of } from 'rxjs';
import { Country } from '../types/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.countrylayer.com/v2';
  private http = inject(HttpClient);

  getAllCountries() {
    return of<Country[]>(exampleData as Country[]);
    return this.http.get<Country[]>(
      'assets/data.json'
      //this.apiUrl + '/all?access_key=36e0fe3e98df53595f92e669547d5b3e'
    );
  }
}
