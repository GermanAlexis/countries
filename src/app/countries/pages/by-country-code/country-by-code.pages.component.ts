import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-by-code-pages',
  templateUrl: './country-by-code.pages.component.html',
  styles: [],
})
export class ByCountryCodeComponent implements OnInit {
  constructor(
    private activateRouter: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  country?: Country;
  ngOnInit(): void {
    this.activateRouter.params
      .pipe(switchMap(({ code }) => this.countriesService.searchByCode(code)))
      .subscribe((country) => (this.country = country[0]));
  }
}
