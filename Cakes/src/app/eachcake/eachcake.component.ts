import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-eachcake',
  templateUrl: './eachcake.component.html',
  styleUrls: ['./eachcake.component.scss']
})
export class EachcakeComponent implements OnInit {
  @Input() selectCake: [];

  constructor() { 
    console.log("working")
  }

  ngOnInit() {}

}
