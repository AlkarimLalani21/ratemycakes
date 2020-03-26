import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cakes: any;
  selectedCake: any;
  newCake: any;
  newRating: any;
  eachCake: any;

constructor(private _httpService: HttpService){ }
ngOnInit() {
  this.getcakes()
  this.newCake = { baker: "", img: "" };
  this.newRating = {stars: 0, comment: ""};
  this.cakes = []
}
selectCake(cake){
  this.selectedCake = cake;
  console.log("each cake", cake)
}
getcakes(){
  this._httpService.getCakes().subscribe(data=>{
    this.cakes = data;
  })
}
onSubmit(){
  let observable = this._httpService.addCake(this.newCake);
  observable.subscribe(data =>{
    console.log(data);

  });
  this.getcakes();
  this.newCake = { title: "", description: "" };
}
postRating(id){
  this._httpService.postRating(id,this.newRating).subscribe(data=>{
    this.getcakes();
  })
}
}