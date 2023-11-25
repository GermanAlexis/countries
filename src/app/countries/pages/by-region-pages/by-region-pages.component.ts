import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-pages',
  templateUrl: './by-region-pages.component.html',
  styles: [],
})
export class ByRegionPagesComponent {
  countries: Country[] = [];
  isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  onSearchByRegion(region: string) {
    this.countriesService.searchRegion(region).subscribe((country) => {
      this.isLoading = true;
      this.countries = country;
      this.isLoading = false;
    });
  }
}
