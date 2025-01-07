import { Component, inject } from '@angular/core';
import { Theme, ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent {
  private themeService: ThemeService;
  theme: Observable<Theme>;

  constructor() {
    this.themeService = inject(ThemeService);
    this.theme = this.themeService.mode$;
  }
  toggleTheme() {
    this.themeService.toggleMode();
  }
}
