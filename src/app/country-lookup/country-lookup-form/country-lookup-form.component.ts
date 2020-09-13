import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-lookup-form',
  templateUrl: './country-lookup-form.component.html',
  styleUrls: ['./country-lookup-form.component.scss']
})
export class CountryLookupFormComponent {

  public code = { value: '', valid: false, pristine: true };

  @Output() countryCodeChangeEvent = new EventEmitter<string>();

  constructor() { }

  public codeChange(code: string): void {
    const valid = /^[a-zA-Z]{2,3}$/.test(code);
    this.code = { value: code, valid, pristine: false };
  }

  public onSubmit(): void {
    this.countryCodeChangeEvent.emit(this.code.value);
  }
}
