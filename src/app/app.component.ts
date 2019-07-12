import { Component } from '@angular/core';
import {Food} from './food';
import {FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Meal Tracker ';


  public masterFoodsList:Food[]=[
  
  	new Food("ugali","lunch", 343),
  	new Food("Cereals","Breakfast", 580),
  	new Food("Chapatis","Supper",288),
  	new Food("Pizza","snack",212)
  ];

	showFood(newFoodFromChild:Food){
    this.masterFoodsList.push(newFoodFromChild);
  }

  selectedFood:Food=null; 

  deleteFoodButton(deleteMeal:Food){
    var index:number = this.masterFoodsList.indexOf(deleteMeal);
    this.masterFoodsList.splice(index,1);
  }

  showFoodDetailToEdit(food:Food){
    this.selectedFood =food;
  }
  
  finishedEditing(){
     this.selectedFood=null;
   }






  }
