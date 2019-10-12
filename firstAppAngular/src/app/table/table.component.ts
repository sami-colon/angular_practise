import { Component } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})

export class TableComponent {
  title = 'This is Table component';
  inputText = '';
  public rating = 0;
  products: any[] = [{name: 'Suzanna', age: 1, email: 'sceyssen0@craigslist.org', phone: '330-589-0272', star : 1},
    {name: 'Testa', age: 0, email: 'diddens1@prnewswire.com', phone: '161-888-8854', star : 3.1},
    {name: 'Danyeaaalle', age: 3, email: 'diddens1@prnewswire.com', phone: '161-888-8854', star : 1.4},
    {name: 'Consuela', age: 3, email: 'chanford2@ustream.tv', phone: '187-214-3843', star : 2},
    {name: 'Emanuel', age: 4, email: 'ewhitney3@google.co.jp', phone: '768-194-3627', star : 2.5},
    {name: 'Pincusa', age: 5, email: 'pmacvaugh4@wikipedia.org', phone: '640-143-8625', star : 2.8},
    {name: 'Pinsa', age: 45, email: 'pmacvaugh4@wikipedia.org', phone: '640-143-8625', star : 3.3}] ;
}
