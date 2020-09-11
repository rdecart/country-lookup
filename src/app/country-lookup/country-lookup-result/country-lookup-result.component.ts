import { Component, Input } from '@angular/core';
import { CountryDetails } from '../shared/country-details.model';


@Component({
  selector: 'app-country-lookup-result',
  templateUrl: './country-lookup-result.component.html',
  styleUrls: ['./country-lookup-result.component.scss']
})
export class CountryLookupResultComponent {

  @Input() details: CountryDetails;
  @Input() countryCode: string;

  constructor() { }

}
