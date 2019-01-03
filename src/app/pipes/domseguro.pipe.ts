import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitizer:DomSanitizer){
    
  }
  transform(str: string, url: string): any {
    
    console.log(url + str);
    this.domSanitizer.bypassSecurityTrustResourceUrl(url + str);
  }

}
