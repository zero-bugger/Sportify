import { Component, OnInit } from '@angular/core';
import { SpotifyapiService } from '../spotifyapi.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
query:string
results:Object
  constructor(private service:SpotifyapiService,
              private router:Router,
              private route:ActivatedRoute

    ) { 

      this.route.queryParams.subscribe(params=>{this.query=params['query']||'';});
    }
search():void{
  if(!this.query){
    return;
  }
  this.service.search(this.query).subscribe(res=>{this.renderResult(res)});
}

renderResult(res:any){
  this.results=null;
  if(res && res.tracks && res.tracks.items){
    this.results=res.tracks.items;
  }

}
ngOnInit(): void {
    
    this.search()


  }

submit(query:string){

    this.router.navigate(['search'],{queryParams:{query:query}}).then(_=>this.search()) 

}

}
