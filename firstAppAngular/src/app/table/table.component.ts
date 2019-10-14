import {Component, OnInit} from '@angular/core';
import { ProductService} from '../product.service';

@Component({
  selector: 'table-component',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})

export class TableComponent implements OnInit {
  title = 'This is Table component';
  inputText = '';
  public rating = 0;
  products: any[];
  constructor(private _productService: ProductService) {}
  ngOnInit() {
    this.products = this._productService.getProducts();
  }
}
