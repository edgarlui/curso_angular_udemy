import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { first } from 'rxjs';
import { DbzService } from '../servicios/dbz.service';
import { AddCharacterComponent } from '../components/add-character/add-character.component';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

constructor ( private dbzService:DbzService){}

get character():Character[]{
  return [... this.dbzService.characters]
}

onDeleteCharacter(id:string):void {
  this.dbzService.deleteCharacterByid(id)
}
onNewCharacter(character:Character): void{
  this.dbzService.addCharacter(character);
}
}
