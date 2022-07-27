import { Component, OnInit } from '@angular/core';
import { Color } from '../../entidades/colores';
import { ServicioColoresService } from '../../servicios/servicio-colores.service';

@Component({
  selector: 'app-vista-colores',
  templateUrl: './vista-colores.component.html',
  styleUrls: ['./vista-colores.component.css']
})
export class VistaColoresComponent implements OnInit {
  colores: Color[];

  constructor( private svcColor:ServicioColoresService ) { }

  ngOnInit(): void {
    this.listarColores();
  }

  listarColores(){
    this.svcColor.getColores()
    .subscribe( data => {
      this.colores = data;
    })
  }

  eliminarColor( color:any ){
    this.svcColor.eliminarColores( color );
  }

}
