import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Rafael";
  nameLower = "rafael alejandro manzo ramírez";
  arr:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  a:number = 0.234; 
  salary:number = 500.01; 

  heroe = {
    nombre : "Logan",
    clave : "Wolverine",
    edad : "500",
    direccion : {
      calle : "Calle X",
      numero : "1000",
      ciudad : "X",
      estado : "USA"
    },
    habilidad : "Regeneración",
  }

  promiseValue = new Promise( (resolve, reject) => {
    
    setTimeout( ()=>resolve("Llego la data"), 3500 )
  })

  date  = new Date();
  
  video = "AZ3fmcnG8oY";
  
  activate:boolean = true;
}
