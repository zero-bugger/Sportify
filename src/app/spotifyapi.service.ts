import { Injectable } from '@angular/core';
import { spotifydata  } from './spotifydata'
import { map } from 'rxjs/operators';
import { HttpClientModule,HttpClient } from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class SpotifyapiService {

  api_url:string = "https://api.spotify.com/v1/search"
  constructor(private http:HttpClient) { }

  search(query:string ){

    const params: string =[
      `q=${query}`,
      `type=track`
    ].join('&');

    let queryUrl= `${this.api_url}?${params}`;
    return this.http.get(queryUrl).pipe(map(res=>res.toString()));

   

  }
}
