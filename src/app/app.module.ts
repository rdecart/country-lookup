import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryLookupFormComponent } from './country-lookup/country-lookup-form/country-lookup-form.component';
import { CountryLookupResultComponent } from './country-lookup/country-lookup-result/country-lookup-result.component';
import { CountryLookupComponent } from './country-lookup/country-lookup/country-lookup.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountryLookupFormComponent,
    CountryLookupResultComponent,
    CountryLookupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
