import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerImprint: any;

  constructor(private languageService: LanguageService, private http: HttpClient) {
    this.languageService.currentLanguage.subscribe(language => {
      this.loadJson(language);
    });
  }

  loadJson(language: string) {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(
      (data: any) => {
        this.footerImprint = data.footerImprint;
      },
      error => {
        console.error('Error loading language file:', error);
      }
    );
  }
}
