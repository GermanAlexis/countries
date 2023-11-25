import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

type Region = 'Americas' | 'Europe' | 'Africa' | 'Oceania' | 'Asia';

@Component({
  selector: 'app-by-region-pages',
  templateUrl: './by-region-pages.component.html',
  styles: [],
})
export class ByRegionPagesComponent {
  countries: Country[] = [];
  isLoading: boolean = false;
  regions?: Region[] = ['Americas', 'Europe', 'Africa', 'Oceania', 'Asia'];
  selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  onSearchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe((country) => {
      this.isLoading = true;
      this.countries = country;
      this.isLoading = false;
    });
  }
}
