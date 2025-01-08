import { routes } from './../../app.routes';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, empty, Observable } from 'rxjs';
import { Country } from '../../types/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass',
})
export class DetailComponent {
  country$: Observable<Country> = EMPTY;

  apiService = inject(ApiService);
  route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe((params) => {
      this.country$ = this.apiService.getCountryByCca2(params['cca2']);
      console.log(this.country$);
    });
  }

  ngOnInit(): void {}
}
