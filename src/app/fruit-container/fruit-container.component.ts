import { Component } from '@angular/core';
import {fruitdata} from '../../app/Models/fruitlist'
@Component({
  selector: 'app-fruit-container',
  templateUrl: './fruit-container.component.html',
  styleUrls: ['./fruit-container.component.css']
})
export class FruitContainerComponent {
  data= fruitdata;

  datafromchild(searchdata:any){
    if(searchdata==""){
      this.data=fruitdata;
    }else{
      this.data=fruitdata.filter(x=>x.name==searchdata)
    alert(this.data);
    }
    
  }

  fruitdatafromUser(addCardData:any){
    this.data.push(addCardData);
  }
}
