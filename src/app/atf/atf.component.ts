import { Component } from '@angular/core';
import { LanguageService } from '../language.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {
  talkBtn: any;

  constructor(private languageService: LanguageService, private http: HttpClient) {
    this.languageService.currentLanguage.subscribe(language => {
      this.loadJson(language);
    });
  }

  loadJson(language: string) {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(
      (data: any) => {
        this.talkBtn = data.talkBtn;
      },
      error => {
        console.error('Error loading language file:', error);
      }
    );
  }
}
