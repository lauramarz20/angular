import { Component,  Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {
  @Input() items: any [] = [];

  constructor( private router: Router) { }

  // tslint:disable-next-line:typedef
  verArtista( item: any){
    console.log('Ver artista...');
    console.log(item);
    // tslint:disable-next-line:prefer-const
    let artistaId;
    if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
    artistaId = item.artists[0].id;
  }
    this.router.navigate(['/artist', artistaId]);
}
}
