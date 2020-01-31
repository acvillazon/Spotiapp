import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { SpotiServiceService } from '../../services/spoti-service.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist:any = {};
  topTracks:any[]= [];
  loading:boolean=true;
  error:boolean;
  merror:string;

  constructor(private _params:ActivatedRoute,
              private _spoti:SpotiServiceService) { 
    this.loading = true;
    this.error = false;

    this._params.paramMap.subscribe(params =>{
      this.getTopTracks(params.get("id"));
      this.getArtist(params.get("id"));
    });
  }

  getArtist(idx:string){
    this.loading = true;

    this._spoti.getArtist(idx)
        .subscribe((data:any) =>{
          this.artist = data;
          this.loading=false;
      },(errorS) =>{
        this.loading=false;
        this.error=true;
        this.merror = errorS.error.error.message;
      }); 
  }

  getTopTracks(idx:string){
    this.loading = true;

    this._spoti.getTopTracks(idx)
        .subscribe((data:any) =>{
          this.topTracks = data;
          console.log(this.topTracks)

      },(errorS) =>{
        this.loading=false;
        this.error=true;
        this.merror = errorS.error.error.message;
      });
  }
    
    
}
