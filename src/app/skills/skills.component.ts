import { Component } from '@angular/core';
import { LanguageService } from '../language.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 skills: any;
 skillsButton: any;

 constructor(private languageService: LanguageService, private http: HttpClient) {
  this.languageService.currentLanguage.subscribe(language => {
    this.loadJson(language);
  });
}

loadJson(language: string) {
  this.http.get(`/assets/i18n/${language}.json`).subscribe(
    (data: any) => {
      this.skills = data.skills;
      this.skillsButton = data.skillsButton;
    },
    error => {
      console.error('Error loading language file:', error);
    }
  );
}
}
