import { Component,OnInit } from '@angular/core';
import{ImageUploadService} from '../../services/image-upload.service';

@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent implements OnInit  {
  fileImport:any;

  ngOnInit(): void {
  }

  constructor(private uploadService: ImageUploadService){
    
  }

  uploadImage(){
    const file : File = this.fileImport.item(0);
    this.uploadService.uploadFile(file);
  }

  selectFile(event) {
    this.fileImport = event.target.files;
    }
}
