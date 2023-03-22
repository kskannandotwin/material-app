import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { CustomErrorStateMatcher } from 'src/app/helpers/custom-error-state-matcher';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  // property
  countries: any;
  formGroup: FormGroup | any;
  customErrorStateMatcher: CustomErrorStateMatcher = new CustomErrorStateMatcher();
  cities: any[] = [
    { id: 1, cityName: "Abu Dhabi" },
    { id: 2, cityName: "Amsterdam" },
    { id: 3, cityName: "Berlin" },
    { id: 4, cityName: "Chicago" },
    { id: 5, cityName: "Doha" },
    { id: 6, cityName: "Dubai" },
    { id: 7, cityName: "Istanbul" },
    { id: 8, cityName: "Las Vegas" },
    { id: 9, cityName: "London" },
    { id: 10, cityName: "Los Angeles" },
    { id: 11, cityName: "Moscow" },
    { id: 12, cityName: "New York" },
    { id: 13, cityName: "Paris" },
    { id: 14, cityName: "San Francisco" },
    { id: 15, cityName: "Seoul" },
    { id: 16, cityName: "Singapore" },
    { id: 17, cityName: "Sydney" },
    { id: 18, cityName: "Tokyo" },
    { id: 19, cityName: "Toronto" },
    { id: 20, cityName: "Washington" }
  ];

  constructor(private countriesService: CountriesService) {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      customerName: new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.pattern('^[A-Za-z. ]*$')]),
      country: new FormControl(null, Validators.required),
      city: new FormControl(null)
    });
  }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(
      (response) => {
        this.countries = response;
      },
      (error) => {
        console.log(error);
      });
  }

  // returns the form control instance based on the control name
  getFormControl(controlName: string): FormControl {
    return this.formGroup.get(controlName) as FormControl;
  }

  // returns the error message based on the given control and error
  getErrorMessage(controlName: string, errorType: string): string {
    // controlName = customerName
    // errorType = 'required'
    switch (controlName) {
      case "customerName": {
        if (errorType === 'required') {
          return 'You must specify <strong>Name</strong>';
        } else if (errorType === 'maxlength') {
          return '<strong>Name</strong> can contain upto 30 characters only';
        } else if (errorType === 'pattern') {
          return '<strong>Name</strong> can contain alphabets or dot(.) or space only';
        } else {
          return '';
        }
      }
      case "email": {
        if (errorType === 'required') {
          return '<strong>Email</strong> can\'t be blank';
        } else if (errorType === 'email') {
          return '<strong>Email</strong> should be in correct format: Eg: someone@example.com';
        } else {
          return '';
        }
      }
      case 'country': {
        if (errorType === 'required') {
          return 'You must choose a <strong>Country</strong>';
        } else {
          return '';
        }
      }
      default: return '';
    }
  }
}
