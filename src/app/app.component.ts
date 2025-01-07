import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme, ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'rest-countries-api';
  public Theme = Theme;
  theme: Observable<Theme>;
  private themeService: ThemeService;

  constructor() {
    this.themeService = inject(ThemeService);
    this.theme = this.themeService.mode$;
  }

  ngOnInit(): void {}
}
