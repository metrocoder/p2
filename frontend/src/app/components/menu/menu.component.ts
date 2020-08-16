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

  loginPopup(){
    this.interactionService.backTransparent=true;
    this.interactionService.LoginContainer=true;
  }
}
