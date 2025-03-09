import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSearchFormComponent } from './listing-search-form.component';

describe('ListingSearchFormComponent', () => {
  let component: ListingSearchFormComponent;
  let fixture: ComponentFixture<ListingSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingSearchFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
