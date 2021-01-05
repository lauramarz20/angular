import { Component } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  nombre: string = 'Capitán America';
  // tslint:disable-next-line:no-inferrable-types
  nombre2: string = 'LaUrA gIRlEZa mARtiNeZ';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   // tslint:disable-next-line:ban-types
   PI: Number = Math.PI;
   // tslint:disable-next-line:no-inferrable-types
   porcentaje: number = 0.234;
   // tslint:disable-next-line:no-inferrable-types
   salario: number = 1234.5;
   heroe = {
     nombre: 'Logan',
     clave : 'Wolverine',
     edad: 500,
     direccion : {
       calle: 'Primera',
       casa : 20
     }
   };
   fecha: Date = new Date();
   // tslint:disable-next-line:no-inferrable-types
   activar: boolean = true;
   // tslint:disable-next-line:no-inferrable-types
   idioma: string = 'fr';
   // tslint:disable-next-line:no-inferrable-types
   videoUrl: string = 'https://www.youtube.com/embed/hpBBvzrtr60';

       // tslint:disable-next-line:no-shadowed-variable
    valorPromesa =  new Promise( (resolve) => {
        resolve('Se terminó el timeout');
              });


  }
