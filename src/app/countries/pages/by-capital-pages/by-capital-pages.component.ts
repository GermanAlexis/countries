import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
})
export class ByCapitalPagesComponent {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}
  onSearchByCapital(capital: string) {
    this.countriesService.searchCapital(capital).subscribe((country) => {
      this.countries = country;
    });
  }
}
