import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  propertyTypes: any/*PropertyType[]*/ = [
    {value: '0', viewValue: 'Appartment'},
    {value: '1', viewValue: 'House'},
    {value: '2', viewValue: 'Condo'}
  ];

}
