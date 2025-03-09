import { Component } from '@angular/core';
import {LayoutComponent} from './shared/components/layout/layout.component';
import {ListingComponent} from './modules/listing/listing.component';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent,
    ListingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
