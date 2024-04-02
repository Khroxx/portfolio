import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { LanguageService } from '../language.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  portfolio: any;

  constructor(private languageService: LanguageService, private http: HttpClient) {
    this.languageService.currentLanguage.subscribe(language => {
      this.loadJson(language);
    });
  }



  loadJson(language: string) {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(
      (data: any) => {
        this.portfolio = data.portfolio;
      },
      error => {
        console.error('Error loading language file:', error);
      }
    );
  }




}
