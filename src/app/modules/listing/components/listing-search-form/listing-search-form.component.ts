import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {ListingSearchFormParams} from '../../models/listing-search-form.model';

@Component({
  selector: 'app-listing-search-form',
  imports: [
    MatFormField,
    MatFormField,
    MatLabel,
    MatSelect,
    FormsModule,
    MatOption,
    MatInput,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './listing-search-form.component.html',
  styleUrl: './listing-search-form.component.scss'
})
export class ListingSearchFormComponent {
  listingSearchForm = new FormGroup({
    city: new FormControl('New York'),
    propertyType: new FormControl(''),
    bedrooms: new FormControl(''),
    bathrooms: new FormControl(''),
  });

  @Output() formSubmit = new EventEmitter<ListingSearchFormParams>();

  handleSubmit(){
    this.formSubmit.emit(this.listingSearchForm.value);
  }
}
