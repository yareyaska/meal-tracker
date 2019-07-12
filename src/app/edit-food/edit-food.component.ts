import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food';
@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
	  @Input() foodToEdit: Food; 
  	@Output() doneClickedSender = new EventEmitter();

  constructor() {   }

  ngOnInit() {
  }
  
  doneClicked() {
  this.doneClickedSender.emit();
}


}
