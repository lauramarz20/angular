import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  nuevasCanciones: any [] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(private spotify: SpotifyService )
  {
  this.loading = true;
  this.error = false;
  this.spotify.getNewReleases()
      .subscribe( respuesta => {
        console.log('aqui voy...');
        console.log(respuesta);
        this.nuevasCanciones = respuesta;
        this.loading = false;
            } , ( errorServicio ) => {
              console.log('entre al error...');
              this.loading = false;
              this.error = true;
              console.log(errorServicio);
              this.mensajeError = errorServicio.error.error.message;
            });
  }
}
