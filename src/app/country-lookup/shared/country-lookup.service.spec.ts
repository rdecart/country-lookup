import { TestBed } from '@angular/core/testing';

import { CountryLookupService, CountryFailureReason } from './country-lookup.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { CountryLookupApiResponse } from './country-lookup-api-response.model';
import { throwError } from 'rxjs';

describe('CountryLookupService', () => {
  let service: CountryLookupService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete', 'put']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });
    service = TestBed.inject(CountryLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('::getCountry()', () => {
    it('should add supplied country code to URL', () => {
      httpClientSpy.get.and.returnValue(of([[], []]));
      service.getCountry('XX');

      expect(httpClientSpy.get.calls.mostRecent().args[0]).toMatch(/v2\/country\/XX/);
    });

    it('should include format=json parameter in API call', () => {
      httpClientSpy.get.and.returnValue(of([[], []]));
      service.getCountry('XX');

      expect(httpClientSpy.get.calls.mostRecent().args[1]).toEqual({ params: { format: 'json' } });
    });

    it('should return failure NOT_FOUND when api does not return a country and message id is "120"', (done: DoneFn) => {
      const apiResponse: CountryLookupApiResponse = [{ message: [{ id: '120', key: '', value: '' }] }];
      httpClientSpy.get.and.returnValue(of(apiResponse));

      service.getCountry('XX').subscribe(result => {
        expect(result).toEqual(CountryFailureReason.NOT_FOUND);
        done();
      });
    });

    it('should return failure UNKOWN when api does not return a country and message id is NOT "120"', (done: DoneFn) => {
      const apiResponse: CountryLookupApiResponse = [{ message: [{ id: '999', key: '', value: '' }] }];
      httpClientSpy.get.and.returnValue(of(apiResponse));

      service.getCountry('XX').subscribe(result => {
        expect(result).toEqual(CountryFailureReason.UNKNOWN);
        done();
      });
    });

    it('should not swallow error if API returns error code', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(throwError('boom'));

      service.getCountry('XX').subscribe(
        () => { },
        error => {
          expect(error).toEqual('boom');
          done();
        });
    });
  });
});
