import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  topTracks: any [] = [];
  constructor( private route: ActivatedRoute,
               private spotify: SpotifyService) {
    this.loading = true;
    this.route.params.subscribe( params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });

   }
   // tslint:disable-next-line:typedef
   getArtista( id: string){
     this.loading = true;
     this.spotify.getArtista(id)
     .subscribe( respuesta => {
        console.log(respuesta);
        this.artista = respuesta;
        this.loading = false;
     });
   }
   // tslint:disable-next-line:typedef
   getTopTracks( id: string){
    this.spotify.getTopTracks(id)
    .subscribe( respuesta => {
       console.log(respuesta);
       this.topTracks = respuesta;
      //  this.loading = false;
    });
   }

}
