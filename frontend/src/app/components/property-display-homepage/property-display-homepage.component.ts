import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-display-homepage',
  templateUrl: './property-display-homepage.component.html',
  styleUrls: ['./property-display-homepage.component.css']
})
export class PropertyDisplayHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  propertyClick(){
    alert("property Click")
  }

}
