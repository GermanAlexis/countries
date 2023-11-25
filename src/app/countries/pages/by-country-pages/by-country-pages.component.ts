import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-pages',
  templateUrl: './by-country-pages.component.html',
  styles: [],
})
export class ByCountryPagesComponent {
  countries: Country[] = [];
  isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}
  onSearchByCountry(capital: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(capital).subscribe((country) => {
      this.countries = country;
      this.isLoading = false;
    });
  }
}
