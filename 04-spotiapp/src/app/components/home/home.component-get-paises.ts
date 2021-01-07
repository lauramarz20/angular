import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  paises: object[] = [];

  constructor( private http: HttpClient ) 
  {

    console.log('Constructor del Home hecho...');
    this.http.get<any>('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( respuesta => {
           this.paises = respuesta;
           console.log( respuesta );
         });
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}
