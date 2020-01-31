import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {

  @Input() items:any = []

  constructor(private routes:Router) { }

  verArist(artist:any){
    let Idx;
    if(artist.type === "artist"){
      Idx = artist.id
    }else{
      Idx = artist.artists[0].id
    }

    this.routes.navigate(['/artist',Idx]);
  }
}
