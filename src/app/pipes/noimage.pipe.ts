import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any): string {
    if(!image){
      return 'assets/img/Not_found.png';
    }

    if(image.length > 1){
      return image[0].url;
    }else{
      return 'assets/img/Not_found.png';
    }
  }

}
