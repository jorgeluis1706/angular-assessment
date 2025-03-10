import {Component, inject} from '@angular/core';
import {ListingSearchFormComponent} from './components/listing-search-form/listing-search-form.component';
import {
  ListingSearchResultsTableComponent
} from './components/listing-search-results-table/listing-search-results-table.component';
import {Listing} from './interfaces/listing.interface';
import {ListingService} from './services/listing.service';
import { ChartConfiguration } from 'chart.js';
import {MatSnackBar} from "@angular/material/snack-bar";
import {BaseChartDirective} from "ng2-charts";
import {ListingSearchFormParams} from "./interfaces/listing-search-form.interface";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-listing',
  imports: [
    ListingSearchFormComponent,
    ListingSearchResultsTableComponent,
    BaseChartDirective,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  listings: Listing[] = []
  listingService: ListingService = inject(ListingService);
  private readonly _snackBar = inject(MatSnackBar);
  barChartLegend = true;
  barChartData: ChartConfiguration<'bar'>['data'] | undefined;
  barChartOptions: ChartConfiguration<'bar'>['options'] = { responsive: true }

  /**
   * Search listing properties by params
   * @param params
   */
  searchListing(params: ListingSearchFormParams){
    this.listings = [];
    this.listingService.getForRentProperties(params)
      .subscribe((res: Listing[]) => {
      if (res.length > 0) {
        this.listings = res;
        this.prepareListingChartData();
      } else {
        this._snackBar.open("Listing was not found with the supplied criteria; try again with new parameters.", "OK", {
          duration: 5000,
          panelClass: 'gray-snackbar'
        });
      }
    })
  }

  /**
   * Method to get all properties types in a listing grouped with their properties quantity
   */
  getAllPropertiesTypeInListing(): {propertyType: string, quantity: number}[]{
    const map = new Map<string | undefined, boolean>();
    const propertyTypesWithQuantity: {propertyType: string, quantity: number}[] = [];

    this.listings.forEach(listing => {
      const _propertyType = listing.propertyType;
      if (!map.has(_propertyType)) {
        map.set(_propertyType, true);

        propertyTypesWithQuantity.push({
          propertyType: _propertyType,
          quantity: this.listings.filter((listing) => listing.propertyType === _propertyType).length
        });
      }
    });

    return propertyTypesWithQuantity;
  }

  /**
   * This method prepare the chart data with the listing properties type and their quantity by type
   */
  prepareListingChartData(){
    const propertiesGroupedByType = this.getAllPropertiesTypeInListing();
    const propertyTypes=
        propertiesGroupedByType.map((property) => property.propertyType);
    const propertyTypesQuantity=
        propertiesGroupedByType.map((property) => property.quantity)

    this.barChartData = {
      labels: [ ...propertyTypes ],
      datasets: [
        { data: [ ...propertyTypesQuantity  ], label: 'Properties' }
      ]
    };
  }
}
