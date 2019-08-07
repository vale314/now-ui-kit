import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  scrollToDownload(){
      $("html, body").animate({
        scrollTop: $('.section-download').offset().top
      }, 1000);
    }
}
