import { Component, inject } from '@angular/core';
import { Theme, ThemeService } from '../services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent {
  private themeService: ThemeService;
  theme: Observable<Theme>;
  faMoon = faMoon;

  constructor() {
    this.themeService = inject(ThemeService);
    this.theme = this.themeService.mode$;
  }
  toggleTheme() {
    this.themeService.toggleMode();
  }
}
