import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Music } from './pages/music/music';
import { Agency } from './pages/agency/agency';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'music', component: Music },
  { path: 'agency', component: Agency },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
