import { TestBed } from '@angular/core/testing';

import { CountryLookupService } from './country-lookup.service';
import { HttpClient } from '@angular/common/http';

describe('CountryLookupService', () => {
  let service: CountryLookupService;

  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete', 'put']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });
    service = TestBed.inject(CountryLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
