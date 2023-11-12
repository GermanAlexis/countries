import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';

const routes: Routes = [
  { path: 'by-capital', component: ByCapitalPagesComponent },
  { path: 'by-country', component: ByCountryPagesComponent },
  { path: 'by-region', component: ByRegionPagesComponent },
  { path: '**', redirectTo: 'by-capital' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CountriesRoutingModule {}
