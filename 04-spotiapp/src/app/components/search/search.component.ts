import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent   {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    }

  // tslint:disable-next-line:typedef
  buscar( termino: string){
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas(termino)
      .subscribe( respuesta => {
        console.log(respuesta);
        this.artistas = respuesta;
        this.loading = false;
            });
  }

}
