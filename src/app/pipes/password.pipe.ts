import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(str: string, activate:boolean): any {
    console.log(str + activate);
    let p ="";
    if(activate){
      
      for(let i = 0; i < str.length; i++){
        p += "*";
      }
      return p;
    }
    else
      return str;
  }

}
