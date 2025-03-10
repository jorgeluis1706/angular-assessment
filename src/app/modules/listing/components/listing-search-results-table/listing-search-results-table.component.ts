import  {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatInput, MatLabel} from '@angular/material/input';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatNoDataRow,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {Listing} from '../../interfaces/listing.interface';
import {CurrencyPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-listing-search-results-table',
  imports: [
    MatFormField, MatInput, MatColumnDef, MatTable, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatHeaderRowDef,
    MatRowDef, MatNoDataRow, MatPaginator, MatLabel, MatHeaderCellDef, MatCellDef, MatSort, DatePipe, CurrencyPipe, MatSortHeader
  ],
  templateUrl: './listing-search-results-table.component.html',
  styleUrl: './listing-search-results-table.component.scss'
})
export class ListingSearchResultsTableComponent implements AfterViewInit {
  @Input({required : true}) listingData: Listing[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator();
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] =
      ['propertyType','address', 'city', 'state', 'bedrooms', 'bathrooms', 'price', 'listedDate'];
  dataSource: MatTableDataSource<Listing> = new MatTableDataSource<Listing>();

  constructor() {}

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.listingData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Apply table filter
   * @param event typing event trigger that store the input value
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
