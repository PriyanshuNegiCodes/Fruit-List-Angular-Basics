import { Component } from '@angular/core';
import {fruitdata} from '../../app/Models/fruitlist'
@Component({
  selector: 'app-fruit-container',
  templateUrl: './fruit-container.component.html',
  styleUrls: ['./fruit-container.component.css']
})
export class FruitContainerComponent {
  data= fruitdata

}
