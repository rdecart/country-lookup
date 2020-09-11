import { Component } from '@angular/core';
import { CountryDetails } from '../shared/country-details.model';
import { CountryLookupService, CountryFailureReason } from '../shared/country-lookup.service';

@Component({
  selector: 'app-country-lookup',
  templateUrl: './country-lookup.component.html',
  styleUrls: ['./country-lookup.component.scss']
})
export class CountryLookupComponent {
  public countryDetails: CountryDetails;
  public error: any;
  public failState: CountryFailureReason;
  public countryCode: string;
  public CountryFailureReason = CountryFailureReason;

  constructor(private countryLookupService: CountryLookupService) { }

  public handleCountryCode(countryCode: string): void{
    this.failState = undefined;
    this.countryCode = countryCode;
    this.countryDetails = undefined;
    this.error = undefined;

    this.countryLookupService.getCountry(countryCode)
      .subscribe(
        result => {
          if (typeof result === 'number') {
            this.failState = result;
          } else {
            this.countryDetails = result;
          }
        },
        error => {
          this.error = error;
        });
  }

}
