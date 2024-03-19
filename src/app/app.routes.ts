import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AtfComponent } from './atf/atf.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'atf', component: AtfComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'footer', component: FooterComponent }
];
