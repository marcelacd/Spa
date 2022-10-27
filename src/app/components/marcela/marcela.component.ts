import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marcela',
  templateUrl: './marcela.component.html',
})
export class MarcelaComponent {

  constructor() { }

  nombre: string = "Marcela";
  numero: number = 10;
  base : number = 5;

  contador (valor: number): void{
    this.numero += valor ;
    //console.log(this.numero)
  }

  resta (){
    this.numero = this.numero - this.base ;
    //console.log(this.numero)
  }

  

}