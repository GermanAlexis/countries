import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
})
export class ByCapitalPagesComponent implements OnInit {
  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.catchStore.byCapital.countries;
    this.initialValue = this.countriesService.catchStore.byCapital.term;
  }
  onSearchByCapital(capital: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(capital).subscribe((country) => {
      console.log('this.countries: ', this.countries);
      this.countries = country;
      this.isLoading = false;
    });
  }
}
