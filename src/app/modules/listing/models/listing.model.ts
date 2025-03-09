/**
 * Listing model
 */
export interface Listing {
  id:               string;
  formattedAddress: string;
  addressLine1:     string;
  addressLine2:     null;
  city:             string;
  state:            string;
  zipCode:          string;
  county:           string;
  latitude:         number;
  longitude:        number;
  propertyType:     string;
  bedrooms:         number;
  bathrooms:        number;
  squareFootage:    number;
  lotSize:          number;
  yearBuilt:        number;
  hoa:              Hoa;
  status:           string;
  price:            number;
  listingType:      string;
  listedDate:       Date;
  removedDate:      null;
  createdDate:      Date;
  lastSeenDate:     Date;
  daysOnMarket:     number;
  mlsName:          string;
  mlsNumber:        string;
  listingAgent:     Agent;
  listingOffice:     Office;
  history:          History;
}

interface History {
  [key: string]: HistoryEntry;
}

interface HistoryEntry {
  event:        string;
  price:        number;
  listingType:  string;
  listedDate:   Date;
  removedDate:  null;
  daysOnMarket: number;
}

interface Hoa {
  fee: number;
}

interface Agent {
  name:    string;
  phone:   string;
  email:   string;
  website: string;
}

interface Office {
  name:    string;
  phone:   string;
  email:   string;
  website: string;
}
