import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

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
  ngOnInit(): void {
    this.countries = this.countriesService.catchStore.byRegion.countries;
    this.selectedRegion = this.countriesService.catchStore.byRegion.region;
  }

  onSearchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe((country) => {
      this.isLoading = true;
      this.countries = country;
      this.isLoading = false;
    });
  }
}
