import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLookupFormComponent } from './country-lookup-form.component';

describe('CountryLookupFormComponent', () => {
  let component: CountryLookupFormComponent;
  let fixture: ComponentFixture<CountryLookupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryLookupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryLookupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
