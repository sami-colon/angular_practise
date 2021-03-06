import {Pipe, PipeTransform} from '@angular/core';
@ Pipe({
  name: 'counterPipe'
})

export class CounterPipe implements PipeTransform {
  transform(value: any): number {
    return value.length;
  }
}
