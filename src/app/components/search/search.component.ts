import { Component} from '@angular/core';
import { SpotiServiceService } from '../../services/spoti-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  loading:boolean=false;
  artists:any = [];
  error:boolean;
  merror:string;

  constructor(private _spoty:SpotiServiceService) { 
    this.error=false;  
  }

  buscar(termino:string){
    this.error=false;
    if(termino!=""){
      this.loading = true;
      this._spoty.getArtists(termino)
      .subscribe((data:any) =>{
          this.artists = data;
          this.loading=false;
        },(errorS) =>{
          this.loading=false;
          this.error=true;
          this.merror = errorS.error.error.message;
        });
    }else{
      this.artists =[];
    }
  }

}
