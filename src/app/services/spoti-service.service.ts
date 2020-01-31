import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule, HttpHeaderResponse } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotiServiceService {
  Token:string = "BQAxpL0di7_hAXXWUzYW1-iQV4P6xv8lDTvS4dm-zpUkopE9EICCNzbvRMd9t8J7ivI3IJsqfU4KU1lxXAE";
  
  constructor(private http:HttpClient) { 
      console.log("Service ready!!");
  }

  getQuery(query:string, params:HttpParams = null){
    const headers= new HttpHeaders({
      'Authorization': `Bearer ${this.Token}` 
    });

    const url = `https://api.spotify.com/v1/${query}`;
    console.log(url)
    let response;
    params != null ? response = this.http.get(url,{headers, params}) : response = this.http.get(url,{headers});
    return response;
  }

  getNewReleases(){
    
    const params = new HttpParams().set('country','CO');
    return this.getQuery("browse/new-releases",params)  
              .pipe(map( (data:any) => data.albums.items ));
              
  }

  getArtists(termio:string){
  
    const params = new HttpParams().set('q',`${termio}`).set("type","artist");
    return this.getQuery("search?limit=15", params)  
              .pipe(map( (data:any) => data.artists.items ));
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=CO`)
          .pipe(map( (data:any) => data.tracks ));

  }
  

  /*async RefreshToken(){
    await this.http.get("https://accounts.spotify.com/api/token")
      .subscribe(token =>{
        this.Token = token["access_token"];
        return 
      });
  };*/

}
