import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service listo..');
  }
  // tslint:disable-next-line:typedef
  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer QApIcZFyjJPrxTr4HUgTQCdxRZcjGZp4u5TJHl54Tb1z2CBwqlPXwDwsV5ofVPHaL6s4iSRQ44NQ_ck7F8'
    });

    return this.http.get<any>( url , { headers });

  }

  // tslint:disable-next-line:typedef
  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( respuesta => respuesta.albums.items));
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQBODMTYfP7dysUHdMA91EYlWRg3AtQFCWcInOpDnvnK6b51q37n6GI-UmCPqrU0GrYdFy7svfZsSL_Wg24'
    // });
    // return this.http.get<any>('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers})
    //           .pipe( map( respuesta => respuesta.albums.items));

    // .subscribe( respuesta => {
    //       //  this.paises = respuesta;
    //        console.log( respuesta );
    //      });

  }
  // tslint:disable-next-line:typedef
  getArtistas( termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map( respuesta => respuesta.artists.items));
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQBODMTYfP7dysUHdMA91EYlWRg3AtQFCWcInOpDnvnK6b51q37n6GI-UmCPqrU0GrYdFy7svfZsSL_Wg24'
    // });
    // return this.http.get<any>(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers})
    //             .pipe( map( respuesta => respuesta.artists.items));
  }
  // tslint:disable-next-line:typedef
  getArtista( id: string){
    return this.getQuery(`artists/${id}`);
    // .pipe( map( respuesta => respuesta.artists.items));

  }
  // tslint:disable-next-line:typedef
  getTopTracks( id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
     .pipe( map( respuesta => respuesta.tracks));

  }
}
