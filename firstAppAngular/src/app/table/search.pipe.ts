import {Pipe, PipeTransform} from '@angular/core';
@ Pipe({
  name: 'searchPipe'
})

export class SearchPipe implements PipeTransform {
  transform(value: any, search: string): any {
    search = search ? search.toLowerCase() : null;
    // filter array value
    value = value.filter((product) => product.name.toLowerCase().indexOf(search) !== -1);
    return value;
  }
}
