import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  // srch:string = "fas";
  ngOnInit(): void {
  }


  performSearch(value: string):void{
    alert(value);
  }

  onSearchEnter(value: string) {
    this.performSearch(value); 
  }

}
