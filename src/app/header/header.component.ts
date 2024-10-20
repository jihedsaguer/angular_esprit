import { Component } from '@angular/core';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    protected readonly HomeComponent = HomeComponent;
}
