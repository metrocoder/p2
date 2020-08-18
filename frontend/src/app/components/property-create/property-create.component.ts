import { Component,OnInit } from '@angular/core';
import{ImageUploadService} from '../../services/image-upload.service';
import { DropFileComponent } from '../drop-file/drop-file.component';

@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent implements OnInit  {

  ngOnInit(): void {
  }

  constructor(private uploadService: ImageUploadService){
    
  }

  //uploading images to bucket
   newPropertyImages(){
    let imageFiles = this.uploadService.fileImport;
    let foldername:string = document.getElementById("LocationInput").innerHTML;
    for(let image of imageFiles){
    this.uploadService.createFolderAndUploadImages(image, foldername);
    }

  }


  propertyTypes: any/*PropertyType[]*/ = [
    {value: '0', viewValue: 'Appartment'},
    {value: '1', viewValue: 'House'},
    {value: '2', viewValue: 'Condo'}
  ];

  createProperty(){

    this.newPropertyImages();

    // let newProperty = {
    //   newPrice: document.getElementById("PriceInput").innerHTML,
    //   newAddress: document.getElementById("LocationInput").innerHTML,
    //   newSquareFeet: document.getElementById("SurfaceInput").innerHTML,
    //   imageLink: `${this.uploadService.folderImport}`
    // }
    // const type = {
    //   method:"POST",
    //   headers:{'Content-Type' : 'application/json'},
    //   body: JSON.stringify(newProperty)
    // };

    // const httpResponse = await fetch("http://localhost:7000/properties", type);

  }
}
