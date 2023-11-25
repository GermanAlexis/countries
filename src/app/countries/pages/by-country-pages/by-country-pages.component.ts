import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-pages',
  templateUrl: './by-country-pages.component.html',
  styles: [],
})
export class ByCountryPagesComponent implements OnInit {
  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue: string = '';

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.catchStore.byCountry.countries;
    this.initialValue = this.countriesService.catchStore.byCountry.term;
  }

  onSearchByCountry(capital: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(capital).subscribe((country) => {
      this.countries = country;
      this.isLoading = false;
    });
  }
}
