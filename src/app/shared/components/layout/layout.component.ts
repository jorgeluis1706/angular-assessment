import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-layout',
    imports: [
        MatToolbar
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
