import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { Familia } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
 
  //propiedad
  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router) {
  //console.log(constructor);
  }
  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

    verHeroe ( idx:number ){
      this.router.navigate( ['/heroe', idx]);

  }

  verHeroes (){
    this.router.navigate( ['/heroes']);

}

}