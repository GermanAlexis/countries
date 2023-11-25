import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';
import { environment } from 'src/environments/environment.development';
import { CatchStore } from '../interfaces/catchStore.interface';
import { Region } from '../interfaces/region.type';

const Base_Url = environment.APICOUNTRY;

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public catchStore: CatchStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private http: HttpClient) {
    this.getLocalStore();
  }

  private setLocalStore() {
    localStorage.setItem('catchStore', JSON.stringify(this.catchStore));
  }

  private getLocalStore() {
    if (!this.catchStore) return;
    this.catchStore = JSON.parse(localStorage.getItem('catchStore')!);
  }

  private getCountryRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  public searchCapital(capital: string): Observable<Country[]> {
    const url = `${Base_Url}capital/${capital}`;
    return this.getCountryRequest(url).pipe(
      tap(
        (countries) =>
          (this.catchStore.byCapital = { term: capital, countries })
      ),
      tap(() => this.setLocalStore())
    );
  }

  public searchCountry(country: string): Observable<Country[]> {
    const url = `${Base_Url}name/${country}`;
    return this.getCountryRequest(url).pipe(
      tap(
        (countries) =>
          (this.catchStore.byCountry = { term: country, countries })
      ),
      tap(() => this.setLocalStore())
    );
  }

  public searchRegion(region: Region): Observable<Country[]> {
    const url = `${Base_Url}region/${region}`;
    return this.getCountryRequest(url).pipe(
      tap((countries) => (this.catchStore.byRegion = { region, countries })),
      tap(() => this.setLocalStore())
    );
  }

  public searchByCode(term: string): Observable<Country | null> {
    const url = `${Base_Url}alpha/${term}`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }
}
