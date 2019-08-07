import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public someRange: number= 10
  public min: number = 9.5;
  public max: number = 9.6;
  public connect: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
