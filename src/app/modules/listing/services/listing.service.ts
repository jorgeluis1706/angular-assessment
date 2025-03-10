import {inject, Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Listing} from '../interfaces/listing.interface';
import {ListingSearchFormParams} from '../interfaces/listing-search-form.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  listingServiceBaseURL = environment.listingServiceBaseURL;
  httpClient: HttpClient = inject(HttpClient);

  getForRentProperties(searchParams: ListingSearchFormParams): Observable<Listing[]> {
    return this.httpClient.get<Listing[]>(`${this.listingServiceBaseURL}/rental/long-term`, {
      params: {
        city: <string> searchParams.city,
        propertyType: <string> searchParams.propertyType,
        bedrooms: <string> searchParams.bedrooms,
        bathrooms: <string> searchParams.bathrooms,
      }
    })
  }
}
