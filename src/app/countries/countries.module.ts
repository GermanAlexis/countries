import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { ByCountryCodeComponent } from './pages/by-country-code/country-by-code.pages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ByCapitalPagesComponent,
    ByCountryPagesComponent,
    ByRegionPagesComponent,
    CountryTableComponent,
    ByCountryCodeComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, RouterModule, SharedModule],
})
export class CountriesModule {}
