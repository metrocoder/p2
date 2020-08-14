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

  getImage(imageInput:any){
    //const File : File = imageInput.files[0]
    //const reader = new FileReader();


  }
}
