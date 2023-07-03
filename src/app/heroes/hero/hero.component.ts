import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

get capitalizedName (): string {
  return this.name.toUpperCase();
}

getHeroDescription(): string { //propiedad
  return `${this.name} - ${this.age}`;
}

changeHero(): string { //metodo
  return this.name = 'Spiderman'; //valor de retorno
}

changeAge(): number {
  return this.age = 25;
  //throw 'Metodo no implementado' ES UNA TAREA PENDIENTE
}

resetForm(): void{
  this.name = 'ironman';
  this.age = 45;
}
}

