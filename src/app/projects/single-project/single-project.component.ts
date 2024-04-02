import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  constructor(private languageService: LanguageService, private http: HttpClient) {
    this.languageService.currentLanguage.subscribe(language => {
      this.loadJson(language);
    });
  }
  


  loadJson(language: string) {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(
      (data: any) => {
        this.projects[0].description = data.polloloco;
        this.projects[1].description = data.join;
        // this.projects[2].description = data.crm;
      },
      error => {
        console.error('Error loading language file:', error);
      }
    );
  }

  projects = [
    {
      name: 'El Pollo Loco',
      img: 'assets/img/pollo-loco.png',
      description: '',
      skillsUsed: ['JavaScript', 'HTML', 'CSS'],
      gitlink: 'https://github.com/Khroxx/Pollo-Loco-2',
      testlink: '/pollo-loco/index.html'
    },
    {
      name: 'Join',
      img: 'assets/img/join.png',
      description: '',
      skillsUsed: ['JavaScript', 'HTML', 'CSS'],
      gitlink: 'https://github.com/Khroxx/Join',
      testlink: '/join/index.html'
    },
    // {
    //   name: 'Coming next...',
    //   img: 'assets/img/crm.png',
    //   description: '',
    //   skillsUsed: ['Angular', 'Firebase'],
    //   gitlink: 'https://github.com/Khroxx/simple_crm',
    //   testlink: '/simple_crm'
    // }
  ];

  isLinkAvailable(project: { testlink: string | URL | undefined; }): boolean {
    return !!project.testlink;
  }

  githubLink(project: { gitlink: string | URL | undefined; }){
    window.open(project.gitlink, '_blank');
  }

  livetestLink(project: { testlink: string | URL | undefined; }){
    window.open(project.testlink, '_blank');
  }
}
