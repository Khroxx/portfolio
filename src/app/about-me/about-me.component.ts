import { Component } from '@angular/core';
import { LanguageService } from '../language.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  aboutme: any;
  aboutme1: any;
  aboutme2: any;
  aboutme3: any;

  constructor(private languageService: LanguageService, private http: HttpClient) {
    this.languageService.currentLanguage.subscribe(language => {
      this.loadJson(language);
    });
  } 

  loadJson(language: string) {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(
      (data: any) => {
        this.aboutme = data.aboutme;
        this.aboutme1 = data.aboutme1;
        this.aboutme2 = data.aboutme2;
        this.aboutme3 = data.aboutme3;
      },
      error => {
        console.error('Error loading language file:', error);
      }
    );
  }
}
