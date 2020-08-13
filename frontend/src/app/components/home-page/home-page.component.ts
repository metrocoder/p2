import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Input() minValue:number;
  @Input() maxValue:number;
  @Input() searchValue;


  constructor() { }


  ngOnInit(): void {
  }


  async search() {

    alert("search for " +  this.searchValue);
    this.searchValue = "";
  }

  lowToHighCost(){
    alert("low to high button");
  }

  highToLowCost(){
    alert("high to low button");
  }

  costBetween(){
    alert("cost betweeen: " + this.minValue + " and " + this.maxValue);
  }
}