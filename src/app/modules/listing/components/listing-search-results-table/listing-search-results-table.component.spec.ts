import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSearchResultsTableComponent } from './listing-search-results-table.component';

describe('ListingSearchResultsTableComponent', () => {
  let component: ListingSearchResultsTableComponent;
  let fixture: ComponentFixture<ListingSearchResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingSearchResultsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingSearchResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
