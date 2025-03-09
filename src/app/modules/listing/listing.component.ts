import { Component } from '@angular/core';
import {ListingSearchFormComponent} from './components/listing-search-form/listing-search-form.component';
import {
  ListingSearchResultsTableComponent
} from './components/listing-search-results-table/listing-search-results-table.component';
import {Listing} from './models/listing.model';
import {ListingSearchFormParams} from './models/listing-search-form.model';

@Component({
  selector: 'app-listing',
  imports: [
    ListingSearchFormComponent,
    ListingSearchResultsTableComponent,
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  listings: Listing[] = [];

  /**
   * Search listing properties by params
   * @param params
   * TODO: Implement service to search listing
   */
  searchListing(params: ListingSearchFormParams){
    console.log(params);
  }
}
