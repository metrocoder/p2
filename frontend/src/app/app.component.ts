import { Component } from '@angular/core';
import{ImageUploadService} from './services/image-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "p3";
}
// export class UploadComponent implements OnInit {

//   selectedFiles: FileList;
  
//   constructor(private uploadService: ImageUploadService) { }
  
//   ngOnInit() {
//   }
  
//   upload() {
//   const file = this.selectedFiles.item(0);
//   this.uploadService.uploadFile(file);
//   }
  
//   selectFile(event) {
//   this.selectedFiles = event.target.files;
//   }
//     }