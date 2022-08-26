import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorted'
})
export class SortedPipe implements PipeTransform {
  transform(value: any, propName: string): any {
    return value.sort((a, b) => a[propName].localeCompare(b[propName]));
  }
}
