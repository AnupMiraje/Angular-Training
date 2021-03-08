import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sq'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("value which is of type any" + value);
    console.log("args which is array of any[]" + args);
    return value*value;
  }

}
