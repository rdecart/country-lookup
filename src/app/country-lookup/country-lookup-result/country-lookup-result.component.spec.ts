import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLookupResultComponent } from './country-lookup-result.component';

describe('CountryLookupResultComponent', () => {
  let component: CountryLookupResultComponent;
  let fixture: ComponentFixture<CountryLookupResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryLookupResultComponent ]
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
});
