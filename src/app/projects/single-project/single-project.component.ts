import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  projects = [
    {
      name: 'El Pollo Loco',
      img: 'assets/img/pollo-loco.png',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      skillsUsed: ['JavaScript', 'HTML', 'CSS'],
      gitlink: 'https://github.com/Khroxx/Pollo-Loco-2', // eher mit (click)="window.open('_blank
      testlink: '' //link to game /pollo-loco
    },
    {
      name: 'Join',
      img: 'assets/img/join.png',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      skillsUsed: ['JavaScript', 'HTML', 'CSS'],
      gitlink: '',
      testlink: ''
    },
    {
      name: 'Coming next...',
      img: 'assets/img/crm.png',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      skillsUsed: ['Angular', 'Firebase'],
      gitlink: '',
      testlink: ''
    }
  ];

  constructor() {
   
  }

  githubLink(project){
    window.open(project.gitlink, '_blank');
  }

  livetestLink(project){
    window.open(project.testlink, '_blank');
  }
}
