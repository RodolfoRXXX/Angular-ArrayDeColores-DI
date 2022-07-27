import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Color } from '../entidades/colores';
import { COLORES } from '../mock-colores';

@Injectable({
  providedIn: 'root'
})
export class ServicioColoresService {

  constructor() { }

  getColores() : Observable<Color[]>{
    return new Observable( (observer:Observer<Color[]>) => {
      observer.next(COLORES);
      observer.complete();
    })
  }

  agregarColores( color:any ){
    if(!COLORES.find( value => value.hexColor === color )){
      COLORES.push( { hexColor: color } );
    }
  }


  eliminarColores( color:any){
    let index = COLORES.findIndex( element => element.hexColor == color );
    if(index > -1){
      COLORES.splice( index,1 );
    }
  }

}
