import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
})
export class ByCapitalPagesComponent {
  countries: Country[] = [];
  isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}
  onSearchByCapital(capital: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(capital).subscribe((country) => {
      this.countries = country;
      this.isLoading = false;
    });
  }
}
