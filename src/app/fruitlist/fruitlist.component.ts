import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrls: ['./fruitlist.component.css']
})
export class FruitlistComponent {
@Input()
recievedata:any


singledata:any
senddata(datafromhtml:any){
  this.singledata=datafromhtml;
}
}
