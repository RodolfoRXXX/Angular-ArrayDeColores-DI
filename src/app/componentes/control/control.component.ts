import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioColoresService } from 'src/app/servicios/servicio-colores.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor( private svcColor:ServicioColoresService ) { }

  ngOnInit(): void {
  }

  formColor = new FormGroup({
    inputColor: new FormControl('',
      [
        Validators.required,
      ]
    )
  })

  onSubmit(){
    this.svcColor.agregarColores( this.formColor.value.inputColor );
  }

}
