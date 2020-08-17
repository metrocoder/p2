import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction-service/interaction.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private interactionService:InteractionService) { }

  ngOnInit(): void {
  }

  backTransparent:boolean=false;
  LoginContainer:boolean=false;
  createPropertyContainer:boolean=false;

  loginPopup(){
    this.backTransparent=true;
    this.LoginContainer=true;
  }


  loginPopupClose(){
    this.backTransparent=false;
    this.LoginContainer=false;
  }

  createPropertyClose(){
    this.backTransparent=false;
    this.createPropertyContainer=false;
  }

  createProperty(){
    this.backTransparent=true;
    this.createPropertyContainer=true;
  }
}
