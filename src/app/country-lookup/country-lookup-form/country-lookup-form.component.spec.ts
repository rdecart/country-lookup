import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLookupFormComponent } from './country-lookup-form.component';

describe('CountryLookupFormComponent', () => {
  let component: CountryLookupFormComponent;
  let fixture: ComponentFixture<CountryLookupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryLookupFormComponent]
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

  it('validation error should be shown when code.valid is false', () => {
    component.code = { value: 'BB', valid: true, pristine: false };
    fixture.detectChanges();

    const errorElement = fixture.nativeElement.querySelector('#code-validation-error');
    expect(errorElement.hidden).toBeTrue();
  });

  it('validation error should not be shown when code.valid is true', () => {
    component.code = { value: 'BB', valid: false, pristine: false };
    fixture.detectChanges();

    const errorElement = fixture.nativeElement.querySelector('#code-validation-error');
    expect(errorElement.hidden).toBeFalse();
  });

  it('validation error should not be shown when code.valid is false but code.pristine is true', () => {
    component.code = { value: 'BB', valid: false, pristine: true };
    fixture.detectChanges();

    const errorElement = fixture.nativeElement.querySelector('#code-validation-error');
    expect(errorElement.hidden).toBeTrue();
  });

  describe('::codeChange()', () => {
    ['aa', 'AA', 'AAA', 'xyZ'].forEach(input => {
      it('code.valid should be true when input is ' + input, () => {
        component.codeChange(input);

        expect(component.code.valid).toBeTrue();
      });
    });

    ['', 'a', 'aaaa', 'A1', '123', '*', 'a*', 'aa*', 'a%', '    ', ' a   ', 'aa   ', undefined, null].forEach(input => {
      it('code.valid should be false when input is ' + input, () => {
        component.codeChange(input);

        expect(component.code.valid).toBeFalse();
      });
    });
  });

  describe('::onSubmit()', () => {
    it('should emit countryCodeChangeEvent with current code as value', () => {
      spyOn(component.countryCodeChangeEvent, 'emit');
      component.code = { value: 'BB', valid: false, pristine: false };

      component.onSubmit();

      expect(component.countryCodeChangeEvent.emit).toHaveBeenCalledWith('BB');
    });
  });
});
