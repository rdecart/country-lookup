import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryLookupApiResponse, CountryLookupMetaDataInvalid } from './country-lookup-api-response.model';
import { CountryDetails } from './country-details.model';

export enum CountryFailureReason {
  NOT_FOUND = 1,
  UNKNOWN
}

@Injectable({
  providedIn: 'root'
})
export class CountryLookupService {
  private endpoint = 'http://api.worldbank.org/v2/country/';

  constructor(private http: HttpClient) { }

  public getCountry(countryCode: string): Observable<CountryDetails | CountryFailureReason> {
    const params = { format: 'json' };
    return this.http.get<CountryLookupApiResponse>(`${this.endpoint}${countryCode}/`, { params })
      .pipe(map(response => {
        if (response.length > 1 && response[1].length === 1) {
          return response[1][0];
        }
        return (response[0] as CountryLookupMetaDataInvalid).message[0].id === '120'
          ? CountryFailureReason.NOT_FOUND
          : CountryFailureReason.UNKNOWN;
      }));
  }
}
