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
  // listings: Listing[] = [
  //   {
  //     "id": "161-W-61st-St,-Apt-12C,-New-York,-NY-10023",
  //     "formattedAddress": "161 W 61st St, Apt 12C, New York, NY 10023",
  //     "addressLine1": "161 W 61st St",
  //     "addressLine2": "Apt 12C",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10023",
  //     "county": "New York",
  //     "latitude": 40.771561,
  //     "longitude": -73.985834,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 786,
  //     "lotSize": 14100,
  //     "yearBuilt": 1988,
  //     "status": "Active",
  //     "price": 4500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-20T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-12-05T02:30:34.290Z",
  //     "lastSeenDate": "2025-03-10T03:50:00.399Z",
  //     "daysOnMarket": 19,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "4a41ef18-a045-42da-bec7-554b1a4f7e8e",
  //     "listingAgent": {
  //       "name": "Ivana Kovacevic",
  //       "phone": "2127217227",
  //       "email": "ivana.kovacevic@corcoran.com",
  //       "website": "http://www.corcoran.com/ikovacevic"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran West Side Gallery",
  //       "phone": "2127217227",
  //       "email": "kpickard@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-20": {
  //         "event": "Rental Listing",
  //         "price": 4500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-20T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 19
  //       }
  //     }
  //   },
  //   {
  //     "id": "61-Malcolm-X-Blvd,-Apt-4C,-New-York,-NY-10026",
  //     "formattedAddress": "61 Malcolm X Blvd, Apt 4C, New York, NY 10026",
  //     "addressLine1": "61 Malcolm X Blvd",
  //     "addressLine2": "Apt 4C",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10026",
  //     "county": "New York",
  //     "latitude": 40.800386,
  //     "longitude": -73.951391,
  //     "propertyType": "Apartament",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 550,
  //     "yearBuilt": 1900,
  //     "status": "Active",
  //     "price": 3400,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-20T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2021-10-14T01:36:07.188Z",
  //     "lastSeenDate": "2025-03-10T03:50:00.398Z",
  //     "daysOnMarket": 19,
  //     "mlsName": "OneKeyMLS",
  //     "mlsNumber": "826394",
  //     "listingAgent": {
  //       "name": "Milton Coste",
  //       "phone": "9174167433",
  //       "email": "mcoste@kwnyc.com",
  //       "website": "miltoncoste.com"
  //     },
  //     "listingOffice": {
  //       "name": "Keller Williams Nyc",
  //       "phone": "9177718812",
  //       "email": "bnyc@bracha.com",
  //       "website": "kwnyc.com"
  //     },
  //     "history": {
  //       "2025-02-20": {
  //         "event": "Rental Listing",
  //         "price": 3400,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-20T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 19
  //       }
  //     }
  //   },
  //   {
  //     "id": "100-United-Nations-Plz,-Apt-14C,-New-York,-NY-10017",
  //     "formattedAddress": "100 United Nations Plz, Apt 14C, New York, NY 10017",
  //     "addressLine1": "100 United Nations Plz",
  //     "addressLine2": "Apt 14C",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10017",
  //     "county": "New York",
  //     "latitude": 40.753002,
  //     "longitude": -73.967613,
  //     "propertyType": "Single Family",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 791,
  //     "yearBuilt": 1986,
  //     "status": "Active",
  //     "price": 4500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-19T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2019-11-08T18:02:42.485Z",
  //     "lastSeenDate": "2025-03-10T03:50:00.389Z",
  //     "daysOnMarket": 20,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "bf114ad5-30cc-4961-b1ea-882afcd0c590",
  //     "listingAgent": {
  //       "name": "Michael Weiss",
  //       "phone": "2129412500",
  //       "email": "michael.weiss@corcoran.com",
  //       "website": "http://www.corcoran.com/mweiss"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran SoHo",
  //       "phone": "2129412500",
  //       "email": "brennan.zahler@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-19": {
  //         "event": "Rental Listing",
  //         "price": 4500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-19T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 20
  //       }
  //     }
  //   },
  //   {
  //     "id": "467-Central-Park-W,-Apt-9D,-New-York,-NY-10025",
  //     "formattedAddress": "467 Central Park W, Apt 9D, New York, NY 10025",
  //     "addressLine1": "467 Central Park W",
  //     "addressLine2": "Apt 9D",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10025",
  //     "county": "New York",
  //     "latitude": 40.798707,
  //     "longitude": -73.960019,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 736,
  //     "lotSize": 9500,
  //     "yearBuilt": 1929,
  //     "status": "Active",
  //     "price": 4000,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-20T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2022-02-05T02:27:30.742Z",
  //     "lastSeenDate": "2025-03-10T03:50:00.345Z",
  //     "daysOnMarket": 19,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "128ce78b-aa22-42e7-8458-50982a683e58",
  //     "listingAgent": {
  //       "name": "Kevin Mcneill",
  //       "phone": "2129412500",
  //       "email": "kevin.mcneill@corcoran.com",
  //       "website": "http://www.corcoran.com/kmcneill"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran SoHo",
  //       "phone": "2129412500",
  //       "email": "brennan.zahler@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-20": {
  //         "event": "Rental Listing",
  //         "price": 4000,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-20T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 19
  //       }
  //     }
  //   },
  //   {
  //     "id": "344-W-12th-St,-Apt-4B,-New-York,-NY-10014",
  //     "formattedAddress": "344 W 12th St, Apt 4B, New York, NY 10014",
  //     "addressLine1": "344 W 12th St",
  //     "addressLine2": "Apt 4B",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10014",
  //     "county": "New York",
  //     "latitude": 40.737364,
  //     "longitude": -74.00727,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "lotSize": 5760,
  //     "yearBuilt": 1925,
  //     "status": "Active",
  //     "price": 5500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-20T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-21T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:50:00.345Z",
  //     "daysOnMarket": 19,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "b47d1910-e831-42d8-9e01-2f308b3ee8d7",
  //     "listingAgent": {
  //       "name": "Natassia Espina",
  //       "phone": "9174079476",
  //       "email": "natassia.espina@corcoran.com"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran East Side",
  //       "phone": "2123553550",
  //       "email": "helen.monti@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-20": {
  //         "event": "Rental Listing",
  //         "price": 5500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-20T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 19
  //       }
  //     }
  //   },
  //   {
  //     "id": "36-W-35th-St,-Apt-2A,-New-York,-NY-10001",
  //     "formattedAddress": "36 W 35th St, Apt 2A, New York, NY 10001",
  //     "addressLine1": "36 W 35th St",
  //     "addressLine2": "Apt 2A",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10001",
  //     "county": "New York",
  //     "latitude": 40.749645,
  //     "longitude": -73.985938,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "yearBuilt": 1930,
  //     "status": "Active",
  //     "price": 3500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-20T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-11-19T02:53:02.520Z",
  //     "lastSeenDate": "2025-03-10T03:50:00.344Z",
  //     "daysOnMarket": 19,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "68a8f56d-c2ac-4527-b423-3a086af9b458",
  //     "listingAgent": {
  //       "name": "Ignazio Leone",
  //       "phone": "2126857777",
  //       "email": "ileone@corcoran.com",
  //       "website": "www.corcoran.com/ileone"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Park Avenue South",
  //       "phone": "2127743800",
  //       "email": "bullman@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-20": {
  //         "event": "Rental Listing",
  //         "price": 3500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-20T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 19
  //       }
  //     }
  //   },
  //   {
  //     "id": "1-Wall-Street-Ct,-Apt-1205,-New-York,-NY-10005",
  //     "formattedAddress": "1 Wall Street Ct, Apt 1205, New York, NY 10005",
  //     "addressLine1": "1 Wall Street Ct",
  //     "addressLine2": "Apt 1205",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10005",
  //     "county": "New York",
  //     "latitude": 40.705192,
  //     "longitude": -74.008503,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 855,
  //     "lotSize": 48146,
  //     "yearBuilt": 1930,
  //     "status": "Active",
  //     "price": 7500,
  //     "listingType": "New Construction",
  //     "listedDate": "2025-02-20T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-21T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:50:00.341Z",
  //     "daysOnMarket": 19,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "0701020f-1f6d-49e4-bedf-51cd0f037b47",
  //     "listingAgent": {
  //       "name": "Prince Dockery",
  //       "phone": "6465807362",
  //       "email": "prince.dockery@corcoran.com"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran SoHo",
  //       "phone": "2129412500",
  //       "email": "brennan.zahler@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-20": {
  //         "event": "Rental Listing",
  //         "price": 7500,
  //         "listingType": "New Construction",
  //         "listedDate": "2025-02-20T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 19
  //       }
  //     }
  //   },
  //   {
  //     "id": "111-W-56th-St,-Apt-37K,-New-York,-NY-10019",
  //     "formattedAddress": "111 W 56th St, Apt 37K, New York, NY 10019",
  //     "addressLine1": "111 W 56th St",
  //     "addressLine2": "Apt 37K",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10019",
  //     "county": "New York",
  //     "latitude": 40.76389,
  //     "longitude": -73.9779,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 698,
  //     "status": "Active",
  //     "price": 6500,
  //     "listingType": "Standard",
  //     "listedDate": "2024-01-17T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2024-11-02T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:48:34.931Z",
  //     "daysOnMarket": 419,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "11791290",
  //     "listingAgent": {
  //       "name": "Charlar Acar",
  //       "phone": "3475705316",
  //       "email": "charlar@nycasas.com"
  //     },
  //     "listingOffice": {
  //       "name": "Leven Real Estate - Head Office",
  //       "phone": "9172856835",
  //       "email": "info@nycasas.com"
  //     },
  //     "history": {
  //       "2024-01-17": {
  //         "event": "Rental Listing",
  //         "price": 6500,
  //         "listingType": "Standard",
  //         "listedDate": "2024-01-17T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 419
  //       }
  //     }
  //   },
  //   {
  //     "id": "455-E-86th-St,-Apt-4E,-New-York,-NY-10028",
  //     "formattedAddress": "455 E 86th St, Apt 4E, New York, NY 10028",
  //     "addressLine1": "455 E 86th St",
  //     "addressLine2": "Apt 4E",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10028",
  //     "county": "New York",
  //     "latitude": 40.776341,
  //     "longitude": -73.94716,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 770,
  //     "yearBuilt": 1986,
  //     "status": "Active",
  //     "price": 4750,
  //     "listingType": "Standard",
  //     "listedDate": "2023-12-28T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2023-12-28T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:48:34.904Z",
  //     "daysOnMarket": 439,
  //     "mlsName": "NestSeekers",
  //     "mlsNumber": "3252788",
  //     "listingAgent": {
  //       "name": "Dylan Di Sabatino",
  //       "phone": "3023320597",
  //       "email": "dylands@nestseekers.com",
  //       "website": "www.nestseekers.com/agent/dylan-di-sabatino"
  //     },
  //     "listingOffice": {
  //       "name": "Nest Seekers International, Midtown",
  //       "phone": "2122528772",
  //       "email": "info@nestseekers.com"
  //     },
  //     "history": {
  //       "2023-12-28": {
  //         "event": "Rental Listing",
  //         "price": 4750,
  //         "listingType": "Standard",
  //         "listedDate": "2023-12-28T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 439
  //       }
  //     }
  //   },
  //   {
  //     "id": "317-E-111th-St,-Apt-6C,-New-York,-NY-10029",
  //     "formattedAddress": "317 E 111th St, Apt 6C, New York, NY 10029",
  //     "addressLine1": "317 E 111th St",
  //     "addressLine2": "Apt 6C",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10029",
  //     "county": "New York",
  //     "latitude": 40.793572,
  //     "longitude": -73.938939,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 720,
  //     "yearBuilt": 2009,
  //     "status": "Active",
  //     "price": 2915,
  //     "listingType": "Standard",
  //     "listedDate": "2023-09-01T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2021-06-30T02:58:06.915Z",
  //     "lastSeenDate": "2025-03-10T03:48:34.864Z",
  //     "daysOnMarket": 557,
  //     "mlsName": "NestSeekers",
  //     "mlsNumber": "3007383",
  //     "listingAgent": {
  //       "name": "Leigh Wilcher",
  //       "phone": "9176223444",
  //       "email": "leighw@nestseekers.com",
  //       "website": "https://www.nestseekers.com/agent/leigh-wilcher-2"
  //     },
  //     "listingOffice": {
  //       "name": "Nest Seekers International, Midtown",
  //       "phone": "2122528772",
  //       "email": "info@nestseekers.com"
  //     },
  //     "history": {
  //       "2023-09-01": {
  //         "event": "Rental Listing",
  //         "price": 2915,
  //         "listingType": "Standard",
  //         "listedDate": "2023-09-01T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 557
  //       }
  //     }
  //   },
  //   {
  //     "id": "221-W-21st-St,-Apt-2B,-New-York,-NY-10011",
  //     "formattedAddress": "221 W 21st St, Apt 2B, New York, NY 10011",
  //     "addressLine1": "221 W 21st St",
  //     "addressLine2": "Apt 2B",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10011",
  //     "county": "New York",
  //     "latitude": 40.743451,
  //     "longitude": -73.997512,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "yearBuilt": 1920,
  //     "status": "Active",
  //     "price": 3798,
  //     "listingType": "New Construction",
  //     "listedDate": "2025-02-21T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-22T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:46:13.325Z",
  //     "daysOnMarket": 18,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "569524395",
  //     "listingAgent": {
  //       "name": "Eli Halali",
  //       "phone": "6462093664",
  //       "email": "elih@mrgnyc.com"
  //     },
  //     "listingOffice": {
  //       "name": "Manhattan Realty Group - Manhattan Realty Group 211",
  //       "phone": "2124707070"
  //     },
  //     "history": {
  //       "2025-02-21": {
  //         "event": "Rental Listing",
  //         "price": 3798,
  //         "listingType": "New Construction",
  //         "listedDate": "2025-02-21T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 18
  //       }
  //     }
  //   },
  //   {
  //     "id": "123-Washington-St,-Apt-39E,-New-York,-NY-10006",
  //     "formattedAddress": "123 Washington St, Apt 39E, New York, NY 10006",
  //     "addressLine1": "123 Washington St",
  //     "addressLine2": "Apt 39E",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10006",
  //     "county": "New York",
  //     "latitude": 40.709166,
  //     "longitude": -74.013698,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 724,
  //     "lotSize": 15776,
  //     "yearBuilt": 2007,
  //     "status": "Active",
  //     "price": 4800,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-21T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-22T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:46:13.320Z",
  //     "daysOnMarket": 18,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "9fc60831-a25a-40be-87b3-9b45d12d666f",
  //     "listingAgent": {
  //       "name": "Gitu Ramani-ruff",
  //       "email": "gitu.ramani-ruff@corcoran.com",
  //       "website": "www.corcoran.com/gramani"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran SoHo",
  //       "phone": "2129412500",
  //       "email": "brennan.zahler@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-21": {
  //         "event": "Rental Listing",
  //         "price": 4800,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-21T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 18
  //       }
  //     }
  //   },
  //   {
  //     "id": "225-Rector-Pl,-Apt-10R,-New-York,-NY-10280",
  //     "formattedAddress": "225 Rector Pl, Apt 10R, New York, NY 10280",
  //     "addressLine1": "225 Rector Pl",
  //     "addressLine2": "Apt 10R",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10280",
  //     "county": "New York",
  //     "latitude": 40.709523,
  //     "longitude": -74.015991,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "status": "Active",
  //     "price": 4400,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-21T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-20T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:46:13.311Z",
  //     "daysOnMarket": 18,
  //     "history": {
  //       "2025-02-21": {
  //         "event": "Rental Listing",
  //         "price": 4400,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-21T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 18
  //       }
  //     }
  //   },
  //   {
  //     "id": "217-E-96th-St,-Apt-38D,-New-York,-NY-10128",
  //     "formattedAddress": "217 E 96th St, Apt 38D, New York, NY 10128",
  //     "addressLine1": "217 E 96th St",
  //     "addressLine2": "Apt 38D",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10128",
  //     "county": "New York",
  //     "latitude": 40.784912,
  //     "longitude": -73.948196,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 701,
  //     "lotSize": 32522,
  //     "yearBuilt": 2005,
  //     "status": "Active",
  //     "price": 4695,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-21T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-22T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:46:13.310Z",
  //     "daysOnMarket": 18,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "167b00ed-3028-47e4-9472-14d8872bb1f3",
  //     "listingAgent": {
  //       "name": "Jason Kay",
  //       "phone": "2123553550",
  //       "email": "jason.kay@corcoran.com",
  //       "website": "http://www.corcoran.com/jkay"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran East Side",
  //       "phone": "2123553550",
  //       "email": "helen.monti@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-21": {
  //         "event": "Rental Listing",
  //         "price": 4695,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-21T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 18
  //       }
  //     }
  //   },
  //   {
  //     "id": "445-W-19th-St,-Apt-4C,-New-York,-NY-10011",
  //     "formattedAddress": "445 W 19th St, Apt 4C, New York, NY 10011",
  //     "addressLine1": "445 W 19th St",
  //     "addressLine2": "Apt 4C",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10011",
  //     "county": "New York",
  //     "latitude": 40.745012,
  //     "longitude": -74.004883,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 600,
  //     "yearBuilt": 1988,
  //     "status": "Active",
  //     "price": 4850,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-21T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-01-03T21:19:13.790Z",
  //     "lastSeenDate": "2025-03-10T03:46:13.302Z",
  //     "daysOnMarket": 18,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "597f7588-d3ba-4484-bd81-2e416edfb3c7",
  //     "listingAgent": {
  //       "name": "Tori Rubin",
  //       "phone": "5164554974",
  //       "email": "tori.rubin@corcoran.com"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Park Avenue South",
  //       "phone": "2127743800",
  //       "email": "bullman@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-21": {
  //         "event": "Rental Listing",
  //         "price": 4850,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-21T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 18
  //       }
  //     }
  //   },
  //   {
  //     "id": "210-Warren-St,-Apt-10D,-New-York,-NY-10282",
  //     "formattedAddress": "210 Warren St, Apt 10D, New York, NY 10282",
  //     "addressLine1": "210 Warren St",
  //     "addressLine2": "Apt 10D",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10282",
  //     "county": "New York",
  //     "latitude": 40.71698,
  //     "longitude": -74.015038,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 676,
  //     "lotSize": 26460,
  //     "yearBuilt": 2004,
  //     "status": "Active",
  //     "price": 6375,
  //     "listingType": "New Construction",
  //     "listedDate": "2025-02-21T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-22T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:46:13.301Z",
  //     "daysOnMarket": 18,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "b6950ad8-63d3-497c-a4a9-ed320b2c34f2",
  //     "listingAgent": {
  //       "name": "Jessica Pacheco",
  //       "phone": "2123553550",
  //       "email": "jessica.pacheco@corcoran.com",
  //       "website": "www.corcoran.com/jpacheco"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran East Side",
  //       "phone": "2123553550",
  //       "email": "helen.monti@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-21": {
  //         "event": "Rental Listing",
  //         "price": 6375,
  //         "listingType": "New Construction",
  //         "listedDate": "2025-02-21T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 18
  //       }
  //     }
  //   },
  //   {
  //     "id": "55-E-93rd-St,-Apt-5C,-New-York,-NY-10128",
  //     "formattedAddress": "55 E 93rd St, Apt 5C, New York, NY 10128",
  //     "addressLine1": "55 E 93rd St",
  //     "addressLine2": "Apt 5C",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10128",
  //     "county": "New York",
  //     "latitude": 40.785257,
  //     "longitude": -73.954931,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 475,
  //     "yearBuilt": 1899,
  //     "status": "Active",
  //     "price": 3700,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-21T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-22T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:46:13.295Z",
  //     "daysOnMarket": 18,
  //     "mlsName": "Perchwell",
  //     "mlsNumber": "40124673",
  //     "listingAgent": {
  //       "name": "William Belkin",
  //       "phone": "9175847155",
  //       "email": "wbelkin@levelgroup.com"
  //     },
  //     "listingOffice": {
  //       "name": "Level",
  //       "phone": "2129949965"
  //     },
  //     "history": {
  //       "2025-02-21": {
  //         "event": "Rental Listing",
  //         "price": 3700,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-21T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 18
  //       }
  //     }
  //   },
  //   {
  //     "id": "522-W-50th-St,-Apt-C4,-New-York,-NY-10019",
  //     "formattedAddress": "522 W 50th St, Apt C4, New York, NY 10019",
  //     "addressLine1": "522 W 50th St",
  //     "addressLine2": "Apt C4",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10019",
  //     "county": "New York",
  //     "latitude": 40.76501,
  //     "longitude": -73.993152,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "lotSize": 2500,
  //     "yearBuilt": 1901,
  //     "status": "Active",
  //     "price": 2495,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-21T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2022-02-02T00:10:50.954Z",
  //     "lastSeenDate": "2025-03-10T03:46:13.290Z",
  //     "daysOnMarket": 18,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "2a4f0459-227e-4920-be1c-1d07c09f163f",
  //     "listingAgent": {
  //       "name": "Keith Knight",
  //       "phone": "2126857777",
  //       "email": "kknight@corcoran.com"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Park Avenue South",
  //       "phone": "2127743800",
  //       "email": "bullman@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-21": {
  //         "event": "Rental Listing",
  //         "price": 2495,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-21T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 18
  //       }
  //     }
  //   },
  //   {
  //     "id": "350-W-42nd-St,-Apt-42A,-New-York,-NY-10036",
  //     "formattedAddress": "350 W 42nd St, Apt 42A, New York, NY 10036",
  //     "addressLine1": "350 W 42nd St",
  //     "addressLine2": "Apt 42A",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10036",
  //     "county": "New York",
  //     "latitude": 40.757852,
  //     "longitude": -73.992262,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 885,
  //     "lotSize": 11682,
  //     "yearBuilt": 2007,
  //     "status": "Active",
  //     "price": 6500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-22T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2019-11-12T12:27:05.352Z",
  //     "lastSeenDate": "2025-03-10T03:46:13.272Z",
  //     "daysOnMarket": 17,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "18affa27-2137-40a1-b46e-2ab9c9d6081c",
  //     "listingAgent": {
  //       "name": "Ashley Dyer"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Chelsea/Flatiron",
  //       "phone": "2124447800",
  //       "email": "joel.dommel@corcoran.com",
  //       "website": "https://www.corcoran.com/real-estate-offices/detail/chelsea-flatiron/579"
  //     },
  //     "history": {
  //       "2025-02-22": {
  //         "event": "Rental Listing",
  //         "price": 6500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-22T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 17
  //       }
  //     }
  //   },
  //   {
  //     "id": "1623-3rd-Ave,-Apt-4B,-New-York,-NY-10128",
  //     "formattedAddress": "1623 3rd Ave, Apt 4B, New York, NY 10128",
  //     "addressLine1": "1623 3rd Ave",
  //     "addressLine2": "Apt 4B",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10128",
  //     "county": "New York",
  //     "latitude": 40.782015,
  //     "longitude": -73.950669,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "status": "Active",
  //     "price": 2700,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-22T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-01-11T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:42:26.285Z",
  //     "daysOnMarket": 17,
  //     "history": {
  //       "2025-01-10": {
  //         "event": "Rental Listing",
  //         "price": 2800,
  //         "listingType": "Standard",
  //         "listedDate": "2025-01-10T00:00:00.000Z",
  //         "removedDate": "2025-02-06T00:00:00.000Z",
  //         "daysOnMarket": 27
  //       },
  //       "2025-02-22": {
  //         "event": "Rental Listing",
  //         "price": 2700,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-22T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 17
  //       }
  //     }
  //   },
  //   {
  //     "id": "377-Rector-Pl,-Apt-6J,-New-York,-NY-10280",
  //     "formattedAddress": "377 Rector Pl, Apt 6J, New York, NY 10280",
  //     "addressLine1": "377 Rector Pl",
  //     "addressLine2": "Apt 6J",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10280",
  //     "county": "New York",
  //     "latitude": 40.709852,
  //     "longitude": -74.01788,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 693,
  //     "yearBuilt": 1986,
  //     "status": "Active",
  //     "price": 4500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-23T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-11-12T03:20:03.247Z",
  //     "lastSeenDate": "2025-03-10T03:42:26.139Z",
  //     "daysOnMarket": 16,
  //     "mlsName": "ManhattanNY",
  //     "mlsNumber": "18099",
  //     "listingAgent": {
  //       "name": "Leo Dun",
  //       "phone": "8626842367",
  //       "email": "leo.dun.ny@gmail.com"
  //     },
  //     "listingOffice": {
  //       "name": "Realmart Realty, LLC",
  //       "phone": "8883626",
  //       "email": "nyadmin@realmartrealty.com"
  //     },
  //     "history": {
  //       "2025-02-23": {
  //         "event": "Rental Listing",
  //         "price": 4500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-23T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 16
  //       }
  //     }
  //   },
  //   {
  //     "id": "20-E-68th-St,-Apt-16A,-New-York,-NY-10065",
  //     "formattedAddress": "20 E 68th St, Apt 16A, New York, NY 10065",
  //     "addressLine1": "20 E 68th St",
  //     "addressLine2": "Apt 16A",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10065",
  //     "county": "New York",
  //     "latitude": 40.769246,
  //     "longitude": -73.967623,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 1075,
  //     "lotSize": 9500,
  //     "yearBuilt": 1956,
  //     "status": "Active",
  //     "price": 6500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-24T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-25T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:42:26.113Z",
  //     "daysOnMarket": 15,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "7711d114-56bd-460a-a1f5-fdea748dac47",
  //     "listingAgent": {
  //       "name": "Richard Hottinger",
  //       "phone": "2123553550",
  //       "email": "richard.hottinger@corcoran.com",
  //       "website": "http://www.corcoran.com/rhottinger"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran East Side",
  //       "phone": "2123553550",
  //       "email": "helen.monti@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-24": {
  //         "event": "Rental Listing",
  //         "price": 6500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-24T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 15
  //       }
  //     }
  //   },
  //   {
  //     "id": "123-Washington-St,-Apt-24H,-New-York,-NY-10006",
  //     "formattedAddress": "123 Washington St, Apt 24H, New York, NY 10006",
  //     "addressLine1": "123 Washington St",
  //     "addressLine2": "Apt 24H",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10006",
  //     "county": "New York",
  //     "latitude": 40.709166,
  //     "longitude": -74.013698,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 606,
  //     "lotSize": 15776,
  //     "yearBuilt": 2007,
  //     "status": "Active",
  //     "price": 4300,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-24T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2022-10-11T01:23:02.959Z",
  //     "lastSeenDate": "2025-03-10T03:42:26.068Z",
  //     "daysOnMarket": 15,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "9f82a682-3a8d-4bb3-bd3c-90b48341108a",
  //     "listingAgent": {
  //       "name": "Gitu Ramani-ruff",
  //       "email": "gitu.ramani-ruff@corcoran.com",
  //       "website": "www.corcoran.com/gramani"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran SoHo",
  //       "phone": "2129412500",
  //       "email": "brennan.zahler@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-24": {
  //         "event": "Rental Listing",
  //         "price": 4300,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-24T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 15
  //       }
  //     }
  //   },
  //   {
  //     "id": "29-W-138th-St,-Apt-6I,-New-York,-NY-10037",
  //     "formattedAddress": "29 W 138th St, Apt 6I, New York, NY 10037",
  //     "addressLine1": "29 W 138th St",
  //     "addressLine2": "Apt 6I",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10037",
  //     "county": "New York",
  //     "latitude": 40.815172,
  //     "longitude": -73.936835,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "lotSize": 17000,
  //     "yearBuilt": 2007,
  //     "status": "Active",
  //     "price": 3000,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-24T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2021-02-14T03:34:24.838Z",
  //     "lastSeenDate": "2025-03-10T03:42:26.066Z",
  //     "daysOnMarket": 15,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "4ca786af-c61c-45af-984c-9278f8b5d17f",
  //     "listingAgent": {
  //       "name": "Michael Chadwick",
  //       "phone": "2126857777",
  //       "email": "mchadwick@corcoran.com"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Park Avenue South",
  //       "phone": "2127743800",
  //       "email": "bullman@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-24": {
  //         "event": "Rental Listing",
  //         "price": 3000,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-24T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 15
  //       }
  //     }
  //   },
  //   {
  //     "id": "317-E-3rd-St,-Apt-29,-New-York,-NY-10009",
  //     "formattedAddress": "317 E 3rd St, Apt 29, New York, NY 10009",
  //     "addressLine1": "317 E 3rd St",
  //     "addressLine2": "Apt 29",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10009",
  //     "county": "New York",
  //     "latitude": 40.721151,
  //     "longitude": -73.978796,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "lotSize": 4704,
  //     "yearBuilt": 1925,
  //     "status": "Active",
  //     "price": 2800,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-24T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2019-04-12T02:28:46.498Z",
  //     "lastSeenDate": "2025-03-10T03:41:54.640Z",
  //     "daysOnMarket": 15,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "c5f34f91-bfc8-4ce3-a40f-3152731986ea",
  //     "listingAgent": {
  //       "name": "Amalia Daskalakis",
  //       "phone": "2129412500",
  //       "email": "amalia.daskalakis@corcoran.com",
  //       "website": "http://www.corcoran.com/adaskalaki"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran SoHo",
  //       "phone": "2129412500",
  //       "email": "brennan.zahler@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-24": {
  //         "event": "Rental Listing",
  //         "price": 2800,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-24T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 15
  //       }
  //     }
  //   },
  //   {
  //     "id": "247-W-46th-St,-Apt-1405,-New-York,-NY-10036",
  //     "formattedAddress": "247 W 46th St, Apt 1405, New York, NY 10036",
  //     "addressLine1": "247 W 46th St",
  //     "addressLine2": "Apt 1405",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10036",
  //     "county": "New York",
  //     "latitude": 40.75985,
  //     "longitude": -73.987449,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 748,
  //     "yearBuilt": 2007,
  //     "status": "Active",
  //     "price": 4950,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-25T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2019-06-19T20:56:12.391Z",
  //     "lastSeenDate": "2025-03-10T03:41:54.629Z",
  //     "daysOnMarket": 14,
  //     "mlsName": "NestSeekers",
  //     "mlsNumber": "4223227",
  //     "listingAgent": {
  //       "name": "Sarah Son"
  //     },
  //     "listingOffice": {
  //       "name": "Nest Seekers International, Westside",
  //       "phone": "6466818811",
  //       "email": "info@nestseekers.com"
  //     },
  //     "history": {
  //       "2025-02-25": {
  //         "event": "Rental Listing",
  //         "price": 4950,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-25T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 14
  //       }
  //     }
  //   },
  //   {
  //     "id": "49-E-34th-St,-Apt-29B,-New-York,-NY-10016",
  //     "formattedAddress": "49 E 34th St, Apt 29B, New York, NY 10016",
  //     "addressLine1": "49 E 34th St",
  //     "addressLine2": "Apt 29B",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10016",
  //     "county": "New York",
  //     "latitude": 40.747622,
  //     "longitude": -73.982131,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "yearBuilt": 2009,
  //     "status": "Active",
  //     "price": 5750,
  //     "listingType": "New Construction",
  //     "listedDate": "2025-02-25T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-26T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:41:54.614Z",
  //     "daysOnMarket": 14,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "487201560",
  //     "listingAgent": {
  //       "name": "Claire Kane",
  //       "phone": "6096750671",
  //       "email": "claire@realnyproperties.com"
  //     },
  //     "listingOffice": {
  //       "name": "REAL NEW YORK - Lower East Side",
  //       "phone": "2122791289",
  //       "email": "info@realnyproperties.com"
  //     },
  //     "history": {
  //       "2025-02-25": {
  //         "event": "Rental Listing",
  //         "price": 5750,
  //         "listingType": "New Construction",
  //         "listedDate": "2025-02-25T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 14
  //       }
  //     }
  //   },
  //   {
  //     "id": "346-E-119th-St,---2F,-New-York,-NY-10035",
  //     "formattedAddress": "346 E 119th St, # 2F, New York, NY 10035",
  //     "addressLine1": "346 E 119th St",
  //     "addressLine2": "# 2F",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10035",
  //     "county": "New York",
  //     "latitude": 40.798138,
  //     "longitude": -73.934723,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 730,
  //     "yearBuilt": 2010,
  //     "status": "Active",
  //     "price": 2995,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-25T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-02-26T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:41:54.606Z",
  //     "daysOnMarket": 14,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "b914e306-e928-443a-a185-3e32415888b3",
  //     "listingAgent": {
  //       "name": "William Modeste",
  //       "phone": "2129574100",
  //       "email": "william.modeste@corcoran.com",
  //       "website": "www.corcoran.com/wmodeste"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Westside Columbus",
  //       "phone": "2129574100",
  //       "email": "ehamm@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-25": {
  //         "event": "Rental Listing",
  //         "price": 2995,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-25T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 14
  //       }
  //     }
  //   },
  //   {
  //     "id": "12-Gramercy-Park-S,-Apt-2F,-New-York,-NY-10003",
  //     "formattedAddress": "12 Gramercy Park S, Apt 2F, New York, NY 10003",
  //     "addressLine1": "12 Gramercy Park S",
  //     "addressLine2": "Apt 2F",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10003",
  //     "county": "New York",
  //     "latitude": 40.737873,
  //     "longitude": -73.986961,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 842,
  //     "status": "Active",
  //     "price": 9000,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-26T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-03-13T19:15:18.536Z",
  //     "lastSeenDate": "2025-03-10T03:41:54.554Z",
  //     "daysOnMarket": 13,
  //     "history": {
  //       "2025-02-26": {
  //         "event": "Rental Listing",
  //         "price": 9000,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-26T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 13
  //       }
  //     }
  //   },
  //   {
  //     "id": "41-W-72nd-St,-Apt-7C,-New-York,-NY-10023",
  //     "formattedAddress": "41 W 72nd St, Apt 7C, New York, NY 10023",
  //     "addressLine1": "41 W 72nd St",
  //     "addressLine2": "Apt 7C",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10023",
  //     "county": "New York",
  //     "latitude": 40.777387,
  //     "longitude": -73.977986,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 638,
  //     "lotSize": 10200,
  //     "yearBuilt": 1928,
  //     "status": "Active",
  //     "price": 4500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-26T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-07-04T21:04:56.801Z",
  //     "lastSeenDate": "2025-03-10T03:41:54.549Z",
  //     "daysOnMarket": 13,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "412412b9-2870-45e8-88e4-7a022c2ce590",
  //     "listingAgent": {
  //       "name": "Shannon Aalai",
  //       "phone": "2126857777",
  //       "email": "saalai@corcoran.com"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Park Avenue South",
  //       "phone": "2127743800",
  //       "email": "bullman@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-26": {
  //         "event": "Rental Listing",
  //         "price": 4500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-26T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 13
  //       }
  //     }
  //   },
  //   {
  //     "id": "15-W-61st-St,-Apt-3K,-New-York,-NY-10023",
  //     "formattedAddress": "15 W 61st St, Apt 3K, New York, NY 10023",
  //     "addressLine1": "15 W 61st St",
  //     "addressLine2": "Apt 3K",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10023",
  //     "county": "New York",
  //     "latitude": 40.770235,
  //     "longitude": -73.982795,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 804,
  //     "lotSize": 29257,
  //     "yearBuilt": 2019,
  //     "status": "Active",
  //     "price": 7000,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-26T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2022-03-31T02:11:54.117Z",
  //     "lastSeenDate": "2025-03-10T03:41:54.538Z",
  //     "daysOnMarket": 13,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "859f9909-415b-4c7f-ad6f-de26a7e2e9aa",
  //     "listingAgent": {
  //       "name": "Sonia Cozzi"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Westside Columbus",
  //       "phone": "2129574100",
  //       "email": "ehamm@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2024-07-15": {
  //         "event": "Rental Listing",
  //         "price": 7000,
  //         "listingType": "Standard",
  //         "listedDate": "2024-07-15T00:00:00.000Z",
  //         "removedDate": "2024-10-18T00:00:00.000Z",
  //         "daysOnMarket": 95
  //       },
  //       "2025-02-26": {
  //         "event": "Rental Listing",
  //         "price": 7000,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-26T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 13
  //       }
  //     }
  //   },
  //   {
  //     "id": "123-Washington-St,-Apt-49G,-New-York,-NY-10006",
  //     "formattedAddress": "123 Washington St, Apt 49G, New York, NY 10006",
  //     "addressLine1": "123 Washington St",
  //     "addressLine2": "Apt 49G",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10006",
  //     "county": "New York",
  //     "latitude": 40.709166,
  //     "longitude": -74.013698,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 723,
  //     "yearBuilt": 2007,
  //     "status": "Active",
  //     "price": 5800,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-27T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2019-10-28T11:47:32.518Z",
  //     "lastSeenDate": "2025-03-10T03:37:22.461Z",
  //     "daysOnMarket": 12,
  //     "mlsName": "Sothebys International Realty",
  //     "mlsNumber": "66837c32-825d-4d09-98a4-a9b9d574ac3e",
  //     "listingAgent": {
  //       "name": "Sofia Falleroni",
  //       "phone": "3474469088",
  //       "email": "sofia.falleroni@compass.com"
  //     },
  //     "listingOffice": {
  //       "name": "Sotheby's International Realty - East Side Manhattan Brokerage",
  //       "phone": "2126067660",
  //       "email": "marissa.ghesquiere@sothebyshomes.com",
  //       "website": "https://www.sothebysrealty.com/nyc"
  //     },
  //     "history": {
  //       "2025-02-27": {
  //         "event": "Rental Listing",
  //         "price": 5800,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-27T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 12
  //       }
  //     }
  //   },
  //   {
  //     "id": "306-W-4th-St,-Apt-C1,-New-York,-NY-10014",
  //     "formattedAddress": "306 W 4th St, Apt C1, New York, NY 10014",
  //     "addressLine1": "306 W 4th St",
  //     "addressLine2": "Apt C1",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10014",
  //     "county": "New York",
  //     "latitude": 40.737116,
  //     "longitude": -74.004003,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "yearBuilt": 1910,
  //     "status": "Active",
  //     "price": 6500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-27T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-08-21T15:54:44.106Z",
  //     "lastSeenDate": "2025-03-10T03:37:22.442Z",
  //     "daysOnMarket": 12,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "b5d1a57e-4845-45fd-832f-4874881734ff",
  //     "listingAgent": {
  //       "name": "Tova Bourque",
  //       "phone": "2125007000",
  //       "email": "tova.bourque@corcoran.com",
  //       "website": "http://www.corcoran.com/tbourque"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran SoHo",
  //       "phone": "2129412500",
  //       "email": "brennan.zahler@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-27": {
  //         "event": "Rental Listing",
  //         "price": 6500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-27T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 12
  //       }
  //     }
  //   },
  //   {
  //     "id": "435-E-86th-St,-Apt-1E,-New-York,-NY-10028",
  //     "formattedAddress": "435 E 86th St, Apt 1E, New York, NY 10028",
  //     "addressLine1": "435 E 86th St",
  //     "addressLine2": "Apt 1E",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10028",
  //     "county": "New York",
  //     "latitude": 40.776466,
  //     "longitude": -73.947983,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "lotSize": 7378,
  //     "yearBuilt": 1968,
  //     "status": "Active",
  //     "price": 3350,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-27T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2023-11-18T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:37:22.125Z",
  //     "daysOnMarket": 12,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "a64fd650-deba-4eaa-af7e-b5eaa9e32492",
  //     "listingAgent": {
  //       "name": "Rory Nichols",
  //       "phone": "9175337056",
  //       "email": "rory.nichols@corcoran.com"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Park Avenue South",
  //       "phone": "2127743800",
  //       "email": "bullman@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-02-27": {
  //         "event": "Rental Listing",
  //         "price": 3350,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-27T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 12
  //       }
  //     }
  //   },
  //   {
  //     "id": "1600-Broadway,-Apt-19B,-New-York,-NY-10019",
  //     "formattedAddress": "1600 Broadway, Apt 19B, New York, NY 10019",
  //     "addressLine1": "1600 Broadway",
  //     "addressLine2": "Apt 19B",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10019",
  //     "county": "New York",
  //     "latitude": 40.760191,
  //     "longitude": -73.984351,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 889,
  //     "yearBuilt": 2006,
  //     "status": "Active",
  //     "price": 5500,
  //     "listingType": "Standard",
  //     "listedDate": "2023-04-14T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-03-02T17:51:36.934Z",
  //     "lastSeenDate": "2025-03-10T03:36:48.175Z",
  //     "daysOnMarket": 697,
  //     "history": {
  //       "2023-04-14": {
  //         "event": "Rental Listing",
  //         "price": 5500,
  //         "listingType": "Standard",
  //         "listedDate": "2023-04-14T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 697
  //       }
  //     }
  //   },
  //   {
  //     "id": "300-Albany-St,-Apt-4F,-New-York,-NY-10280",
  //     "formattedAddress": "300 Albany St, Apt 4F, New York, NY 10280",
  //     "addressLine1": "300 Albany St",
  //     "addressLine2": "Apt 4F",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10280",
  //     "county": "New York",
  //     "latitude": 40.709916,
  //     "longitude": -74.016855,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "status": "Active",
  //     "price": 4650,
  //     "listingType": "Standard",
  //     "listedDate": "2023-01-12T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2019-04-25T23:36:37.976Z",
  //     "lastSeenDate": "2025-03-10T03:36:48.118Z",
  //     "daysOnMarket": 789,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "277217218",
  //     "listingAgent": {
  //       "name": "Leonardo Mora",
  //       "phone": "2124027855",
  //       "email": "leonardo@bouklisgroup.com"
  //     },
  //     "listingOffice": {
  //       "name": "The Bouklis Group - The Bouklis Group",
  //       "phone": "2124027855",
  //       "email": "info@bouklisgroup.com"
  //     },
  //     "history": {
  //       "2023-01-12": {
  //         "event": "Rental Listing",
  //         "price": 4650,
  //         "listingType": "Standard",
  //         "listedDate": "2023-01-12T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 789
  //       }
  //     }
  //   },
  //   {
  //     "id": "1623-3rd-Ave,-Apt-28C,-New-York,-NY-10128",
  //     "formattedAddress": "1623 3rd Ave, Apt 28C, New York, NY 10128",
  //     "addressLine1": "1623 3rd Ave",
  //     "addressLine2": "Apt 28C",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10128",
  //     "county": "New York",
  //     "latitude": 40.782015,
  //     "longitude": -73.950669,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 800,
  //     "status": "Active",
  //     "price": 3700,
  //     "listingType": "Standard",
  //     "listedDate": "2022-11-15T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2022-11-16T00:46:19.730Z",
  //     "lastSeenDate": "2025-03-10T03:33:07.485Z",
  //     "daysOnMarket": 847,
  //     "mlsName": "NestSeekers",
  //     "mlsNumber": "2558156",
  //     "listingAgent": {
  //       "name": "Gibraan Ali",
  //       "phone": "6463356826",
  //       "email": "ga@nestseekers.com",
  //       "website": "https://www.nestseekers.com/agent/gibraan-ali"
  //     },
  //     "listingOffice": {
  //       "name": "Nest Seekers International, Long Island",
  //       "phone": "6463356826",
  //       "email": "info@nestseekers.com"
  //     },
  //     "history": {
  //       "2022-11-15": {
  //         "event": "Rental Listing",
  //         "price": 3700,
  //         "listingType": "Standard",
  //         "listedDate": "2022-11-15T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 847
  //       }
  //     }
  //   },
  //   {
  //     "id": "155-Attorney-St,-Apt-6B,-New-York,-NY-10002",
  //     "formattedAddress": "155 Attorney St, Apt 6B, New York, NY 10002",
  //     "addressLine1": "155 Attorney St",
  //     "addressLine2": "Apt 6B",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10002",
  //     "county": "New York",
  //     "latitude": 40.720581,
  //     "longitude": -73.983559,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "status": "Active",
  //     "price": 4800,
  //     "listingType": "Standard",
  //     "listedDate": "2025-02-28T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-07-07T07:20:49.261Z",
  //     "lastSeenDate": "2025-03-10T03:31:01.418Z",
  //     "daysOnMarket": 11,
  //     "history": {
  //       "2025-02-28": {
  //         "event": "Rental Listing",
  //         "price": 4800,
  //         "listingType": "Standard",
  //         "listedDate": "2025-02-28T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 11
  //       }
  //     }
  //   },
  //   {
  //     "id": "140-Charles-St,-Apt-18D,-New-York,-NY-10014",
  //     "formattedAddress": "140 Charles St, Apt 18D, New York, NY 10014",
  //     "addressLine1": "140 Charles St",
  //     "addressLine2": "Apt 18D",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10014",
  //     "county": "New York",
  //     "latitude": 40.734035,
  //     "longitude": -74.008347,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 715,
  //     "status": "Active",
  //     "price": 7995,
  //     "listingType": "Standard",
  //     "listedDate": "2025-03-01T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2019-11-07T13:28:59.292Z",
  //     "lastSeenDate": "2025-03-10T03:31:01.342Z",
  //     "daysOnMarket": 10,
  //     "history": {
  //       "2025-03-01": {
  //         "event": "Rental Listing",
  //         "price": 7995,
  //         "listingType": "Standard",
  //         "listedDate": "2025-03-01T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 10
  //       }
  //     }
  //   },
  //   {
  //     "id": "5-E-44th-St,-Apt-4B,-New-York,-NY-10017",
  //     "formattedAddress": "5 E 44th St, Apt 4B, New York, NY 10017",
  //     "addressLine1": "5 E 44th St",
  //     "addressLine2": "Apt 4B",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10017",
  //     "county": "New York",
  //     "latitude": 40.754662,
  //     "longitude": -73.979078,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 629,
  //     "yearBuilt": 2007,
  //     "status": "Active",
  //     "price": 4600,
  //     "listingType": "New Construction",
  //     "listedDate": "2025-03-01T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2019-08-22T05:30:49.831Z",
  //     "lastSeenDate": "2025-03-10T03:31:01.316Z",
  //     "daysOnMarket": 10,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "7172297",
  //     "listingAgent": {
  //       "name": "Anne Chang",
  //       "phone": "9174940531",
  //       "email": "anne@jadestonenyc.com"
  //     },
  //     "listingOffice": {
  //       "name": "Jade Stone Real Estate Consulting - Jade Stone Real Estate Consulting",
  //       "phone": "9178108592",
  //       "email": "anne@jadestonerealestate.com"
  //     },
  //     "history": {
  //       "2025-03-01": {
  //         "event": "Rental Listing",
  //         "price": 4600,
  //         "listingType": "New Construction",
  //         "listedDate": "2025-03-01T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 10
  //       }
  //     }
  //   },
  //   {
  //     "id": "20-West-St,-Apt-15J,-New-York,-NY-10004",
  //     "formattedAddress": "20 West St, Apt 15J, New York, NY 10004",
  //     "addressLine1": "20 West St",
  //     "addressLine2": "Apt 15J",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10004",
  //     "county": "New York",
  //     "latitude": 40.706184,
  //     "longitude": -74.01561,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 705,
  //     "yearBuilt": 1930,
  //     "status": "Active",
  //     "price": 4500,
  //     "listingType": "Standard",
  //     "listedDate": "2025-03-01T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-03-01T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:31:01.285Z",
  //     "daysOnMarket": 10,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "504819053",
  //     "listingAgent": {
  //       "name": "Robert Robert Nicol",
  //       "phone": "3476248341",
  //       "email": "rnicol@spiregroupny.com"
  //     },
  //     "listingOffice": {
  //       "name": "Spire Group Inc.- Main Office",
  //       "phone": "2125001900",
  //       "email": "info@spiregroupny.com"
  //     },
  //     "history": {
  //       "2025-03-01": {
  //         "event": "Rental Listing",
  //         "price": 4500,
  //         "listingType": "Standard",
  //         "listedDate": "2025-03-01T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 10
  //       }
  //     }
  //   },
  //   {
  //     "id": "217-E-83rd-St,-Apt-4B,-New-York,-NY-10028",
  //     "formattedAddress": "217 E 83rd St, Apt 4B, New York, NY 10028",
  //     "addressLine1": "217 E 83rd St",
  //     "addressLine2": "Apt 4B",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10028",
  //     "county": "New York",
  //     "latitude": 40.776671,
  //     "longitude": -73.954348,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 750,
  //     "lotSize": 2550,
  //     "yearBuilt": 1901,
  //     "status": "Active",
  //     "price": 3800,
  //     "listingType": "Standard",
  //     "listedDate": "2025-03-04T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-05-15T19:23:20.000Z",
  //     "lastSeenDate": "2025-03-10T03:20:52.450Z",
  //     "daysOnMarket": 7,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "1262b070-31ec-41f7-bbf1-ac8a8c87ffd4",
  //     "listingAgent": {
  //       "name": "Jordan Skurnik",
  //       "phone": "2126857777",
  //       "email": "jskurnik@corcoran.com"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Park Avenue South",
  //       "phone": "2127743800",
  //       "email": "bullman@corcoran.com",
  //       "website": "http://www.corcoran.com/aboutus/index.aspx"
  //     },
  //     "history": {
  //       "2025-03-04": {
  //         "event": "Rental Listing",
  //         "price": 3800,
  //         "listingType": "Standard",
  //         "listedDate": "2025-03-04T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 7
  //       }
  //     }
  //   },
  //   {
  //     "id": "300-W-110th-St,-Apt-20K,-New-York,-NY-10026",
  //     "formattedAddress": "300 W 110th St, Apt 20K, New York, NY 10026",
  //     "addressLine1": "300 W 110th St",
  //     "addressLine2": "Apt 20K",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10026",
  //     "county": "New York",
  //     "latitude": 40.800535,
  //     "longitude": -73.959246,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 586,
  //     "status": "Active",
  //     "price": 3400,
  //     "listingType": "Standard",
  //     "listedDate": "2025-03-04T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-09-04T07:40:00.400Z",
  //     "lastSeenDate": "2025-03-10T03:20:52.443Z",
  //     "daysOnMarket": 7,
  //     "mlsName": "NestSeekers",
  //     "mlsNumber": "4224062",
  //     "listingAgent": {
  //       "name": "Jennifer Mcclaren"
  //     },
  //     "listingOffice": {
  //       "name": "Nest Seekers International, Tribeca",
  //       "phone": "6469244319",
  //       "email": "info@nestseekers.com"
  //     },
  //     "history": {
  //       "2025-03-04": {
  //         "event": "Rental Listing",
  //         "price": 3400,
  //         "listingType": "Standard",
  //         "listedDate": "2025-03-04T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 7
  //       }
  //     }
  //   },
  //   {
  //     "id": "23-E-74th-St,-Apt-6F,-New-York,-NY-10021",
  //     "formattedAddress": "23 E 74th St, Apt 6F, New York, NY 10021",
  //     "addressLine1": "23 E 74th St",
  //     "addressLine2": "Apt 6F",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10021",
  //     "county": "New York",
  //     "latitude": 40.773335,
  //     "longitude": -73.964775,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 825,
  //     "yearBuilt": 1928,
  //     "status": "Active",
  //     "price": 5000,
  //     "listingType": "Standard",
  //     "listedDate": "2025-03-04T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2022-01-07T02:55:25.898Z",
  //     "lastSeenDate": "2025-03-10T03:20:52.432Z",
  //     "daysOnMarket": 7,
  //     "mlsName": "Sothebys International Realty",
  //     "mlsNumber": "3181f7d2-4de8-4ce5-a6d1-da4bfca9f9e8",
  //     "listingAgent": {
  //       "name": "Geraldine Greenberg"
  //     },
  //     "listingOffice": {
  //       "name": "Sotheby's International Realty - Downtown Manhattan",
  //       "phone": "2124312440",
  //       "email": "diane.levine@sothebyshomes.com",
  //       "website": "http://www.sothebyshomes.com/nyc"
  //     },
  //     "history": {
  //       "2025-03-04": {
  //         "event": "Rental Listing",
  //         "price": 5000,
  //         "listingType": "Standard",
  //         "listedDate": "2025-03-04T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 7
  //       }
  //     }
  //   },
  //   {
  //     "id": "121-E-23rd-St,-Apt-2C,-New-York,-NY-10010",
  //     "formattedAddress": "121 E 23rd St, Apt 2C, New York, NY 10010",
  //     "addressLine1": "121 E 23rd St",
  //     "addressLine2": "Apt 2C",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10010",
  //     "county": "New York",
  //     "latitude": 40.739916,
  //     "longitude": -73.985307,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "lotSize": 6160,
  //     "yearBuilt": 2005,
  //     "status": "Active",
  //     "price": 5695,
  //     "listingType": "Standard",
  //     "listedDate": "2025-03-03T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2023-04-05T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:20:52.422Z",
  //     "daysOnMarket": 8,
  //     "mlsName": "CorcoranGroup",
  //     "mlsNumber": "ef3f4c74-830a-4a67-a801-8d4f858fc72d",
  //     "listingAgent": {
  //       "name": "Amanda Kahn",
  //       "phone": "5168407230",
  //       "email": "amanda.kahn@corcoran.com"
  //     },
  //     "listingOffice": {
  //       "name": "Corcoran Chelsea/Flatiron",
  //       "phone": "2124447800",
  //       "email": "joel.dommel@corcoran.com",
  //       "website": "https://www.corcoran.com/real-estate-offices/detail/chelsea-flatiron/579"
  //     },
  //     "history": {
  //       "2025-03-03": {
  //         "event": "Rental Listing",
  //         "price": 5695,
  //         "listingType": "Standard",
  //         "listedDate": "2025-03-03T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 8
  //       }
  //     }
  //   },
  //   {
  //     "id": "150-W-51st-St,-Apt-2014,-New-York,-NY-10019",
  //     "formattedAddress": "150 W 51st St, Apt 2014, New York, NY 10019",
  //     "addressLine1": "150 W 51st St",
  //     "addressLine2": "Apt 2014",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10019",
  //     "county": "New York",
  //     "latitude": 40.761496,
  //     "longitude": -73.98255,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "status": "Active",
  //     "price": 4000,
  //     "listingType": "Standard",
  //     "listedDate": "2025-03-04T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2025-03-05T00:00:00.000Z",
  //     "lastSeenDate": "2025-03-10T03:20:52.414Z",
  //     "daysOnMarket": 7,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "2941452",
  //     "listingAgent": {
  //       "name": "Debbi Hildreth",
  //       "phone": "9178225052",
  //       "email": "dhildreth@grorealty.com"
  //     },
  //     "listingOffice": {
  //       "name": "Global Realty Opportunities LLC - GRO: Global Realty Opportunities NYC",
  //       "phone": "2128128600"
  //     },
  //     "history": {
  //       "2025-03-04": {
  //         "event": "Rental Listing",
  //         "price": 4000,
  //         "listingType": "Standard",
  //         "listedDate": "2025-03-04T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 7
  //       }
  //     }
  //   },
  //   {
  //     "id": "121-E-23rd-St,-Apt-6B,-New-York,-NY-10010",
  //     "formattedAddress": "121 E 23rd St, Apt 6B, New York, NY 10010",
  //     "addressLine1": "121 E 23rd St",
  //     "addressLine2": "Apt 6B",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10010",
  //     "county": "New York",
  //     "latitude": 40.739916,
  //     "longitude": -73.985307,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 700,
  //     "lotSize": 6160,
  //     "yearBuilt": 2005,
  //     "status": "Active",
  //     "price": 4995,
  //     "listingType": "Standard",
  //     "listedDate": "2022-06-26T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2022-06-29T03:12:42.167Z",
  //     "lastSeenDate": "2025-03-10T03:20:25.447Z",
  //     "daysOnMarket": 989,
  //     "mlsName": "NestSeekers",
  //     "mlsNumber": "2389577",
  //     "listingAgent": {
  //       "name": "Beth Lustbader",
  //       "phone": "2122528772",
  //       "email": "bethl@nestseekers.com",
  //       "website": "www.nestseekers.com/agent/beth-lustbader-4"
  //     },
  //     "listingOffice": {
  //       "name": "Nest Seekers International, Midtown",
  //       "phone": "2122528772",
  //       "email": "info@nestseekers.com"
  //     },
  //     "history": {
  //       "2022-06-26": {
  //         "event": "Rental Listing",
  //         "price": 4995,
  //         "listingType": "Standard",
  //         "listedDate": "2022-06-26T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 989
  //       }
  //     }
  //   },
  //   {
  //     "id": "158-E-100th-St,-Apt-2R,-New-York,-NY-10029",
  //     "formattedAddress": "158 E 100th St, Apt 2R, New York, NY 10029",
  //     "addressLine1": "158 E 100th St",
  //     "addressLine2": "Apt 2R",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10029",
  //     "county": "New York",
  //     "latitude": 40.787982,
  //     "longitude": -73.948583,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 600,
  //     "yearBuilt": 2006,
  //     "status": "Active",
  //     "price": 3095,
  //     "listingType": "Standard",
  //     "listedDate": "2022-03-29T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-08-08T17:00:11.856Z",
  //     "lastSeenDate": "2025-03-10T03:19:29.420Z",
  //     "daysOnMarket": 1078,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "33754622",
  //     "listingAgent": {
  //       "name": "Meirav Gavrielov",
  //       "phone": "9179710045",
  //       "email": "mg@peterashe.com"
  //     },
  //     "listingOffice": {
  //       "name": "Peter Ashe Real Estate- Peter Ashe Real Estate",
  //       "phone": "2127503322",
  //       "email": "aa@peterashe.com"
  //     },
  //     "history": {
  //       "2022-03-29": {
  //         "event": "Rental Listing",
  //         "price": 3095,
  //         "listingType": "Standard",
  //         "listedDate": "2022-03-29T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 1078
  //       }
  //     }
  //   },
  //   {
  //     "id": "301-E-79th-St,-Apt-35D,-New-York,-NY-10075",
  //     "formattedAddress": "301 E 79th St, Apt 35D, New York, NY 10075",
  //     "addressLine1": "301 E 79th St",
  //     "addressLine2": "Apt 35D",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10075",
  //     "county": "New York",
  //     "latitude": 40.773267,
  //     "longitude": -73.954405,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "yearBuilt": 1975,
  //     "status": "Active",
  //     "price": 3900,
  //     "listingType": "New Construction",
  //     "listedDate": "2022-05-03T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2022-05-04T02:14:04.455Z",
  //     "lastSeenDate": "2025-03-10T03:19:29.390Z",
  //     "daysOnMarket": 1043,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "33755759",
  //     "listingAgent": {
  //       "name": "Meirav Gavrielov",
  //       "phone": "9179710045",
  //       "email": "mg@peterashe.com"
  //     },
  //     "listingOffice": {
  //       "name": "Peter Ashe Real Estate- Peter Ashe Real Estate",
  //       "phone": "2127503322",
  //       "email": "aa@peterashe.com"
  //     },
  //     "history": {
  //       "2022-05-03": {
  //         "event": "Rental Listing",
  //         "price": 3900,
  //         "listingType": "New Construction",
  //         "listedDate": "2022-05-03T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 1043
  //       }
  //     }
  //   },
  //   {
  //     "id": "58-W-129th-St,-Unit-A2,-New-York,-NY-10027",
  //     "formattedAddress": "58 W 129th St, Unit A2, New York, NY 10027",
  //     "addressLine1": "58 W 129th St",
  //     "addressLine2": "Unit A2",
  //     "city": "New York",
  //     "state": "NY",
  //     "zipCode": "10027",
  //     "county": "New York",
  //     "latitude": 40.809851,
  //     "longitude": -73.943102,
  //     "propertyType": "Condo",
  //     "bedrooms": 1,
  //     "bathrooms": 1,
  //     "squareFootage": 726,
  //     "status": "Active",
  //     "price": 2795,
  //     "listingType": "New Construction",
  //     "listedDate": "2020-07-13T00:00:00.000Z",
  //     "removedDate": null,
  //     "createdDate": "2020-07-13T12:52:51.986Z",
  //     "lastSeenDate": "2025-03-10T03:19:29.387Z",
  //     "daysOnMarket": 1702,
  //     "mlsName": "RealtyMXNYC",
  //     "mlsNumber": "5541004",
  //     "listingAgent": {
  //       "name": "Hiroshi Kishiro",
  //       "phone": "2129837000",
  //       "email": "kishiro@taichirealty.com"
  //     },
  //     "history": {
  //       "2020-07-13": {
  //         "event": "Rental Listing",
  //         "price": 2795,
  //         "listingType": "New Construction",
  //         "listedDate": "2020-07-13T00:00:00.000Z",
  //         "removedDate": null,
  //         "daysOnMarket": 1702
  //       }
  //     }
  //   }
  // ];
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
