import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './table/search.pipe';
import {CounterPipe} from './table/counter.pipe';
import { StarComponent } from './star/star.component';
import {ProductService} from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchPipe,
    CounterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
