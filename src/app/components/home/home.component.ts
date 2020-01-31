import { Component } from '@angular/core';
import { SpotiServiceService } from '../../services/spoti-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  loading:boolean=true;
  medias:any = [];
  error:boolean;
  messajeError:string;
  
  constructor(private _spotiService:SpotiServiceService) { 

    this.loading=true;
    this.error=false;

    this._spotiService.getNewReleases()
      .subscribe((data:any)=>{
          this.medias = data;
          this.loading=false;
      },(errorS) =>{
        this.loading=false;
        this.error=true;
        this.messajeError = errorS.error.error.message;
      });  
  }
}
