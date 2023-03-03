import { Component, EventEmitter, Output } from '@angular/core';
import {fruit} from '../Models/fruitlist';
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {

  @Output()

  eventemitter=new EventEmitter();
  //id,name,unit
  fruitdatafromUser: fruit|any = {
    id:"",
    name:"",
    price:"",
    unit:"",
    imageurl:""
  }
  addCard(){
    this.eventemitter.emit(this.fruitdatafromUser);
  }
}
