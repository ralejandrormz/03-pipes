import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitizer:DomSanitizer){
    
  }
  transform(str: string, url: string): SafeResourceUrl {
    
    console.log(url + str);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + str);
  }

}
