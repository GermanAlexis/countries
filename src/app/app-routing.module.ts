import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AboutComponent } from './shared/pages/about/about.component';
import { ContactComponent } from './shared/pages/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-to', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries-routing.module').then(
        (m) => m.CountriesRoutingModule
      ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
