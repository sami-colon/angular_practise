import { Component } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})

export class TableComponent {
  title: string = 'This is Table component';
  inputText: string = "";
  products:any[] = [{"name":"Suzanna","age":1,"email":"sceyssen0@craigslist.org","phone":"330-589-0272"},
    {"name":"Danyelle","age":2,"email":"diddens1@prnewswire.com","phone":"161-888-8854"},
    {"name":"Consuela","age":3,"email":"chanford2@ustream.tv","phone":"187-214-3843"},
    {"name":"Emanuel","age":4,"email":"ewhitney3@google.co.jp","phone":"768-194-3627"},
    {"name":"Pincus","age":5,"email":"pmacvaugh4@wikipedia.org","phone":"640-143-8625"},
    {"name":"Justin","age":6,"email":"jderell5@squarespace.com","phone":"551-258-3445"},
    {"name":"Jacquie","age":7,"email":"jknaggs6@yahoo.co.jp","phone":"949-219-6974"},
    {"name":"Gardie","age":8,"email":"gschirach7@acquirethisname.com","phone":"866-707-4920"},
    {"name":"Irma","age":9,"email":"icoulton8@delicious.com","phone":"107-468-7811"},
    {"name":"Rosina","age":10,"email":"rlibrey9@yandex.ru","phone":"223-558-4408"},
    {"name":"Mildred","age":11,"email":"msodeaua@blog.com","phone":"879-632-8895"},
    {"name":"Rolando","age":12,"email":"rmalekb@ft.com","phone":"771-787-7335"},
    {"name":"Maure","age":13,"email":"msharrierc@amazon.com","phone":"658-514-5428"},
    {"name":"Gill","age":14,"email":"gkeetsd@vk.com","phone":"162-558-2577"},
    {"name":"Willie","age":15,"email":"wcaesare@china.com.cn","phone":"222-636-7155"},
    {"name":"Humfrid","age":16,"email":"hperellif@google.cn","phone":"792-329-9735"},
    {"name":"Marnia","age":17,"email":"mjeromeg@dagondesign.com","phone":"597-338-0507"},
    {"name":"Amelie","age":18,"email":"adegueh@ow.ly","phone":"731-756-9665"},
    {"name":"Hatti","age":19,"email":"hattocki@umich.edu","phone":"187-438-7130"},
    {"name":"Binny","age":20,"email":"bsprakesj@xinhuanet.com","phone":"884-557-3833"}] ;
}
