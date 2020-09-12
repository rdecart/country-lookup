import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLookupResultComponent } from './country-lookup-result.component';
import { CountryDetails } from '../shared/country-details.model';

const mockCountry: CountryDetails = {
  id: 'GBR',
  iso2Code: 'GB',
  name: 'United Kingdom',
  capitalCity: 'London',
  longitude: '-0.126236',
  latitude: '51.5002',
  region: {
    id: '',
    iso2code: '',
    value: ''
  },
  adminregion: {
    id: '',
    iso2code: '',
    value: ''
  },
  incomeLevel: {
    id: '',
    iso2code: '',
    value: ''
  },
  lendingType: {
    id: '',
    iso2code: '',
    value: ''
  }
};


describe('CountryLookupResultComponent', () => {
  let component: CountryLookupResultComponent;
  let fixture: ComponentFixture<CountryLookupResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryLookupResultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryLookupResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('@Input details', () => {
    [null, undefined].forEach(value => {
      it('should not show table if the details are falsy', () => {
        component.countryCode = value;
        fixture.detectChanges();
        const table = fixture.nativeElement.querySelector('table');

        expect(table).toBeNull();
      });
    });

    it('should show table if the details are provided', () => {
      component.details = mockCountry;
      fixture.detectChanges();
      const table = fixture.nativeElement.querySelector('table');
      const name = fixture.nativeElement.querySelector('#result-table-country-name');

      expect(table).not.toBeNull();
      expect(name.textContent).toEqual(mockCountry.name);
    });
  });

  describe('@Input countryCode', () => {
    it('should show correct country code', () => {
      component.countryCode = 'XX';
      component.details = mockCountry;
      fixture.detectChanges();
      const table = fixture.nativeElement.querySelector('table');
      const resultText = fixture.nativeElement.querySelector('#result-user-value-used');

      expect(resultText.textContent).toEqual('Result for "XX"');
    });
  });
});
