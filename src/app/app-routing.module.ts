import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import {ProductCategoriesComponent} from "./product-categories/product-categories.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Default route
  { path: 'contact', component: ContactComponent }, // Contact page
  { path: 'categories', component: ListCategoriesComponent },
  { path: 'product-categories', component: ProductCategoriesComponent }, // Categories list
  { path: 'product-categories/:id', component: ProductCategoriesComponent },
  // Add more routes as needed
  { path: '**', redirectTo: 'home', pathMatch:"full" } // Wildcard route for handling invalid URLs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
