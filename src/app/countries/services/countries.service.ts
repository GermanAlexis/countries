import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';
import { environment } from 'src/environments/environment.development';

const Base_Url = environment.APICOUNTRY;

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  private getCountryRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      delay(200),
      catchError(() => of([]))
    );
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${Base_Url}capital/${term}`;
    return this.getCountryRequest(url);
  }

  public searchCountry(term: string): Observable<Country[]> {
    const url = `${Base_Url}name/${term}`;
    return this.getCountryRequest(url);
  }

  public searchRegion(term: string): Observable<Country[]> {
    const url = `${Base_Url}region/${term}`;
    return this.getCountryRequest(url);
  }

  public searchByCode(term: string): Observable<Country[]> {
    const url = `${Base_Url}alpha/${term}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
