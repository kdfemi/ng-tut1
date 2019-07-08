import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    if(value.length > (limit || 10)){
      return value.substr(0,(limit || 10 )) + ' ...';
    }
   return value;
  }

}
