import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
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
import {MatSort} from '@angular/material/sort';
import {Listing} from '../../models/listing.model';

@Component({
  selector: 'app-listing-search-results-table',
  imports: [
    MatFormField, MatInput, MatColumnDef, MatTable, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatHeaderRowDef,
    MatRowDef, MatNoDataRow, MatPaginator, MatLabel, MatHeaderCellDef, MatCellDef, MatSort
  ],
  templateUrl: './listing-search-results-table.component.html',
  styleUrl: './listing-search-results-table.component.scss'
})
export class ListingSearchResultsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['propertyType','address', 'city', 'state', 'bedrooms', 'bathrooms', 'listedDate'];
  dataSource: MatTableDataSource<Listing>;

  @Input({required : true}) listingData: Listing[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator();
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor() {
    this.dataSource = new MatTableDataSource(this.listingData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
