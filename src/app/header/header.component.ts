import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  menuOpen = false;
  menuAbout: any;

  constructor(private languageService: LanguageService, private http: HttpClient) {
    this.languageService.currentLanguage.subscribe(language => {
      this.loadJson(language);
    });
  }

  loadJson(language: string) {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(
      (data: any) => {
        this.menuAbout = data.menuAbout;
      },
      error => {
        console.error('Error loading language file:', error);
      }
    );
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
  }


}
