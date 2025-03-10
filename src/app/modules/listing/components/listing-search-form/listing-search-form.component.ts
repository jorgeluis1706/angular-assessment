import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatLabel, MatPrefix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {ListingSearchFormParams} from '../../interfaces/listing-search-form.interface';
import {MatIcon} from '@angular/material/icon';

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
    ReactiveFormsModule,
    MatIcon,
    MatPrefix
  ],
  templateUrl: './listing-search-form.component.html',
  styleUrl: './listing-search-form.component.scss'
})
export class ListingSearchFormComponent {
  listingSearchForm = new FormGroup({
    city: new FormControl(''),
    propertyType: new FormControl(''),
    bedrooms: new FormControl(''),
    bathrooms: new FormControl(''),
  });

  @Output() formSubmit = new EventEmitter<ListingSearchFormParams>();

  /**
   * Handle listing search form submit.
   * The submit action emit the search form values to a parent component
   */
  handleSubmit(){
    this.formSubmit.emit(this.listingSearchForm.value);
  }
}
