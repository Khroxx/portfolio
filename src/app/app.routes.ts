import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum/impressum.component';
import { MainComponent } from './main/main.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full' },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
