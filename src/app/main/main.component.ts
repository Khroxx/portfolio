import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AtfComponent } from '../atf/atf.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, AtfComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  text: any;


}
