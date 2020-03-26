import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  showCakes: any;
  constructor( private _http:HttpClient ) { 
  }
    getCakes(){
      return this._http.get('/cakes');
    }
    addCake(newCake: any){
      console.log("This is from HttpService",newCake)
      return this._http.post('/cakes', newCake);
    }
    postRating(id, newRating){
      return this._http.post('/rating/new/'+id, newRating);
    }
    showCake(id, eachCake){
      return this._http.get('/cakes/'+id)
    }

  }

