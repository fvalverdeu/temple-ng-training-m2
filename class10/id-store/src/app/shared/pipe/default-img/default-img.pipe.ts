import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'defaultImg'
})
export class DefaultImgPipe implements PipeTransform {

  transform(value: string): string {
    return value ? `${environment.api}/${value}` : 'assets/img/img-not-found.png';
  }

}
