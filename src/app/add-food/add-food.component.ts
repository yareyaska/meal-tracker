import { Component, Output, EventEmitter } from '@angular/core';
import {Food} from '../food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent {
  @Output()  addNewFood= new EventEmitter();

addFood(name:string,description:string,calories:number){
  var newFoodObj:Food = new Food(name,description,calories);
  this.addNewFood.emit(newFoodObj);
}


}
