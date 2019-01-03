import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalized'})
export class CapitalizedPipe implements PipeTransform {
    transform(arg0, arg1, arg2):string {
        console.log(arg0)
        arg0 = arg0.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        arg1 = arg1.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
        arg2 = arg2.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
        return arg0 + " " + arg1 + " " + arg2;

    }
}