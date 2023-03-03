import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()
  eventobj=new EventEmitter();


  searchFruits:string=""
  display(){
    this.eventobj.emit(this.searchFruits);

  }

}
