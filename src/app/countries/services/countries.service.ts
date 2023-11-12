import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';
import { environment } from 'src/environments/environment.development';

const Base_Url = environment.APICOUNTRY;

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}
  public searchCapital(term: string): Observable<Country[]> {
    const url = `${Base_Url}capital/${term}`;
    return this.http.get<Country[]>(url);
  }
}
