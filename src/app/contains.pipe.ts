import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from './models/categorie' ;
@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  // The value parameter is the array of categories, and the args is the search term
  transform(categories: Categorie[], searchTerm: string): Categorie[] {
    if (!categories || !searchTerm) {
      return categories;  // If no search term is provided, return the entire list
    }
    // Filter the categories by checking if their title contains the search term
    return categories.filter(category =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
