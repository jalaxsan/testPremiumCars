import { Routes } from '@angular/router';
import { LandingComponent } from './pages/website/landing/landing.component';
import { AboutUsComponent } from './pages/website/about-us/about-us.component';
import { ServiceComponent } from './pages/website/service/service.component';
import { ContactComponent } from './pages/website/contact/contact.component';
import { ImpressumComponent } from './pages/website/impressum/impressum.component';
import { AgbComponent } from './pages/website/agb/agb.component';
import { RechtlicheHinweiseComponent } from './pages/website/rechtliche-hinweise/rechtliche-hinweise.component';
import { DatenschutzComponent } from './pages/website/datenschutz/datenschutz.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'agb',
    component: AgbComponent,
  },
  {
    path: 'rechtliche-hinweise',
    component: RechtlicheHinweiseComponent,
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent,
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'home',
        component: LandingComponent,
        title: 'Premium Cars',
      },
    ],
  },
];
