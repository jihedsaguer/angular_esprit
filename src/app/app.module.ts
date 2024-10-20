import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import {ProfileModule} from "./profile/profile.module";
import {FormsModule} from "@angular/forms";
import { ContainsPipe } from './contains.pipe';
import {HighlightDirective} from "./directives/highlight.directive";
import { AppRoutingModule } from './app-routing.module';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';


@NgModule({
  declarations: [
    //liste des composant
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HighlightDirective,
    ProductCategoriesComponent  // Declare the directive here

  ],
  imports: [
    BrowserModule,
    ProfileModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
