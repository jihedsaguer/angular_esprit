import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  id: number | null = null;

  constructor(private route: ActivatedRoute) {
    console.log("Constructor called");
  }

  ngOnInit(): void {
    // Subscribe to route parameters to get the 'id'
    this.route.params.subscribe(params => {
      this.id = +params.get('id')!; // Use '+' to convert string to number
      console.log('Category ID from URL:', this.id);
    });
  }
}
