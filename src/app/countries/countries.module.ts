import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ByCapitalPagesComponent,
    ByCountryPagesComponent,
    ByRegionPagesComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class CountriesModule {}
